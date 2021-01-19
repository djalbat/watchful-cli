"use strict";

const bundleUtilities = require("../utilities/bundle"),
      metricsUtilities = require("../utilities/metrics");

const { bundleFiles } = bundleUtilities,
      { startMetric, endMetric } = metricsUtilities;

function bundleFilesCallback(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  startMetric(context);

  bundleFiles(entryFilePath, context, () => {
    const seconds = endMetric(context);

    console.log(`Bundled files in ${seconds} seconds.`);

    proceed();
  });
}

module.exports = bundleFilesCallback;
