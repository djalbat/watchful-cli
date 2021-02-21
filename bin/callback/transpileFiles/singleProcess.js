"use strict";

const necessary = require("necessary");

const transpileFile = require("../../transpileFile"),
      metricsUtilities = require("../../utilities/metrics");

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
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
