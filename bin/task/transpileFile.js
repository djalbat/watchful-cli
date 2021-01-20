"use strict";

const Task = require("../task"),
      pathUtilities = require("../utilities/path"),
      transpileUtilities = require("../utilities/transpile");

const { transpileFile } = transpileUtilities,
      { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

class TranspileFileTask extends Task {
  static fromPathAndContext(path, context) {
    let transpileFileTask = null;

    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    transpileFileTask = new TranspileFileTask(transpileFile, filePath, context, () => {

    });

    return transpileFileTask;
  }
}

module.exports = TranspileFileTask;
