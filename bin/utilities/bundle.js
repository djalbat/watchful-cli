"use strict";

const path = require("path");

const paths = require("../paths"),
      messages = require("../messages"),
      constants = require("../constants"),
      pathUtilities = require("../utilities/path"),
      metricsUtilities = require("../utilities/metrics"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { combinePaths } = pathUtilities,
      { BROWSERIFY } = constants,
      { ESBUILD_PATH, BROWSERIFY_PATH } = paths,
      { writeFileEx, createParentDirectory } = fileSystemUtilities,
      { startSecondsMetric, endSecondsMetric } = metricsUtilities,
      { ESBUILD_FAILED_MESSAGE,
        BROWSERIFY_FAILED_MESSAGE,
        ESBUILD_NOT_INSTALLED_MESSAGE,
        BROWSERIFY_NOT_INSTALLED_MESSAGE } = messages;

function bundleFiles(entryFilePath, context, done) {
  const { metrics, bundler, targetDirectoryPath } = context,
        targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath);

  if (metrics) {
    startSecondsMetric(context);
  }

  (bundler === BROWSERIFY) ?
    browserifyFiles(targetEntryFilePath, context, callback) :
      esbuildFiles(targetEntryFilePath, context, callback);

  function callback(success) {
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
    const success = false;

    console.log(ESBUILD_NOT_INSTALLED_MESSAGE);

    callback(success);

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
    const success = true;

    callback(success);
  })
  .catch((error) => {
    const success = false;

    console.log(ESBUILD_FAILED_MESSAGE);

    console.log(error);

    callback(success);
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
    const success = false;

    console.log(BROWSERIFY_NOT_INSTALLED_MESSAGE);

    callback(success);

    return;
  }

  bundler.add(targetEntryFilePath);

  bundler.bundle((error, buffer) => {
    if (error) {
      const success = false,
            { message } = error;

      error = message;  ///

      console.log(BROWSERIFY_FAILED_MESSAGE);

      console.log(error);

      callback(success);

      return;
    }

    const success = false,
          { bundleFilePath } = context;

    if (bundleFilePath) {
      createParentDirectory(bundleFilePath);

      writeFileEx(bundleFilePath, buffer);
    } else {
      process.stdout.write(buffer);
    }

    callback(success);
  });
}
