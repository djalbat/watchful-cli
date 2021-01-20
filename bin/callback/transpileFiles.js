"use strict";

const necessary = require("necessary");

const metricsUtilities = require("../utilities/metrics"),
      transpileUtilities = require("../utilities/transpile");

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { transpileFile } = transpileUtilities,
      { startSecondsMetric, endSecondsMetric } = metricsUtilities;

function transpileFilesCallback(proceed, abort, context) {
  const { metrics, filePaths } = context;

  if (metrics) {
    startSecondsMetric(context);
  }

  forEach(filePaths, transpileFileCallback, done, context);

  function done() {
    if (metrics) {
      const seconds = endSecondsMetric(context);

      console.log(`Transpiled files in ${seconds} seconds.`);
    }

    proceed();
  }
}

module.exports = transpileFilesCallback;

function transpileFileCallback(filePath, next, done, context) {
  transpileFile(filePath, context, next);
}
