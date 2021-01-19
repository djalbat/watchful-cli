"use strict";

const messages = require("../messages"),
      bundleUtilities = require("../utilities/bundle"),
      metricsUtilities = require("../utilities/metrics");

const { bundleFiles } = bundleUtilities,
      { BUNDLED_METRIC_MESSAGE } = messages,
      { startMetric, endMetric } = metricsUtilities;

function bundleFilesCallback(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  startMetric(context);

  bundleFiles(entryFilePath, context, () => {
    const message = BUNDLED_METRIC_MESSAGE;

    endMetric(context, message);

    proceed();
  });
}

module.exports = bundleFilesCallback;
