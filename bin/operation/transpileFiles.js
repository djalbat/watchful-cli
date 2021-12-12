"use strict";

const singleProcessTranspileFilesCallback = require(".//transpileFiles/singleProcess"),
      multipleProcessesTranspileFilesCallback = require(".//transpileFiles/mutilpleProcesses");

const { S, EMPTY_STRING } = require("../constants"),
      { startCountMetric, endCountMetric, startSecondsMetric, endSecondsMetric } = require("../utilities/metrics");

function transpileFilesOperation(proceed, abort, context) {
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
            seconds = endSecondsMetric(context),
            sOrEmpty = (count === 1) ?
                         EMPTY_STRING :
                           S;

      console.log(`Transpiled ${count} file${sOrEmpty} in ${seconds} seconds.`);
    }

    proceed();
  }
}

module.exports = transpileFilesOperation;
