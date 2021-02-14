"use strict";

const path = require("path");

const paths = require("../paths"),
      messages = require("../messages"),
      constants = require("../constants"),
      pathUtilities = require("../utilities/path"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { BABEL, INLINE } = constants,
      { SWC_CORE_PATH, BABEL_CORE_PATH } = paths,
      { writeFile, createParentDirectory } = fileSystemUtilities,
      { combinePaths, pathWithoutBottommostNameFromPath } = pathUtilities,
      { SWC_FAILED_MESSAGE,
        BABEL_FAILED_MESSAGE,
        SWC_NOT_INSTALLED_MESSAGE,
        BABEL_NOT_INSTALLED_MESSAGE } = messages;

function transpileFile(filePath, context, callback) {
  const { transpiler, sourceDirectoryPath, targetDirectoryPath } = context,
        sourceFilePath = combinePaths(sourceDirectoryPath, filePath),  ///
        targetFilePath = combinePaths(targetDirectoryPath, filePath);  ///

  (transpiler === BABEL) ?
    babelFile(sourceFilePath, targetFilePath, context, callbackEx) :
      swcFile(sourceFilePath, targetFilePath, context, callbackEx);

  function callbackEx(success) {
    const { quietly } = context;

    if (!quietly) {
      console.log(`Transpiled '${sourceFilePath}'.`);
    }

    callback(success);
  }
}

module.exports = {
  transpileFile
};

function babelFile(sourceFilePath, targetFilePath, context, callback) {
  let transpiler;

  const { debug } = context,
        targetFilePathWithoutBottommostName = pathWithoutBottommostNameFromPath(targetFilePath),
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

  try {
    const babelCorePath = path.resolve(BABEL_CORE_PATH),
          babel = require(babelCorePath);

    transpiler = babel; ///
  } catch (error) {
    const success = false;

    console.log(BABEL_NOT_INSTALLED_MESSAGE);

    callback(success);

    return;
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
}

function swcFile(sourceFilePath, targetFilePath, context, callback) {
  let transpiler;

  try {
    const swcCorePath = path.resolve(SWC_CORE_PATH),
          swc = require(swcCorePath);

    transpiler = swc; ///
  } catch (error) {
    const success = false;

    console.log(SWC_NOT_INSTALLED_MESSAGE);

    callback(success);

    return;
  }

  const { debug } = context,
        sourceMaps = debug, ///
        filename = targetFilePath,  ///
        options = {
          filename,
          sourceMaps
        }

  transpiler.transformFile(sourceFilePath, options)
    .then((output) => {
      const success = true,
            { code, map } = output,
            targetFileContent = code; ///

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
}
