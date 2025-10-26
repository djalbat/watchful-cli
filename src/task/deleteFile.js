"use strict";

import Task from "../task";

import { deleteFile, checkFileExists } from "../utilities/fileSystem";
import { combinePaths, pathWithoutDirectoryPathFromPathAndDirectoryPath } from "../utilities/path";

export default class DeleteFileTask extends Task {
  static fromPath(path, context) {
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
