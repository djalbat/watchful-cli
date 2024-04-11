"use strict";

const helpAction = require("./action/help"),
      batchAction = require("./action/batch"),
      versionAction = require("./action/version"),
      incrementalAction = require("./action/incremental");

const { HELP_COMMAND, BATCH_COMMAND, VERSION_COMMAND, INCREMENTAL_COMMAND } = require("./commands"),
      { DEFAULT_HELP,
        DEFAULT_WAIT,
        DEFAULT_NODE,
        DEFAULT_DEBUG,
        DEFAULT_RELEASE,
        DEFAULT_BUNDLER,
        DEFAULT_VERSION,
        DEFAULT_QUIETLY,
        DEFAULT_METRICS,
        DEFAULT_ENTRY_FILE,
        DEFAULT_PROCESSES,
        DEFAULT_TRANSPILER,
        DEFAULT_BUNDLE_FILE,
        DEFAULT_LIB_DIRECTORY,
        DEFAULT_TEMP_DIRECTORY,
        DEFAULT_SOURCE_DIRECTORY } = require("./defaults");

function main(command, argument, options) {
  const commandMissing = (command === null),
        { help = DEFAULT_HELP,
          wait = DEFAULT_WAIT,
          node = DEFAULT_NODE,
          debug = DEFAULT_DEBUG,
          release = DEFAULT_RELEASE,
          bundler = DEFAULT_BUNDLER,
          version = DEFAULT_VERSION,
          quietly = DEFAULT_QUIETLY,
          metrics = DEFAULT_METRICS,
          entryFile = DEFAULT_ENTRY_FILE,
          processes = DEFAULT_PROCESSES,
          transpiler = DEFAULT_TRANSPILER,
          bundleFile = DEFAULT_BUNDLE_FILE,
          libDirectory = DEFAULT_LIB_DIRECTORY,
          tempDirectory = DEFAULT_TEMP_DIRECTORY,
          sourceDirectory = DEFAULT_SOURCE_DIRECTORY } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  } else if (commandMissing) {
    command = INCREMENTAL_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND: helpAction(); break;
    case BATCH_COMMAND: batchAction(wait, node, debug, release, bundler, quietly, metrics, entryFile, processes, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory); break;
    case VERSION_COMMAND: versionAction(); break;
    case INCREMENTAL_COMMAND: incrementalAction(wait, node, debug, release, bundler, quietly, metrics, entryFile, processes, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory); break;
  }
}

module.exports = main;
