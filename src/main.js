"use strict";

import helpAction from "./action/help";
import batchAction from "./action/batch";
import versionAction from "./action/version";
import incrementalAction from "./action/incremental";

import { NO_COMMAND_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } from "./messages";
import { HELP_COMMAND, BATCH_COMMAND, VERSION_COMMAND, INCREMENTAL_COMMAND } from "./commands";
import { DEFAULT_WAIT,
         DEFAULT_NODE,
         DEFAULT_DEBUG,
         DEFAULT_RELEASE,
         DEFAULT_BUNDLER,
         DEFAULT_QUIETLY,
         DEFAULT_METRICS,
         DEFAULT_ENTRY_FILE,
         DEFAULT_PROCESSES,
         DEFAULT_TRANSPILER,
         DEFAULT_BUNDLE_FILE,
         DEFAULT_LIB_DIRECTORY,
         DEFAULT_TEMP_DIRECTORY,
         DEFAULT_SOURCE_DIRECTORY } from "./defaults";

export default function main(command, argument, options) {
  const { wait = DEFAULT_WAIT,
          node = DEFAULT_NODE,
          debug = DEFAULT_DEBUG,
          release = DEFAULT_RELEASE,
          bundler = DEFAULT_BUNDLER,
          quietly = DEFAULT_QUIETLY,
          metrics = DEFAULT_METRICS,
          processes = DEFAULT_PROCESSES,
          entryFile = DEFAULT_ENTRY_FILE,
          transpiler = DEFAULT_TRANSPILER,
          bundleFile = DEFAULT_BUNDLE_FILE,
          libDirectory = DEFAULT_LIB_DIRECTORY,
          tempDirectory = DEFAULT_TEMP_DIRECTORY,
          sourceDirectory = DEFAULT_SOURCE_DIRECTORY } = options;

  switch (command) {
    case null: {
      console.log(NO_COMMAND_GIVEN_MESSAGE);

      break;
    }

    case HELP_COMMAND: {
      helpAction();

      break;
    }

    case BATCH_COMMAND: {
      batchAction(wait, node, debug, release, bundler, quietly, metrics, processes, entryFile, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory);

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    case INCREMENTAL_COMMAND: {
      incrementalAction(wait, node, debug, release, bundler, quietly, metrics, processes, entryFile, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory);

      break;
    }

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      break;
    }
  }
}
