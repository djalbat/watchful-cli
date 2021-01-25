"use strict";

const metricsUtilities = require("../utilities/metrics"),
      singleProcessTranspileFilesCallback = require("../callback/transpileFiles/singleProcess"),
      childProcessesTranspileFilesCallback = require("../callback/transpileFiles/childProcesses");

const { startCountMetric, endCountMetric, startSecondsMetric, endSecondsMetric } = metricsUtilities;

function transpileFilesCallback(proceed, abort, context) {
  const { metrics, childProcessesLength } = context;

  if (metrics) {
    startCountMetric(context);
    startSecondsMetric(context);
  }

  (childProcessesLength === 0) ?
    singleProcessTranspileFilesCallback(done, context) :
      childProcessesTranspileFilesCallback(done, context);

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
