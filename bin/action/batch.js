"use strict";

const action = require("../action"),
      messages = require("../messages"),
      initialiseCallback = require("../callback/initialise"),
      bundleFilesCallback = require("../callback/bundleFiles"),
      transpileFilesCallback = require("../callback/transpileFiles"),
      retrieveFilePathsCallback = require("../callback/retrieveFilePaths"),
      createBundleFilesFunctionCallback = require("../callback/createBundleFilesFunction"),
      createTranspileFileFunctionCallback = require("../callback/createTranspileFileFunction");

const { BATCH_BUILD_FAILED_MESSAGE } = messages;

function batch(options) {
  const callbacks = [
          initialiseCallback,
          createTranspileFileFunctionCallback,
          createBundleFilesFunctionCallback,
          retrieveFilePathsCallback,
          transpileFilesCallback,
          bundleFilesCallback
        ],
        context = {
          options
        };

  action(callbacks, (success) => {
    if (!success) {
      console.log(BATCH_BUILD_FAILED_MESSAGE);

      process.exit(1);
    }

    process.exit(0);
  }, context);
}

module.exports = batch;
