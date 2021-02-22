"use strict";

const path = require("path");

const paths = require("../paths"),
      messages = require("../messages"),
      constants = require("../constants"),
      pathUtilities = require("../utilities/path"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { SWC_CORE_PATH, BABEL_CORE_PATH } = paths,
      { writeFile, createParentDirectory } = fileSystemUtilities,
      { pathWithoutBottommostNameFromPath } = pathUtilities,
      { BABEL, INLINE, SOURCE_MAP_PREAMBLE } = constants,
      { SWC_FAILED_MESSAGE,
        BABEL_FAILED_MESSAGE,
        SWC_NOT_INSTALLED_MESSAGE,
        BABEL_NOT_INSTALLED_MESSAGE } = messages;

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
      const targetFilePathWithoutBottommostName = pathWithoutBottommostNameFromPath(targetFilePath),
            relativeSourceFilePath = path.relative(targetFilePathWithoutBottommostName, sourceFilePath),
            sourceFileName = relativeSourceFilePath,  ///
            options = {
              sourceFileName
            };

      if (debug) {
        const sourceMaps = INLINE;

        Object.assign(options, {
          sourceMaps
        });
      }

      transpiler.transformFile(sourceFilePath, options, (error, result) => {
        if (error) {
          const success = false,
                { message } = error;

          error = message;  ///

          console.log(BABEL_FAILED_MESSAGE);

          console.log(error);

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
          const success = true,
                { code, map } = output,
                mapJSON = JSON.parse(map),
                mapJSONString = JSON.stringify(mapJSON),
                base64EncodedMapJSONString = Buffer.from(mapJSONString).toString("base64"),
                targetFileContent = `${code}
${SOURCE_MAP_PREAMBLE}${base64EncodedMapJSONString}`; ///

          createParentDirectory(targetFilePath);

          writeFile(targetFilePath, targetFileContent);

          callback(success);
        })
        .catch((error) => {
          const success = false;

          console.log(SWC_FAILED_MESSAGE);

          console.log(error);

          callback(success);
        });
    };
  } catch (error) {
    console.log(SWC_NOT_INSTALLED_MESSAGE);
  }

  return swcTranspileFileFunction;
}
