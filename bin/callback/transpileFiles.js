"use strict";

const metricsUtilities = require("../utilities/metrics"),
      singleProcessTranspileFilesCallback = require("../callback/transpileFiles/singleProcess"),
      multipleProcessesTranspileFilesCallback = require("../callback/transpileFiles/mutilpleProcesses");

const { startCountMetric, endCountMetric, startSecondsMetric, endSecondsMetric } = metricsUtilities;

function transpileFilesCallback(proceed, abort, context) {
  const { metrics, processesLength } = context;

  if (metrics) {
    startCountMetric(context);
    startSecondsMetric(context);
  }

  (processesLength < 2) ?
    singleProcessTranspileFilesCallback(done, context) :
      multipleProcessesTranspileFilesCallback(done, context);

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
