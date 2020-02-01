'use strict';

const necessary = require('necessary');

const { asynchronousUtilities } = necessary,
      { whilst } = asynchronousUtilities;

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

  const callback = callbacks[index],
        proceed = next; ///

  callback(proceed, () => {
    const completed = false;

    Object.assign(context, {
      completed
    });

    done();
  }, context);
}
