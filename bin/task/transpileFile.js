"use strict";

const Task = require("../task"),
      pathUtilities = require("../utilities/path");

const { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

class TranspileFileTask extends Task {
  static fromPathAndMethod(path, method, context) {
    let transpileFileTask;

    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    transpileFileTask = new TranspileFileTask(method, filePath, context, () => {
      ///
    });

    return transpileFileTask;
  }
}

module.exports = TranspileFileTask;
