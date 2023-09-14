"use strict";

const watch = require("../watch"),
      action = require("../action"),
      initialiseOperation = require("../operation/initialise"),
      retrieveFilePathsOperation = require("../operation/retrieveFilePaths"),
      createBundleFilesFunctionOperation = require("../operation/createBundleFilesFunction"),
      createTranspileFileFunctionOperation = require("../operation/createTranspileFileFunction");

const { INCREMENTAL_BUILD_FAILED_MESSAGE } = require("../messages");

function incrementalAction(wait, node, debug, release, bundler, quietly, metrics, entryFile, processes, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory) {
  const operations = [
          initialiseOperation,
          createTranspileFileFunctionOperation,
          createBundleFilesFunctionOperation,
          retrieveFilePathsOperation
        ],
        context = {
          wait,
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
          sourceDirectory
        };

  action(operations, (success) => {
    if (!success) {
      console.log(INCREMENTAL_BUILD_FAILED_MESSAGE);

      process.exit(1);
    }

    watch(context);
  }, context);
}

module.exports = incrementalAction;
