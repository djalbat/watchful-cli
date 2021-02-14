"use strict";

const action = require("../action"),
      messages = require("../messages"),
      initialiseCallback = require("../callback/initialise"),
      esbuildPathCallback = require("../callback/esbuildPath"),
      bundleFilesCallback = require("../callback/bundleFiles"),
      babelCorePathCallback = require("../callback/babelCorePath"),
      browserifyPathCallback = require("../callback/browserifyPath"),
      transpileFilesCallback = require("../callback/transpileFiles"),
      retrieveFilePathsCallback = require("../callback/retrieveFilePaths");

const { BATCH_BUILD_FAILED_MESSAGE } = messages;

function batch(options) {
  const callbacks = [
          initialiseCallback,
          esbuildPathCallback,
          babelCorePathCallback,
          browserifyPathCallback,
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
