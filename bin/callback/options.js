'use strict';

const messages = require('../messages'),
      pathUtilities = require('../utilities/path');

const { pathFromOption } = pathUtilities,
      { NO_ENTRY_FILE_SPECIFIED_MESSAGE,
        NO_TEMP_DIRECTORY_SPECIFIED_MESSAGE,
        NO_SOURCE_DIRECTORY_SPECFIFIED_MESSAGE,
        BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE,
        NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE,
        ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE } = messages;

function optionsCallback(proceed, abort, context) {
  const { options } = context,
        { entryFile, bundleFile, libDirectory, tempDirectory, sourceDirectory } = options;

  if (!sourceDirectory) {
    console.log(NO_SOURCE_DIRECTORY_SPECFIFIED_MESSAGE);

    abort();

    return;
  }

  if (!libDirectory && !tempDirectory) {
    console.log(NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE);

    abort();

    return;
  }

  if (libDirectory && tempDirectory) {
    console.log(BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE);

    abort();

    return;
  }

  if (tempDirectory) {
    if (!entryFile) {
      console.log(NO_ENTRY_FILE_SPECIFIED_MESSAGE);

      abort();

      return;
    }
  }

  if (entryFile) {
    if (!tempDirectory) {
      console.log(NO_TEMP_DIRECTORY_SPECIFIED_MESSAGE);

      abort();

      return;
    }
  }

  if (entryFile) {
    const entryFileOption = entryFile,  ///
          entryFilePath = pathFromOption(entryFileOption);

    if (!entryFilePath) {
      console.log(ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    Object.assign(context, {
      entryFilePath
    });
  }

  if (bundleFile) {
    const bundleFileOption = bundleFile,  ///
          bundleFilePath = pathFromOption(bundleFile, bundleFileOption);

    if (!bundleFilePath) {
      console.log(BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    Object.assign(context, {
      bundleFilePath
    });
  }

  if (libDirectory) {
    const libDirectoryOption = libDirectory,  ///
          libDirectoryPath = pathFromOption(libDirectory, libDirectoryOption);

    if (!libDirectoryPath) {
      console.log(LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    const targetDirectoryPath = libDirectoryPath; ///

    Object.assign(context, {
      targetDirectoryPath
    });
  }

  if (tempDirectory) {
    const tempDirectoryOption = tempDirectory,  ///
          tempDirectoryPath = pathFromOption(tempDirectory, tempDirectoryOption);

    if (!tempDirectoryPath) {
      console.log(TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    const targetDirectoryPath = tempDirectoryPath; ///

    Object.assign(context, {
      targetDirectoryPath
    });
  }

  if (sourceDirectory) {
    const sourceDirectoryOption = sourceDirectory,  ///
          sourceDirectoryPath = pathFromOption(sourceDirectory, sourceDirectoryOption);

    if (!sourceDirectoryPath) {
      console.log(SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    Object.assign(context, {
      sourceDirectoryPath
    });
  }

  const babelOptions = babelOptionsFromOptions(options),
        browserifyOptions = browserifyOptionsFromOptions(options);

  Object.assign(context, {
    babelOptions,
    browserifyOptions
  });

  delete context.options;

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
