'use strict';

const messages = require('../messages');

const { NO_ENTRY_FILE_MESSAGE,
        NO_BUNDLE_FILE_MESSAGE,
        NO_SOURCE_DIRECTORY_MESSAGE } = messages;

function optionsCallback(proceed, abort, context) {
  const { options } = context,
        { entryFile, bundleFile, sourceDirectory, outputDirectory } = options;

  if (!sourceDirectory) {
    console.log(NO_SOURCE_DIRECTORY_MESSAGE);

    abort();

    return;
  }

  if (bundleFile) {
    if (!entryFile) {
      console.log(NO_ENTRY_FILE_MESSAGE);

      abort();

      return;
    }
  }

  if (entryFile) {
    if (!bundleFile) {
      console.log(NO_BUNDLE_FILE_MESSAGE);

      abort();

      return;
    }
  }

  const babelOptions = babelOptionsFromOptions(options),
        browserifyOptions = browserifyOptionsFromOptions(options),
        entryFilePath = entryFile,  ///,
        bundleFilePath = bundleFile,  ///
        sourceDirectoryPath = sourceDirectory,  ///,
        outputDirectoryPath = outputDirectory;  ///

  Object.assign(context, {
    babelOptions,
    entryFilePath,
    bundleFilePath,
    browserifyOptions,
    sourceDirectoryPath,
    outputDirectoryPath
  });

  proceed();
}

module.exports = optionsCallback;

function babelOptionsFromOptions(options) {
  const { debug } = options,
        sourceMaps = debug ?
                      'inline' :
                         null,
        babelOptions = {
          sourceMaps
        };

  return babelOptions;
}

function browserifyOptionsFromOptions(options) {
  const {debug} = options,
        browserifyOptions = {
          debug
        };

  return browserifyOptions;
}
