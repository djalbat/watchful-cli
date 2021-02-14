"use strict";

const Task = require("../task"),
      pathUtilities = require("../utilities/path"),
      transpileUtilities = require("../utilities/transpile");

const { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

const { transpileFile } = transpileUtilities;

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
