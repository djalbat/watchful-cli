"use strict";

const { pathFromOption } = require("../utilities/path"),
      { initialiseMetrics } = require("../utilities/metrics"),
      { NO_ENTRY_FILE_SPECIFIED_MESSAGE,
        NO_BUNDLE_FILE_SPECIFIED_MESSAGE,
        DEBUG_AND_RELEAES_BOTH_SET_MESSAGE,
        NO_SOURCE_DIRECTORY_SPECFIFIED_MESSAGE,
        ENTRY_FILE_BUT_NO_BUNDLE_FILE_SPECIFIED_MESSAGE,
        BUNDLE_FILE_BUT_NO_ENTRY_FILE_SPECIFIED_MESSAGE,
        BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE,
        NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE,
        ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE } = require("../messages");

function initialiseOperation(proceed, abort, context) {
  const { wait,
          node,
          debug,
          release,
          bundler,
          quietly,
          metrics,
          entryFile,
          processes,
          transpiler,
          bundleFile,
          libDirectory,
          tempDirectory,
          sourceDirectory } = context,
          processesLength = Number(processes);  ///

  let entryFilePath = null,
      bundleFilePath = null,
      sourceDirectoryPath = null,
      targetDirectoryPath = null;

  if (debug && release) {
    console.log(DEBUG_AND_RELEAES_BOTH_SET_MESSAGE);

    abort();

    return;
  }

  if (sourceDirectory === null) {
    console.log(NO_SOURCE_DIRECTORY_SPECFIFIED_MESSAGE);

    abort();

    return;
  }

  if ((libDirectory === null) && (tempDirectory === null)) {
    console.log(NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE);

    abort();

    return;
  }

  if ((libDirectory !== null) && (tempDirectory !== null)) {
    console.log(BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE);

    abort();

    return;
  }

  if (tempDirectory !== null) {
    if (entryFile === null) {
      console.log(NO_ENTRY_FILE_SPECIFIED_MESSAGE);

      abort();

      return;
    }

    if (bundleFile === null) {
      console.log(NO_BUNDLE_FILE_SPECIFIED_MESSAGE);

      abort();

      return;
    }
  }

  if ((entryFile !== null) && (bundleFile === null)) {
    console.log(ENTRY_FILE_BUT_NO_BUNDLE_FILE_SPECIFIED_MESSAGE);

    abort();

    return;
  }

  if ((bundleFile !== null) && (entryFile === null)) {
    console.log(BUNDLE_FILE_BUT_NO_ENTRY_FILE_SPECIFIED_MESSAGE);

    abort();

    return;
  }

  if (entryFile !== null) {
    const entryFileOption = entryFile;  ///

    entryFilePath = pathFromOption(entryFileOption);

    if (entryFilePath === null) {
      console.log(ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }
  }

  if (bundleFile !== null) {
    const bundleFileOption = bundleFile;  ///

    bundleFilePath = pathFromOption(bundleFile, bundleFileOption);

    if (bundleFilePath === null) {
      console.log(BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }
  }

  if (libDirectory !== null) {
    const libDirectoryOption = libDirectory,  ///
          libDirectoryPath = pathFromOption(libDirectory, libDirectoryOption);

    if (libDirectoryPath === null) {
      console.log(LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    targetDirectoryPath = libDirectoryPath; ///
  }

  if (tempDirectory !== null) {
    const tempDirectoryOption = tempDirectory,  ///
          tempDirectoryPath = pathFromOption(tempDirectory, tempDirectoryOption);

    if (tempDirectoryPath === null) {
      console.log(TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    targetDirectoryPath = tempDirectoryPath; ///
  }

  if (sourceDirectory !== null) {
    const sourceDirectoryOption = sourceDirectory;  ///

    sourceDirectoryPath = pathFromOption(sourceDirectory, sourceDirectoryOption);

    if (sourceDirectoryPath === null) {
      console.log(SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }
  }

  Object.assign(context, {
    wait,
    node,
    debug,
    bundler,
    quietly,
    metrics,
    transpiler,
    entryFilePath,
    bundleFilePath,
    processesLength,
    sourceDirectoryPath,
    targetDirectoryPath
  });

  delete context.options;

  if (metrics) {
    initialiseMetrics(context);
  }

  proceed();
}

module.exports = initialiseOperation;
