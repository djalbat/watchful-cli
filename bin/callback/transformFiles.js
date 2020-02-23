'use strict';

const necessary = require('necessary');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { pathUtilities, asynchronousUtilities } = necessary,
      { combinePaths } = pathUtilities,
      { repeatedly } = asynchronousUtilities,
      { BABEL_FAILED_MESSAGE } = messages,
      { readFile, writeFile, createParentDirectory } = fileSystemUtilities;

function transformFilesCallback(proceed, abort, context) {
  const { filePaths } = context;

  transformFiles(filePaths, proceed, abort, context);
}

module.exports = transformFilesCallback;

function transformFiles(filePaths, proceed, abort, context) {
  const filePathsLength = filePaths.length,
        length = filePathsLength; ///

  let count = 0;

  repeatedly(transformFileCallback, length, () => {
    const success = (count === length);

    success ?
      proceed() :
        abort();
  }, context);

  function transformFileCallback(next, done, context, index) {
    try {
      const { sourceDirectoryPath, targetDirectoryPath, transform, options } = context,
            filePath = filePaths[index],
            sourceFilePath = combinePaths(sourceDirectoryPath, filePath),  ///
            sourceFileContent = readFile(sourceFilePath),
            source = sourceFileContent;  ///

      transform(source, options, (error, result) => {
        const { code } = result,
              targetFilPath = combinePaths(targetDirectoryPath, filePath), ///
              targetFileContent = code; ///

        createParentDirectory(targetFilPath);

        writeFile(targetFilPath, targetFileContent);

        count++;

        next();
      });
    } catch (error) {
      console.log(BABEL_FAILED_MESSAGE);

      console.log(error);

      next();
    }
  }
}

