"use strict";

const metricsUtilities = require("./utilities/metrics");

const { startSecondsMetric, endSecondsMetric } = metricsUtilities;

function bundleFiles(context, done) {
  const { metrics, entryFilePath, bundleFilePath, targetDirectoryPath, bundleFilesFunction } = context;

  if (metrics) {
    startSecondsMetric(context);
  }

  bundleFilesFunction(entryFilePath, bundleFilePath, targetDirectoryPath, (success) => {
    const { metrics, quietly, bundleFilePath } = context;

    if (metrics) {
      const seconds = endSecondsMetric(context);

      if (success) {
        console.log(`Bundled all files in ${seconds} seconds.`);
      }
    }

    if (success) {
      if (!quietly) {
        if (bundleFilePath) {
          console.log(`Written bundle to '${bundleFilePath}'.`);
        }
      }
    }

    done();
  });
}

module.exports = bundleFiles;
