'use strict';

const pathUtilities = require('../utilities/path'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { combinePaths, fileNameFromFilePath } = pathUtilities,
      { readFile, writeFile, createParentDirectory } = fileSystemUtilities;

function transformFile(filePath, context, done) {
  const { babel, babelOptions, sourceDirectoryPath, targetDirectoryPath } = context,
        { transform } = babel,
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

    done();
  });
}

module.exports = {
  transformFile
};
