"use strict";

const path = require("path");

const messages = require("../messages"),
      constants = require("../constants"),
      pathUtilities = require("../utilities/path"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { INLINE, BABEL_CORE_PATH } = constants,
      { writeFile, createParentDirectory } = fileSystemUtilities,
      { BABEL_FAILED_MESSAGE, BABEL_NOT_INSTALLED } = messages,
      { combinePaths, pathWithoutBottommostNameFromPath } = pathUtilities;

function transpileFile(filePath, context, done) {
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
    console.log(BABEL_NOT_INSTALLED);

    done();

    return;
  }

  babel.transformFile(sourceFilePath, options, (error, result) => {
    if (error) {
      const { message } = error;

      error = message;  ///

      console.log(BABEL_FAILED_MESSAGE);

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
