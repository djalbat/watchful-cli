"use strict";

const pathUtilities = require("./utilities/path");

const { combinePaths } = pathUtilities;

function transpileFile(filePath, context, callback) {
  const { transpileFileFunction, sourceDirectoryPath, targetDirectoryPath } = context,
        sourceFilePath = combinePaths(sourceDirectoryPath, filePath),  ///
        targetFilePath = combinePaths(targetDirectoryPath, filePath);  ///

  transpileFileFunction(sourceFilePath, targetFilePath, (success) => {
    const { quietly } = context;

    if (!quietly) {
      console.log(`Transpiled '${sourceFilePath}'.`);
    }

    callback(success);
  });
}

module.exports = transpileFile;
