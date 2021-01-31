"use strict";

const watch = require("../watch"),
      action = require("../action"),
      messages = require("../messages"),
      babelCallback = require("../callback/babel"),
      initialiseCallback = require("../callback/initialise"),
      browserifyCallback = require("../callback/browserify"),
      retrieveFilePathsCallback = require("../callback/retrieveFilePaths");

const { INCREMENTAL_BUILD_FAILED_MESSAGE } = messages;

function incremental(options) {
  const callbacks = [
          initialiseCallback,
          babelCallback,
          browserifyCallback,
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
