"use strict";

const watch = require("../watch"),
      action = require("../action"),
      initialiseCallback = require("../callback/initialise"),
      retrieveFilePathsCallback = require("../callback/retrieveFilePaths"),
      createBundleFilesFunctionCallback = require("../callback/createBundleFilesFunction"),
      createTranspileFileFunctionCallback = require("../callback/createTranspileFileFunction");

const { INCREMENTAL_BUILD_FAILED_MESSAGE } = require("../messages");

function incremental(options) {
  const callbacks = [
          initialiseCallback,
          createTranspileFileFunctionCallback,
          createBundleFilesFunctionCallback,
          retrieveFilePathsCallback
        ],
        context = {
          options
        };

  action(callbacks, (success) => {
    if (!success) {
      console.log(INCREMENTAL_BUILD_FAILED_MESSAGE);

      process.exit(1);
    }

    watch(context);
  }, context);
}

module.exports = incremental;
