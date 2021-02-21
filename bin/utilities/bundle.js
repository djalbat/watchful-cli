"use strict";

const path = require("path");

const paths = require("../paths"),
      messages = require("../messages"),
      constants = require("../constants"),
      pathUtilities = require("../utilities/path"),
      fileSystemUtilities = require("../utilities/fileSystem");

const { combinePaths } = pathUtilities,
      { BROWSERIFY } = constants,
      { ESBUILD_PATH, BROWSERIFY_PATH } = paths,
      { writeFileEx, createParentDirectory } = fileSystemUtilities,
      { ESBUILD_FAILED_MESSAGE,
        BROWSERIFY_FAILED_MESSAGE,
        ESBUILD_NOT_INSTALLED_MESSAGE,
        BROWSERIFY_NOT_INSTALLED_MESSAGE } = messages;

function createBundleFilesFunction(context) {
  const { debug, bundler, bundleFilePath, entryFilePath, targetDirectoryPath } = context,
        targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath),
        bundleFilesFunction = (bundler === BROWSERIFY) ?
                                createBrowserifyBundleFilesFunction(targetEntryFilePath, bundleFilePath, debug) :
                                  createEsbuildBundleFilesFunction(targetEntryFilePath, bundleFilePath, debug);

  return bundleFilesFunction;
}

module.exports = {
  createBundleFilesFunction
};

function createEsbuildBundleFilesFunction(targetEntryFilePath, bundleFilePath, debug) {
  let esBuildBundleFilesFunction = null;

  try {
    const esbuildPath = path.resolve(ESBUILD_PATH),
          esbuild = require(esbuildPath),
          bundler = esbuild,  ///
          entryPoint = targetEntryFilePath, ///
          entryPoints = [
            entryPoint
          ],
          sourcemap = debug,
          outfile = bundleFilePath,
          bundle = true,
          options = {
            entryPoints,
            sourcemap,
            outfile,
            bundle
          };

    esBuildBundleFilesFunction = (callback) => {
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
    };
  } catch (error) {
    console.log(ESBUILD_NOT_INSTALLED_MESSAGE);
  }

  return esBuildBundleFilesFunction;
}

function createBrowserifyBundleFilesFunction(targetEntryFilePath, bundleFilePath, debug) {
  let browserifyBundleFilesFunction = null;

  const options = {
          debug
        };

  try {
    const browserifyPath = path.resolve(BROWSERIFY_PATH),
          browserify = require(browserifyPath),
          bundler = browserify(options); ///

    bundler.add(targetEntryFilePath);

    browserifyBundleFilesFunction = (callback) => {
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
