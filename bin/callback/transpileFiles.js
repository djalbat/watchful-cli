"use strict";

const necessary = require("necessary");

const metricsUtilities = require("../utilities/metrics"),
      transpileUtilities = require("../utilities/transpile");

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { transpileFile } = transpileUtilities,
      { startCountMetric, endCountMetric, updateCountMetric, startSecondsMetric, endSecondsMetric } = metricsUtilities;

function transpileFilesCallback(proceed, abort, context) {
  const { metrics, filePaths } = context;

  if (metrics) {
    startCountMetric(context);
    startSecondsMetric(context);
  }

  forEach(filePaths, transpileFileCallback, done, context);

  function done() {
    if (metrics) {
      const count = endCountMetric(context),
            seconds = endSecondsMetric(context);

      console.log(`Transpiled ${count} files in ${seconds} seconds.`);
    }

    proceed();
  }
}

module.exports = transpileFilesCallback;

function transpileFileCallback(filePath, next, done, context) {
  transpileFile(filePath, context, () => {
    updateCountMetric(context);

    next();
  });
}
