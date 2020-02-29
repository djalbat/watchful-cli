'use strict';

const necessary = require('necessary');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { pathUtilities, asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { BABEL_FAILED_MESSAGE } = messages,
      { readFile, writeFile, createParentDirectory } = fileSystemUtilities,
      { isPathName, combinePaths, bottommostNameFromPath } = pathUtilities;

function transformFilesCallback(proceed, abort, context) {
  const { filePaths } = context,
        filePathsLength = filePaths.length,
        length = filePathsLength, ///
        count = 0;

  Object.assign(context, {
    count
  });

  forEach(filePaths, transformFileCallback, () => {
    const { count } = context,
          success = (count === length);

    delete context.count;

    success ?
      proceed() :
        abort();
  }, context);

  function transformFileCallback(filePath, next, done, context) {
    try {
      const { transform, babelOptions, sourceDirectoryPath, targetDirectoryPath } = context,
            sourceFilePath = combinePaths(sourceDirectoryPath, filePath),  ///
            sourceFileContent = readFile(sourceFilePath),
            fileName = fileNameFromFilePath(filePath),
            sourceFileName = fileName,  ///
            source = sourceFileContent,  ///
            options = Object.assign(babelOptions, {
              sourceFileName
            });

      transform(source, options, (error, result) => {
        if (error) {
          throw(error);
        }

        const { code } = result,
              targetFilPath = combinePaths(targetDirectoryPath, filePath), ///
              targetFileContent = code; ///

        createParentDirectory(targetFilPath);

        writeFile(targetFilPath, targetFileContent);

        let { count } = context;

        count++;

        Object.assign(context, {
          count
        });

        next();
      });
    } catch (error) {
      console.log(BABEL_FAILED_MESSAGE);

      console.log(error);

      done();
    }
  }
}

module.exports = transformFilesCallback;

function fileNameFromFilePath(filePath) {
  let fileName;

  const filePathFileName = isPathName(filePath);

  if (filePathFileName) {
    fileName = filePath;  ///
  } else {
    const bottommostFileName = bottommostNameFromPath(filePath);

    fileName = bottommostFileName;  ///
  }

  return fileName;
}
