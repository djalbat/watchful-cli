"use strict";

import singleProcessTranspileFilesCallback from ".//transpileFiles/singleProcess";
import multipleProcessesTranspileFilesCallback from ".//transpileFiles/mutilpleProcesses";

import { S, EMPTY_STRING } from "../constants";
import { startCountMetric, endCountMetric, startSecondsMetric, endSecondsMetric } from "../utilities/metrics";

export default function transpileFilesOperation(proceed, abort, context) {
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
