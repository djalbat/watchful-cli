'use strict';

const fs = require('fs'),
      path = require('path');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { openSync, writeSync } = fs,
      { createParentDirectory } = fileSystemUtilities,
      { BROWSERIFY_NOT_INSTALLED, BROWSERIFY_FAILED_MESSAGE } = messages;

function browserifyCallback(proceed, abort, context) {
  let bundler;

  try {
    const browserify = require(path.resolve('./node_modules/browserify'));

    bundler = browserify(); ///
  } catch (error) {
    console.log(BROWSERIFY_NOT_INSTALLED);

    abort();
  }

  try {
    const { entryFileName, bundleFilePath, targetDirectoryPath } = context,
          outputFileName = entryFileName, ///
          absoluteOutputFilePath = path.resolve(targetDirectoryPath, outputFileName),
          absoluteBundleFilePath = path.resolve(bundleFilePath);

    bundler.add(absoluteOutputFilePath);

    bundler.bundle((error, buffer) => {
      if (error) {
        throw(error);
      }

      createParentDirectory(absoluteBundleFilePath);

      const bundleFile = openSync(absoluteBundleFilePath, 'w+');

      writeSync(bundleFile, buffer);

      proceed();
    });
  } catch (error) {
    console.log(BROWSERIFY_FAILED_MESSAGE);

    console.log(error);

    abort();
  }
}

module.exports = browserifyCallback;
