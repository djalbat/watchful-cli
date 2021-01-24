"use strict";

const path = require("path");

const messages = require("../messages"),
      pathUtilities = require("../utilities/path"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { TRANSFORM_FAILED_MESSAGE } = messages,
      { writeFile, createParentDirectory } = fileSystemUtilities,
      { combinePaths, pathWithoutBottommostNameFromPath } = pathUtilities;

function transpileFile(filePath, context, done) {
  const { babelCorePath, babelOptions, sourceDirectoryPath, targetDirectoryPath } = context,
        sourceFilePath = combinePaths(sourceDirectoryPath, filePath),  ///
        targetFilePath = combinePaths(targetDirectoryPath, filePath),  ///
        targetFilePathWithoutBottommostName = pathWithoutBottommostNameFromPath(targetFilePath),
        relativeSourceFilePath = path.relative(targetFilePathWithoutBottommostName, sourceFilePath),
        sourceFileName = relativeSourceFilePath,  ///
        options = Object.assign(babelOptions, {
          sourceFileName
        }),
        babel = require(babelCorePath);

  babel.transformFile(sourceFilePath, options, (error, result) => {
    if (error) {
      const { message } = error;

      error = message;  ///

      console.log(TRANSFORM_FAILED_MESSAGE);

      console.log(error);

      done();

      return;
    }

    const { code } = result,
          targetFileContent = code; ///

    createParentDirectory(targetFilePath);

    writeFile(targetFilePath, targetFileContent);

    const { quietly } = context;

    if (!quietly) {
      console.log(`Transpiled '${sourceFilePath}'.`);
    }

    done();
  });
}

module.exports = {
  transpileFile
};
