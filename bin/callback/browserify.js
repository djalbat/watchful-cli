'use strict';

const path = require('path');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { createWriteStream, createParentDirectory } = fileSystemUtilities,
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

    createParentDirectory(absoluteBundleFilePath);

    const bundleWriteStream = createWriteStream(absoluteBundleFilePath);

    bundler.bundle().pipe(bundleWriteStream);

    proceed();
  } catch (error) {
    console.log(BROWSERIFY_FAILED_MESSAGE);

    console.log(error);

    abort();
  }
}

module.exports = browserifyCallback;
