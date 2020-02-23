'use strict';

const fs = require('fs'),
      path = require('path');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { resolve } = path,
      { openSync, writeSync } = fs,
      { createParentDirectory } = fileSystemUtilities,
      { BROWSERIFY_FAILED_MESSAGE } = messages;

function bundleCallback(proceed, abort, context) {
  try {
    const { bundler, entryFilePath, bundleFilePath, targetDirectoryPath } = context,
          absoluteEntryFilePath = resolve(targetDirectoryPath, entryFilePath),
          absoluteBundleFilePath = resolve(bundleFilePath);

    bundler.add(absoluteEntryFilePath);

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

module.exports = bundleCallback;
