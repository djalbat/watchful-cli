'use strict';

const messages = require('../messages');

const { NO_ENTRY_FILE_MESSAGE,
        NO_TEMP_DIRECTORY_MESSAGE,
        NO_SOURCE_DIRECTORY_MESSAGE,
        NO_LIB_OR_TEMP_DIRECTORY_MESSAGE,
        BOTH_LIB_AND_TEMP_DIRECTORIES_MESSAGE } = messages;

function optionsCallback(proceed, abort, context) {
  const { options } = context,
        { entryFile, bundleFile, libDirectory, tempDirectory, sourceDirectory } = options;

  if (!sourceDirectory) {
    console.log(NO_SOURCE_DIRECTORY_MESSAGE);

    abort();

    return;
  }

  if (!libDirectory && !tempDirectory) {
    console.log(NO_LIB_OR_TEMP_DIRECTORY_MESSAGE);

    abort();

    return;
  }

  if (libDirectory && tempDirectory) {
    console.log(BOTH_LIB_AND_TEMP_DIRECTORIES_MESSAGE);

    abort();

    return;
  }

  if (tempDirectory) {
    if (!entryFile) {
      console.log(NO_ENTRY_FILE_MESSAGE);

      abort();

      return;
    }
  }

  if (entryFile) {
    if (!tempDirectory) {
      console.log(NO_TEMP_DIRECTORY_MESSAGE);

      abort();

      return;
    }
  }

  const babelOptions = babelOptionsFromOptions(options),
        browserifyOptions = browserifyOptionsFromOptions(options),
        entryFilePath = entryFile,  ///,
        bundleFilePath = bundleFile,  ///
        sourceDirectoryPath = sourceDirectory,  ///,
        targetDirectoryPath = libDirectory || tempDirectory;

  Object.assign(context, {
    babelOptions,
    entryFilePath,
    bundleFilePath,
    browserifyOptions,
    sourceDirectoryPath,
    targetDirectoryPath
  });

  proceed();
}

module.exports = optionsCallback;

function babelOptionsFromOptions(options) {
  const babelOptions = {},
        { debug } = options;

  if (debug) {
    const sourceMaps = 'inline';

    Object.assign(babelOptions, {
      sourceMaps
    });
  }

  return babelOptions;
}

function browserifyOptionsFromOptions(options) {
  const browserifyOptions = {},
        { debug } = options;

  if (debug) {
    Object.assign(browserifyOptions, {
      debug
    });
  }

  return browserifyOptions;
}
