'use strict';

const callbackUtilities = require('./utilities/callback');

const { exit } = process,
      { executeCallbacks } = callbackUtilities;

function action(callbacks, uri, callback, context) {
  executeCallbacks(callbacks, (completed) => {
    if (!completed) {
      exit();
    }

    callback();
  }, context);
}

module.exports = action;
