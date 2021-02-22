"use strict";

const messages = require("../messages"),
      defaults = require("../defaults"),
      pathUtilities = require("../utilities/path"),
      metricsUtilities = require("../utilities/metrics");

const { pathFromOption } = pathUtilities,
      { initialiseMetrics } = metricsUtilities,
      { WAIT_DEFAULT,
        DEBUG_DEFAULT,
        BUNDLER_DEFAULT,
        QUIETLY_DEFAULT,
        METRICS_DEFAULT,
        PROCESSES_DEFAULT,
        TRANSPILER_DEFAULT } = defaults,
      { NO_ENTRY_FILE_SPECIFIED_MESSAGE,
        NO_SOURCE_DIRECTORY_SPECFIFIED_MESSAGE,
        BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE,
        NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE,
        ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
        ENTRY_FILE_BUT_NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE } = messages;

function initialiseCallback(proceed, abort, context) {
  const { options } = context,
        { wait = WAIT_DEFAULT,
          debug = DEBUG_DEFAULT,
          bundler = BUNDLER_DEFAULT,
          quietly = QUIETLY_DEFAULT,
          metrics = METRICS_DEFAULT,
          processes = PROCESSES_DEFAULT,
          transpiler = TRANSPILER_DEFAULT,
          entryFile,
          bundleFile,
          libDirectory,
          tempDirectory,
          sourceDirectory } = options,
          processesLength = Number(processes);  ///

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
    if (!tempDirectory && !libDirectory) {
      console.log(ENTRY_FILE_BUT_NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE);

      abort();

      return;
    }

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
  } else {
    const entryFilePath = null;

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

  Object.assign(context, {
    wait,
    debug,
    bundler,
    quietly,
    metrics,
    transpiler,
    processesLength
  });

  delete context.options;

  if (metrics) {
    initialiseMetrics(context);
  }

  proceed();
}

module.exports = initialiseCallback;
