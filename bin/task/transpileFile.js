"use strict";

const Task = require("../task"),
      transpileFile = require('../transpileFile'),
      pathUtilities = require("../utilities/path");

const { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

class TranspileFileTask extends Task {
  static fromPath(path, context) {
    let transpileFileTask = null;

    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    transpileFileTask = new TranspileFileTask(transpileFile, filePath, context, (success) => {
      ///
    });

    return transpileFileTask;
  }
}

module.exports = TranspileFileTask;
