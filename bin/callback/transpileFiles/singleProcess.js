"use strict";

const { asynchronousUtilities } = require("necessary");

const transpileFile = require("../../transpileFile");

const { updateCountMetric } = require("../../utilities/metrics");

const { forEach } = asynchronousUtilities;

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
