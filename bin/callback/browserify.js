#!/usr/bin/env node

const fs = require('fs'),
      path = require('path');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { createWriteStream } = fs,
      { BROWSERIFY_NOT_INSTALLED } = messages,
      { createParentDirectory } = fileSystemUtilities;

function browserifyCallback(proceed, abort, context) {
  let browserify;

  try {
    browserify = require(path.resolve('./node_modules/browserify'));
  } catch (error) {
    console.log(BROWSERIFY_NOT_INSTALLED);

    abort();
  }

  const bundler = browserify(), ///
        { entryFileName, bundleFilePath, targetDirectoryPath } = context,
        outputFileName = entryFileName, ///
        outputFilePath = path.resolve(targetDirectoryPath, outputFileName);

  bundler.add(outputFilePath);

  createParentDirectory(bundleFilePath);

  const bundleStream = createWriteStream(path.resolve(bundleFilePath));

  bundler.bundle().pipe(bundleStream);

  proceed();
}

module.exports = browserifyCallback;

