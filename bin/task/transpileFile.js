"use strict";

const Task = require("../task"),
      pathUtilities = require("../utilities/path"),
      metricsUtilities = require("../utilities/metrics"),
      transpileUtilities = require("../utilities/transpile");

const { transpileFile } = transpileUtilities,
      { updateCountMetric } = metricsUtilities,
      { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

class TranspileFileTask extends Task {
  static fromPathAndContext(path, context) {
    let transpileFileTask = null;

    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    transpileFileTask = new TranspileFileTask(transpileFileMethod, filePath, context, () => {
      updateCountMetric(context);
    });

    return transpileFileTask;
  }
}

module.exports = TranspileFileTask;

function transpileFileMethod(filePath, context, next) {
  transpileFile(filePath, context, () => {
    updateCountMetric(context);

    next();
  });
}
