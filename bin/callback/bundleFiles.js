'use strict';

const fs = require('fs'),
      necessary = require('necessary');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { stdout } = process,
      { pathUtilities } = necessary,
      { combinePaths } = pathUtilities,
      { openSync, writeSync } = fs,
      { createParentDirectory } = fileSystemUtilities,
      { BROWSERIFY_FAILED_MESSAGE } = messages;

function bundleFilesCallback(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  try {
    const { bundler, targetDirectoryPath } = context,
          targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath);

    bundler.add(targetEntryFilePath);

    bundler.bundle((error, buffer) => {
      if (error) {
        throw(error);
      }

      const { bundleFilePath } = context;

      if (bundleFilePath) {
        createParentDirectory(bundleFilePath);

        const bundleFile = openSync(bundleFilePath, 'w+');

        writeSync(bundleFile, buffer);
      } else {
        stdout.write(buffer);
      }

      proceed();
    });
  } catch (error) {
    console.log(BROWSERIFY_FAILED_MESSAGE);

    console.log(error);

    abort();
  }
}

module.exports = bundleFilesCallback;
