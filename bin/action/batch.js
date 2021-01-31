"use strict";

const action = require("../action"),
      messages = require("../messages"),
      babelCallback = require("../callback/babel"),
      initialiseCallback = require("../callback/initialise"),
      browserifyCallback = require("../callback/browserify"),
      bundleFilesCallback = require("../callback/bundleFiles"),
      transpileFilesCallback = require("../callback/transpileFiles"),
      retrieveFilePathsCallback = require("../callback/retrieveFilePaths");

const { BATCH_BUILD_FAILED_MESSAGE } = messages;

function batch(options) {
  const callbacks = [
          initialiseCallback,
          babelCallback,
          browserifyCallback,
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
