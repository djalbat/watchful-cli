"use strict";

const messages = require("../messages"),
      pathUtilities = require("../utilities/path"),
      metricsUtilities = require("../utilities/metrics"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { combinePaths } = pathUtilities,
      { BUNDLE_FAILED_MESSAGE } = messages,
      { startMetric, endMetric } = metricsUtilities,
      { writeFileEx, createParentDirectory } = fileSystemUtilities;

function bundleFiles(entryFilePath, context, done) {
  const { browserify, browserifyOptions, targetDirectoryPath } = context,
        targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath),
        options = browserifyOptions,  ///
        bundler = browserify(options); ///

  startMetric(context);

  bundler.add(targetEntryFilePath);

  bundler.bundle((error, buffer) => {
    if (error) {
      const { message } = error;

      error = message;  ///

      console.log(BUNDLE_FAILED_MESSAGE);

      console.log(error);

      done();

      return;
    }

    const { bundleFilePath } = context;

    if (!bundleFilePath) {
      process.stdout.write(buffer);
    } else {
      createParentDirectory(bundleFilePath);

      writeFileEx(bundleFilePath, buffer);

      const { metrics, quietly } = context;

      if (!quietly) {
        console.log(`Written bundle to '${bundleFilePath}'.`);
      }

      if (metrics) {
        const seconds = endMetric(context);

        console.log(`Bundled all files in ${seconds} seconds.`);
      }
    }

    done();
  });
}

module.exports = {
  bundleFiles
};
