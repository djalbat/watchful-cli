"use strict";

const watch = require("../watch"),
      action = require("../action"),
      messages = require("../messages"),
      babelCallback = require("../callback/babel"),
      optionsCallback = require("../callback/options"),
      browserifyCallback = require("../callback/browserify");

const { INCREMENTAL_BUILD_FAILED_MESSAGE } = messages;

function incremental(options) {
  const callbacks = [
          optionsCallback,
          babelCallback,
          browserifyCallback
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
