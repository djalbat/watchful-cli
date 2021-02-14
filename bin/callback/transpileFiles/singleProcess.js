"use strict";

const necessary = require("necessary");

const metricsUtilities = require("../../utilities/metrics"),
      transpileUtilities = require("../../utilities/transpile");

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { transpileFile } = transpileUtilities,
      { updateCountMetric } = metricsUtilities;

function singleProcessTranspileFilesCallback(done, context) {
  const { filePaths } = context;

  forEach(filePaths, transpileFileCallback, done, context);
}

module.exports = singleProcessTranspileFilesCallback;

function transpileFileCallback(filePath, next, done, context) {
  transpileFile(filePath, context, (success) => {
    if (success) {
      updateCountMetric(context);
    }

    next();
  });
}
