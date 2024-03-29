"use strict";

const path = require("path");

const { combinePaths } = require("../utilities/path"),
      { NODE, INLINE, BROWSERIFY } = require("../constants"),
      { ESBUILD_PATH, BROWSERIFY_PATH } = require("../paths"),
      { writeFileEx, createParentDirectory } = require("../utilities/fileSystem"),
      { ESBUILD_FAILED_MESSAGE,
        BROWSERIFY_FAILED_MESSAGE,
        ESBUILD_NOT_INSTALLED_MESSAGE,
        BROWSERIFY_NOT_INSTALLED_MESSAGE } = require("../messages");

function createBundleFilesFunction(context) {
  const { bundler } = context,
        bundleFilesFunction = (bundler === BROWSERIFY) ?
                                createBrowserifyBundleFilesFunction(context) :
                                  createEsbuildBundleFilesFunction(context);

  return bundleFilesFunction;
}

module.exports = {
  createBundleFilesFunction
};

function createEsbuildBundleFilesFunction(context) {
  let esBuildBundleFilesFunction = null;

  try {
    const esbuildPath = path.resolve(ESBUILD_PATH),
          esbuild = require(esbuildPath);

    esBuildBundleFilesFunction = (entryFilePath, bundleFilePath, targetDirectoryPath, callback) => {
      const { node, debug, release } = context,
            bundler = esbuild,  ///
            targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath),
            entryPoint = targetEntryFilePath, ///
            entryPoints = [
              entryPoint
            ],
            outfile = bundleFilePath, ///
            bundle = true,
            minify = release,
            options = {
              entryPoints,
              outfile,
              bundle,
              minify
            };

      if (debug) {
        const sourcemap = INLINE;  ///

        Object.assign(options, {
          sourcemap
        });
      }

      if (node) {
        const platform = NODE;

        Object.assign(options, {
          platform
        });
      }

      bundler.build(options)
        .then(() => {
          const success = true;

          callback(success);
        })
        .catch((error) => {
          const success = false;

          console.log(`${ESBUILD_FAILED_MESSAGE}
${error}`);

          callback(success);
        });
    };
  } catch (error) {
    console.log(ESBUILD_NOT_INSTALLED_MESSAGE);
  }

  return esBuildBundleFilesFunction;
}

function createBrowserifyBundleFilesFunction(context) {
  let browserifyBundleFilesFunction = null;

  try {
    const browserifyPath = path.resolve(BROWSERIFY_PATH),
          browserify = require(browserifyPath);

    browserifyBundleFilesFunction = (entryFilePath, bundleFilePath, targetDirectoryPath, callback) => {
      const { node, debug } = context,
            options = {
              debug
            };

      if (node) {
        const bare = true,
              browserField = false;

        Object.assign(options, {
          bare,
          browserField
        });
      }

      const bundler = browserify(options),
            targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath);

      bundler.add(targetEntryFilePath);

      bundler.bundle((error, buffer) => {
        if (error) {
          const success = false,
               { message } = error;

          error = message;  ///

          console.log(`${BROWSERIFY_FAILED_MESSAGE}
${error}`);

          callback(success);

          return;
        }

        const success = true;

        if (bundleFilePath) {
          createParentDirectory(bundleFilePath);

          writeFileEx(bundleFilePath, buffer);
        } else {
          process.stdout.write(buffer);
        }

        callback(success);
      });
    };
  } catch (error) {
    console.log(BROWSERIFY_NOT_INSTALLED_MESSAGE);
  }

  return browserifyBundleFilesFunction;
}
