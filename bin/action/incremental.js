"use strict";

const watch = require("../watch"),
      action = require("../action"),
      initialiseOperation = require("../operation/initialise"),
      retrieveFilePathsOperation = require("../operation/retrieveFilePaths"),
      createBundleFilesFunctionOperation = require("../operation/createBundleFilesFunction"),
      createTranspileFileFunctionOperation = require("../operation/createTranspileFileFunction");

const { INCREMENTAL_BUILD_FAILED_MESSAGE } = require("../messages");

function incremental(options) {
  const operations = [
          initialiseOperation,
          createTranspileFileFunctionOperation,
          createBundleFilesFunctionOperation,
          retrieveFilePathsOperation
        ],
        context = {
          options
        };

  action(operations, (success) => {
    if (!success) {
      console.log(INCREMENTAL_BUILD_FAILED_MESSAGE);

      process.exit(1);
    }

    watch(context);
  }, context);
}

module.exports = incremental;
