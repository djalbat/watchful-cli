'use strict';

const messages = require('../messages'),
      pathUtilities = require('../utilities/path'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { TRANSFORM_FAILED_MESSAGE } = messages,
      { combinePaths, fileNameFromFilePath } = pathUtilities,
      { readFile, writeFile, createParentDirectory } = fileSystemUtilities;

function transformFile(filePath, context, done) {
  const { babel, babelOptions, sourceDirectoryPath, targetDirectoryPath } = context,
        { transform } = babel,
        sourceFilePath = combinePaths(sourceDirectoryPath, filePath);  ///

  console.log(sourceDirectoryPath)
  console.log(filePath)
  console.log(sourceFilePath)


  const sourceFileContent = readFile(sourceFilePath),
        fileName = fileNameFromFilePath(filePath),
        sourceFileName = fileName,  ///
        source = sourceFileContent,  ///
        options = Object.assign(babelOptions, {
          sourceFileName
        });

  transform(source, options, (error, result) => {
    if (error) {
      const { message } = error;

      error = message;  ///

      console.log(TRANSFORM_FAILED_MESSAGE);

      console.log(error);

      done();

      return;
    }

    const { code } = result,
          targetFilPath = combinePaths(targetDirectoryPath, filePath), ///
          targetFileContent = code; ///

    createParentDirectory(targetFilPath);

    writeFile(targetFilPath, targetFileContent);

    const { quietly } = context;

    if (!quietly) {
      console.log(`Transformed '${sourceFilePath}'.`);
    }

    done();
  });
}

module.exports = {
  transformFile
};
