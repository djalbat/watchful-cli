"use strict";

const messages = require("../messages"),
      constants = require("../constants"),
      pathUtilities = require("../utilities/path"),
      metricsUtilities = require("../utilities/metrics"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { BROWSERIFY } = constants,
      { combinePaths } = pathUtilities,
      { writeFileEx, createParentDirectory } = fileSystemUtilities,
      { startSecondsMetric, endSecondsMetric } = metricsUtilities,
      { ESBUILD_FAILED_MESSAGE, BROWSERIFY_FAILED_MESSAGE } = messages;

function bundleFiles(entryFilePath, context, done) {
  const { metrics, bundler, targetDirectoryPath } = context,
        targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath);

  if (metrics) {
    startSecondsMetric(context);
  }

  (bundler === BROWSERIFY) ?
    browserifyFiles(targetEntryFilePath, context, callback) :
      esbuildFiles(targetEntryFilePath, context, callback);

  function callback() {
    const { quietly, bundleFilePath } = context;

    if (!quietly) {
      if (bundleFilePath) {
        console.log(`Written bundle to '${bundleFilePath}'.`);
      }
    }

    if (metrics) {
      const seconds = endSecondsMetric(context);

      console.log(`Bundled all files in ${seconds} seconds.`);
    }

    done();
  }
}

module.exports = {
  bundleFiles
};

function esbuildFiles(targetEntryFilePath, context, callback) {
  const { esbuildPath, bundleFilePath } = context,
        esbuild = require(esbuildPath),
        bundler = esbuild,  ///
        entryPoint = targetEntryFilePath, ///
        entryPoints = [
          entryPoint
        ],
        sourcemap = true,
        outfile = bundleFilePath,
        bundle = true;

  bundler.build({
    entryPoints,
    sourcemap,
    outfile,
    bundle
  })
  .then(() => {
    callback();
  })
  .catch((error) => {
    console.log(ESBUILD_FAILED_MESSAGE);

    console.log(error);

    callback();
  });
}

function browserifyFiles(targetEntryFilePath, context, callback) {
  const { debug, browserifyPath } = context,
        browserify = require(browserifyPath),
        options = {
          debug
        },
        bundler = browserify(options); ///

  bundler.add(targetEntryFilePath);

  bundler.bundle((error, buffer) => {
    if (error) {
      const { message } = error;

      error = message;  ///

      console.log(BROWSERIFY_FAILED_MESSAGE);

      console.log(error);

      callback();

      return;
    }

    const { bundleFilePath } = context;

    if (bundleFilePath) {
      createParentDirectory(bundleFilePath);

      writeFileEx(bundleFilePath, buffer);
    } else {
      process.stdout.write(buffer);
    }

    callback();
  });
}

