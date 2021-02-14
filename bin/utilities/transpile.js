"use strict";

const path = require("path");

const paths = require("../paths"),
      messages = require("../messages"),
      constants = require("../constants"),
      pathUtilities = require("../utilities/path"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { INLINE } = constants,
      { BABEL_CORE_PATH } = paths,
      { writeFile, createParentDirectory } = fileSystemUtilities,
      { combinePaths, pathWithoutBottommostNameFromPath } = pathUtilities,
      { BABEL_FAILED_MESSAGE, BABEL_NOT_INSTALLED_MESSAGE } = messages;

function transpileFile(filePath, context, callback) {
  const { debug, sourceDirectoryPath, targetDirectoryPath } = context,
        sourceFilePath = combinePaths(sourceDirectoryPath, filePath),  ///
        targetFilePath = combinePaths(targetDirectoryPath, filePath),  ///
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

  let babel;

  try {
    const babelCorePath = path.resolve(BABEL_CORE_PATH);

    babel = require(babelCorePath);
  } catch (error) {
    const success = false;

    console.log(BABEL_NOT_INSTALLED_MESSAGE);

    callback(success);

    return;
  }

  babel.transformFile(sourceFilePath, options, (error, result) => {
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

    const { quietly } = context;

    if (!quietly) {
      console.log(`Transpiled '${sourceFilePath}'.`);
    }

    callback(success);
  });
}

module.exports = {
  transpileFile
};
