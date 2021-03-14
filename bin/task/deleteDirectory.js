"use strict";

const Task = require("../task");

const { deleteDirectory, checkDirectoryExists } = require("../utilities/fileSystem"),
      { combinePaths, pathWithoutDirectoryPathFromPathAndDirectoryPath } = require("../utilities/path");

class DeleteDirectoryTask extends Task {
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

module.exports = DeleteDirectoryTask;
