"use strict";

const { asynchronousUtilities } = require("necessary");

const { whilst } = asynchronousUtilities;

function executeOperations(operations, callback, context) {
  const completed = true;

  Object.assign(context, {
    operations,
    completed
  });

  whilst(executeOperation, () => {
    const { completed } = context;

    delete context.operations;

    delete context.completed;

    callback(completed);
  }, context);
}

module.exports = {
  executeOperations
};

function executeOperation(next, done, context, index) {
  const { operations } = context,
        operationsLength = operations.length,
        lastIndex = operationsLength - 1;

  if (index > lastIndex) {
    done();

    return;
  }

  const operation = operations[index];

  operation(proceed, abort, context);

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
