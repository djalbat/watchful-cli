'use strict';

const watch = require('../watch'),
      action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      optionsCallback = require('../callback/options'),
      browserifyCallback = require('../callback/browserify');

const { exit } = process,
      { INCREMENTAL_BUILD_FAILED_MESSAGE } = messages;

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

      exit(1);
    }

    watch(context, () => {
      exit(0);
    });
  }, context);
}

module.exports = incremental;
