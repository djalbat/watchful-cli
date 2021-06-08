"use strict";

const path = require("path");

const { SWC_CORE_PATH, BABEL_CORE_PATH } = require("../paths"),
      { writeFile, createParentDirectory } = require("../utilities/fileSystem"),
      { BABEL, INLINE, SOURCE_MAP_PREAMBLE } = require("../constants"),
      { sourceFileNameFromSourceFilePathAndTargetFilePath } = require("../utilities/sourceMap"),
      { SWC_FAILED_MESSAGE,
        BABEL_FAILED_MESSAGE,
        SWC_NOT_INSTALLED_MESSAGE,
        BABEL_NOT_INSTALLED_MESSAGE } = require("../messages");

function createTranspileFileFunction(context) {
  const { debug, transpiler } = context,
        transpileFileFunction = (transpiler === BABEL) ?
                                  createBabelTranspileFileFunction(debug) :
                                    createSWCTranspileFileFunction(debug);

  return transpileFileFunction;
}

module.exports = {
  createTranspileFileFunction
};

function createBabelTranspileFileFunction(debug) {
  let babelTranspileFileFunction = null;

  try {
    const babelCorePath = path.resolve(BABEL_CORE_PATH),
          babel = require(babelCorePath),
          transpiler = babel; ///

    babelTranspileFileFunction = (sourceFilePath, targetFilePath, callback) => {
      let options;

      if (debug) {
        const sourceMaps = INLINE,  ///
              sourceFileName = sourceFileNameFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath),
              options = {
                sourceFileName
              };

        Object.assign(options, {
          sourceMaps
        });
      } else {
        options = {};
      }

      transpiler.transformFile(sourceFilePath, options, (error, result) => {
        if (error) {
          const success = false,
                { message } = error;

          error = message;  ///

          console.log(`${BABEL_FAILED_MESSAGE}
${error}`);

          callback(success);

          return;
        }

        const { code } = result,
              success = true,
              targetFileContent = code; ///

        createParentDirectory(targetFilePath);

        writeFile(targetFilePath, targetFileContent);

        callback(success);
      });
    };
  } catch (error) {
    console.log(BABEL_NOT_INSTALLED_MESSAGE);
  }

  return babelTranspileFileFunction;
}

function createSWCTranspileFileFunction(debug) {
  let swcTranspileFileFunction = null;

  try {
    const swcCorePath = path.resolve(SWC_CORE_PATH),
          swc = require(swcCorePath),
          transpiler = swc; ///

    swcTranspileFileFunction = (sourceFilePath, targetFilePath, callback) => {
      const sourceMaps = debug, ///
            filename = targetFilePath,  ///
            options = {
              filename,
              sourceMaps
            }

      transpiler.transformFile(sourceFilePath, options)
        .then((output) => {
          const success = true;

          let targetFileContent;

          if (debug) {
            const { code, map } = output,
                  mapJSON = JSON.parse(map),
                  sourceFileName = sourceFileNameFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath),
                  source = sourceFileName,  ///
                  sources = [
                    source
                  ];

            Object.assign(mapJSON, {
              sources
            });

            const mapJSONString = JSON.stringify(mapJSON),
                  base64EncodedMapJSONString = Buffer.from(mapJSONString).toString("base64");

            targetFileContent = `${code}
${SOURCE_MAP_PREAMBLE}${base64EncodedMapJSONString}`; ///
          } else {
            const { code } = output;

            targetFileContent = code; ///
          }

          createParentDirectory(targetFilePath);

          writeFile(targetFilePath, targetFileContent);

          callback(success);
        })
        .catch((error) => {
          const success = false;

          console.log(`${SWC_FAILED_MESSAGE}
${error}`);

          callback(success);
        });
    };
  } catch (error) {
    console.log(SWC_NOT_INSTALLED_MESSAGE);
  }

  return swcTranspileFileFunction;
}
