'use strict';

const callbackUtilities = require('./utilities/callback');

const { exit } = process,
      { executeCallbacks } = callbackUtilities;

function action(callbacks, callback, context) {
  executeCallbacks(callbacks, (completed) => {
    if (!completed) {
      exit(1);
    }

    const success = completed;  ///

    callback(success);
  }, context);
}

module.exports = action;
