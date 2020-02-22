'use strict';

const path = require('path'),
      necessary = require('necessary');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { asynchronousUtilities } = necessary,
      { ENTRY_FILE_NOT_INCLUDED, BABEL_FAILED_MESSAGE } = messages,
      { repeatedly } = asynchronousUtilities,
      { readFile, writeFile, createParentDirectory } = fileSystemUtilities;

function transformCallback(proceed, abort, context) {
  const { entryFilePath } = context,
        filePaths = [
          'file1.js',
          'file2.js',
          'file3.js',
        ],
        filePathsIncludesEntryFilePath = filePaths.includes(entryFilePath);

  if (!filePathsIncludesEntryFilePath) {
    console.log(ENTRY_FILE_NOT_INCLUDED);

    abort();

    return;
  }

  transformFiles(filePaths, proceed, abort, context);
}

module.exports = transformCallback;

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
            sourceFilePath = filePath,  ///
            absoluteSourceFilePath = path.resolve(sourceDirectoryPath, sourceFilePath),
            sourceFileContent = readFile(absoluteSourceFilePath),
            source = sourceFileContent;  ///

      transform(source, options, (error, result) => {
        const { code } = result,
              targetFilPath = filePath, ///
              absoluteTargetFilePath = path.resolve(targetDirectoryPath, targetFilPath),
              targetFileContent = code; ///

        createParentDirectory(absoluteTargetFilePath);

        writeFile(absoluteTargetFilePath, targetFileContent);

        count++;

        console.log(count);

        next();
      });
    } catch (error) {
      console.log(BABEL_FAILED_MESSAGE);

      console.log(error);

      next();
    }
  }
}
