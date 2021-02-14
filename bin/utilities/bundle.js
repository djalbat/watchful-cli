"use strict";

const messages = require("../messages"),
      constants = require("../constants"),
      pathUtilities = require("../utilities/path"),
      metricsUtilities = require("../utilities/metrics"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { combinePaths } = pathUtilities,
      { writeFileEx, createParentDirectory } = fileSystemUtilities,
      { startSecondsMetric, endSecondsMetric } = metricsUtilities,
      { BROWSERIFY, ESBUILD_PATH, BROWSERIFY_PATH } = constants,
      { ESBUILD_FAILED_MESSAGE, ESBUILD_NOT_INSTALLED, BROWSERIFY_NOT_INSTALLED, BROWSERIFY_FAILED_MESSAGE } = messages;

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
  let bundler;

  const { bundleFilePath } = context;

  try {
    const esbuildPath = path.resolve(ESBUILD_PATH),
          esbuild = require(esbuildPath);

    bundler = esbuild;  ///
  } catch (error) {
    console.log(ESBUILD_NOT_INSTALLED);

    callback();

    return;
  }

  const entryPoint = targetEntryFilePath, ///
        entryPoints = [
          entryPoint
        ],
        sourcemap = true,
        outfile = bundleFilePath,
        bundle = true,
        options = {
          entryPoints,
          sourcemap,
          outfile,
          bundle
        };

  bundler.build(options)
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
  let bundler;

  const { debug } = context,
        options = {
          debug
        };

  try {
    const browserifyPath = path.resolve(BROWSERIFY_PATH),
          browserify = require(browserifyPath);

    bundler = browserify(options); ///
  } catch (error) {
    console.log(BROWSERIFY_NOT_INSTALLED);

    callback();

    return;
  }

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

