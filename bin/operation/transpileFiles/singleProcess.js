"use strict";

const { asynchronousUtilities } = require("necessary");

const transpileFile = require("../../transpileFile");

const { updateCountMetric } = require("../../utilities/metrics");

const { forEach } = asynchronousUtilities;

function singleProcessTranspileFilesOperation(done, context) {
  const { filePaths } = context;

  forEach(filePaths, transpileFileOperation, done, context);
}

module.exports = singleProcessTranspileFilesOperation;

function transpileFileOperation(filePath, next, done, context) {
  transpileFile(filePath, context, (success) => {
    if (success) {
      updateCountMetric(context);
    }

    next();
  });
}
