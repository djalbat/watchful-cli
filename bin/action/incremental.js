"use strict";

const watch = require("../watch"),
      action = require("../action"),
      messages = require("../messages"),
      initialiseCallback = require("../callback/initialise"),
      babelCorePathCallback = require("../callback/babelCorePath"),
      browserifyPathCallback = require("../callback/browserifyPath"),
      retrieveFilePathsCallback = require("../callback/retrieveFilePaths");

const { INCREMENTAL_BUILD_FAILED_MESSAGE } = messages;

function incremental(options) {
  const callbacks = [
          initialiseCallback,
          babelCorePathCallback,
          browserifyPathCallback,
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
