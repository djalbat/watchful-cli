"use strict";

const Task = require("../task"),
      transpileFile = require('../transpileFile'),
      pathUtilities = require("../utilities/path"),
      metricsUtilities = require("../utilities/metrics");

const { updateCountMetric } = metricsUtilities,
      { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

class TranspileFileTask extends Task {
  static fromPath(path, context) {
    let transpileFileTask = null;

    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    transpileFileTask = new TranspileFileTask(transpileFile, filePath, context, (success) => {
      if (success) {
        const { metrics } = context;

        if (metrics) {
          updateCountMetric(context);
        }
      }
    });

    return transpileFileTask;
  }
}

module.exports = TranspileFileTask;
