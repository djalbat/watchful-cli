'use strict';

const path = require('path')

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { BABEL_FAILED_MESSAGE } = messages,
      { readFile, writeFile, createParentDirectory } = fileSystemUtilities;

function transformCallback(proceed, abort, context) {
  const { entryFileName } = context,
        fileName = entryFileName; ///

  transformFile(fileName, proceed, abort, context);
}

module.exports = transformCallback;

function transformFile(fileName, proceed, abort, context) {
  try {
    const { sourceDirectoryPath, targetDirectoryPath, transform, options } = context,
          sourceFilePath = fileName,  ///
          absoluteSourceFilePath = path.resolve(sourceDirectoryPath, sourceFilePath),
          sourceFileContent = readFile(absoluteSourceFilePath),
          source = sourceFileContent;  ///

    transform(source, options, (error, result) => {
      const { code } = result,
            targetFilPath = fileName, ///
            absoluteTargetFilePath = path.resolve(targetDirectoryPath, targetFilPath),
            targetFileContent = code; ///

      createParentDirectory(absoluteTargetFilePath);

      writeFile(absoluteTargetFilePath, targetFileContent);

      proceed();
    });
  } catch (error) {
    console.log(BABEL_FAILED_MESSAGE);

    console.log(error);

    abort();
  }
}
