"use strict";

const Task = require("../../task"),
      pathUtilities = require("../../utilities/path"),
      metricsUtilities = require("../../utilities/metrics"),
      transpileUtilities = require("../../utilities/transpile");

const { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

const { transpileFile } = transpileUtilities,
      { updateCountMetric } = metricsUtilities;

class SingleProcessTranspileFileTask extends Task {
  static fromPath(path, context) {
    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          method = transpileFileMethod, ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath), ///
          singleProcessTranspileFileTask = new SingleProcessTranspileFileTask(method, filePath, context, () => {
            debugger
          });

    return singleProcessTranspileFileTask;
  }
}

module.exports = SingleProcessTranspileFileTask;

function transpileFileMethod(filePath, context, callback) {
  transpileFile(filePath, context, () => {
    updateCountMetric(context);

    callback();
  });
}
