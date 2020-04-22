"use strict";

const callbackUtilities = require("./utilities/callback");

const { executeCallbacks } = callbackUtilities;

function action(callbacks, callback, context) {
  executeCallbacks(callbacks, (completed) => {
    const success = completed;  ///

    callback(success);
  }, context);
}

module.exports = action;
