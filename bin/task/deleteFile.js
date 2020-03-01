'use strict';

const Task = require('../task'),
      pathUtilities = require('../utilities/path'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { deleteFile, checkFileExists } = fileSystemUtilities,
      { combinePaths, pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

class DeleteFileTask extends Task {
  static fromPathAndContext(path, context) {
    let deleteFileTask = null;

    const { sourceDirectoryPath, targetDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath),  ///
          deletedTargetFilePath = combinePaths(targetDirectoryPath, filePath),
          deletedTargetFileExists = checkFileExists(deletedTargetFilePath);

    if (deletedTargetFileExists) {
      deleteFileTask = new DeleteFileTask(deleteFile, deletedTargetFilePath, () => {
        const { quietly } = context;

        if (!quietly) {
          console.log(`Deleted '${deletedTargetFilePath}'.`);
        }
      });
    }

    return deleteFileTask;
  }
}

module.exports = DeleteFileTask;
