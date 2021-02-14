"use strict";

const Task = require("../task"),
      pathUtilities = require("../utilities/path"),
      metricsUtilities = require("../utilities/metrics"),
      transpileUtilities = require("../utilities/transpile");

const { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

const { transpileFile } = transpileUtilities,
      { updateCountMetric } = metricsUtilities;

class TranspileFileTask extends Task {
  static fromPath(path, context) {
    let transpileFileTask = null;

    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    transpileFileTask = new TranspileFileTask(transpileFile, filePath, context, (success) => {
      if (success) {
        updateCountMetric(context);
      }
    });

    return transpileFileTask;
  }
}

module.exports = TranspileFileTask;
