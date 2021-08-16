"use strict";

const { pathFromOption } = require("../utilities/path"),
      { initialiseMetrics } = require("../utilities/metrics"),
      { DEFAULT_WAIT,
        DEFAULT_NODE,
        DEFAULT_DEBUG,
        DEFAULT_BUNDLER,
        DEFAULT_QUIETLY,
        DEFAULT_METRICS,
        DEFAULT_PROCESSES,
        DEFAULT_TRANSPILER } = require("../defaults"),
      { NO_ENTRY_FILE_SPECIFIED_MESSAGE,
        NO_BUNDLE_FILE_SPECIFIED_MESSAGE,
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

function initialiseCallback(proceed, abort, context) {
  const { options } = context,
        { wait = DEFAULT_WAIT,
          node = DEFAULT_NODE,
          debug = DEFAULT_DEBUG,
          bundler = DEFAULT_BUNDLER,
          quietly = DEFAULT_QUIETLY,
          metrics = DEFAULT_METRICS,
          processes = DEFAULT_PROCESSES,
          transpiler = DEFAULT_TRANSPILER,
          entryFile = null,
          bundleFile = null,
          libDirectory = null,
          tempDirectory = null,
          sourceDirectory } = options,
          processesLength = Number(processes);  ///

  let entryFilePath = null,
      bundleFilePath = null,
      sourceDirectoryPath = null,
      targetDirectoryPath = null;

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

    if (!bundleFile) {
      console.log(NO_BUNDLE_FILE_SPECIFIED_MESSAGE);

      abort();

      return;
    }
  }

  if (entryFile && !bundleFile) {
    console.log(ENTRY_FILE_BUT_NO_BUNDLE_FILE_SPECIFIED_MESSAGE);

    abort();

    return;
  }

  if (bundleFile && !entryFile) {
    console.log(BUNDLE_FILE_BUT_NO_ENTRY_FILE_SPECIFIED_MESSAGE);

    abort();

    return;
  }

  if (entryFile) {
    const entryFileOption = entryFile;  ///

    entryFilePath = pathFromOption(entryFileOption);

    if (!entryFilePath) {
      console.log(ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }
  }

  if (bundleFile) {
    const bundleFileOption = bundleFile;  ///

    bundleFilePath = pathFromOption(bundleFile, bundleFileOption);

    if (!bundleFilePath) {
      console.log(BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }
  }

  if (libDirectory) {
    const libDirectoryOption = libDirectory,  ///
          libDirectoryPath = pathFromOption(libDirectory, libDirectoryOption);

    if (!libDirectoryPath) {
      console.log(LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    targetDirectoryPath = libDirectoryPath; ///
  }

  if (tempDirectory) {
    const tempDirectoryOption = tempDirectory,  ///
          tempDirectoryPath = pathFromOption(tempDirectory, tempDirectoryOption);

    if (!tempDirectoryPath) {
      console.log(TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE);

      abort();

      return;
    }

    targetDirectoryPath = tempDirectoryPath; ///
  }

  if (sourceDirectory) {
    const sourceDirectoryOption = sourceDirectory;  ///

    sourceDirectoryPath = pathFromOption(sourceDirectory, sourceDirectoryOption);

    if (!sourceDirectoryPath) {
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

module.exports = initialiseCallback;
