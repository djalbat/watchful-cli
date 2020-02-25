'use strict';

const necessary = require('necessary');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { pathUtilities, asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { BABEL_FAILED_MESSAGE } = messages,
      { combinePaths, bottommostNameFromPath } = pathUtilities,
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

  forEach(filePaths, transformFileCallback, () => {
    const success = (count === length);

    success ?
      proceed() :
        abort();
  }, context);

  function transformFileCallback(filePath, next, done, context) {
    try {
      const { transform, babelOptions, inputDirectoryPath, targetDirectoryPath } = context,
            inputFilePath = combinePaths(inputDirectoryPath, filePath),  ///
            inputFileContent = readFile(inputFilePath),
            fileName = fileNameFromFilePath(filePath),
            sourceFileName = fileName,  ///
            source = inputFileContent,  ///
            options = Object.assign( babelOptions, {
              sourceFileName
            });

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

      done();
    }
  }
}

function fileNameFromFilePath(filePath) {
  const bottommostFileName = bottommostNameFromPath(filePath),
        fileName = bottommostFileName;  ///

  return fileName;
}
