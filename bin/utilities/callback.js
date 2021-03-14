"use strict";

const { asynchronousUtilities } = require("necessary");

const { whilst } = asynchronousUtilities;

function executeCallbacks(callbacks, callback, context) {
  const completed = true;

  Object.assign(context, {
    callbacks,
    completed
  });

  whilst(executeCallback, () => {
    const { completed } = context;

    delete context.callbacks;

    delete context.completed;

    callback(completed);
  }, context);
}

module.exports = {
  executeCallbacks
};

function executeCallback(next, done, context, index) {
  const { callbacks } = context,
        callbacksLength = callbacks.length,
        lastIndex = callbacksLength - 1;

  if (index > lastIndex) {
    done();

    return;
  }

  const callback = callbacks[index];

  callback(proceed, abort, context);

  function proceed() {
    next();
  }

  function abort() {
    const completed = false;

    Object.assign(context, {
      completed
    });

    done();
  }
}
