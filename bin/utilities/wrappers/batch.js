"use strict";

const metricsUtilities = require("../../utilities/metrics"),
      wrappersUtilities = require("../../utilities/wrappers");

const { updateCountMetric } = metricsUtilities,
      { createTranspileFileWrappers } = wrappersUtilities;

function createBatchTranspileFileWrappers(done, context) {
  const { filePaths, processesLength } = context,
        filePathsLength = filePaths.length,
        transpileFileWrappers = createTranspileFileWrappers(callback, context),
        transpileFileWrappersLength = transpileFileWrappers.length;

  let index = 0;

  function run() {
    if (index === filePathsLength) {
      if (transpileFileWrappersLength === processesLength) {
        done();
      }
    } else {
      const filePath = filePaths[index++],
            transpileFileWrapper = transpileFileWrappers.pop();

      transpileFileWrapper.send(filePath);
    }
  }

  function callback(transpileFileWrapper) {
    transpileFileWrappers.push(transpileFileWrapper);

    updateCountMetric(context);

    run();
  }

  return run;
}

module.exports = {
  createBatchTranspileFileWrappers
};
