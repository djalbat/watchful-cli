"use strict";

const { executeOperations } = require("./utilities/callback");

function action(operations, callback, context) {
  executeOperations(operations, (completed) => {
    const success = completed;  ///

    callback(success);
  }, context);
}

module.exports = action;
