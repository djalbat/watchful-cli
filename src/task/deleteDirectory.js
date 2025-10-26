"use strict";

import Task from "../task";

import { deleteDirectory, checkDirectoryExists } from "../utilities/fileSystem";
import { combinePaths, pathWithoutDirectoryPathFromPathAndDirectoryPath } from "../utilities/path";

export default class DeleteDirectoryTask extends Task {
  static fromPath(path, context) {
    let deleteDirectoryTask = null;

    const { sourceDirectoryPath, targetDirectoryPath } = context,
          deletedSourceDirectoryPath = path,  ///
          deletedDirectoryPath = pathWithoutDirectoryPathFromPathAndDirectoryPath(deletedSourceDirectoryPath, sourceDirectoryPath),
          deletedTargetDirectoryPath = combinePaths(targetDirectoryPath, deletedDirectoryPath),
          deletedTargetDirectoryExists = checkDirectoryExists(deletedTargetDirectoryPath);

    if (deletedTargetDirectoryExists) {
      deleteDirectoryTask = new DeleteDirectoryTask(deleteDirectory, deletedTargetDirectoryPath, () => {
        const { quietly } = context;

        if (!quietly) {
          console.log(`Deleted '${deletedTargetDirectoryPath}'.`);
        }
      });
    }

    return deleteDirectoryTask;
  }
}
