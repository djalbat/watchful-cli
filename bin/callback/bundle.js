'use strict';

const fs = require('fs'),
      necessary = require('necessary');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { pathUtilities } = necessary,
      { combinePaths } = pathUtilities,
      { openSync, writeSync } = fs,
      { createParentDirectory } = fileSystemUtilities,
      { BROWSERIFY_FAILED_MESSAGE } = messages;

function bundleCallback(proceed, abort, context) {
  try {
    const { bundler, entryFilePath, bundleFilePath, targetDirectoryPath } = context,
          targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath);

    bundler.add(targetEntryFilePath);

    bundler.bundle((error, buffer) => {
      if (error) {
        throw(error);
      }

      createParentDirectory(bundleFilePath);

      const bundleFile = openSync(bundleFilePath, 'w+');

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
