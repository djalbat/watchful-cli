"use strict";

const { executeCallbacks } = require("./utilities/callback");

function action(callbacks, callback, context) {
  executeCallbacks(callbacks, (completed) => {
    const success = completed;  ///

    callback(success);
  }, context);
}

module.exports = action;
