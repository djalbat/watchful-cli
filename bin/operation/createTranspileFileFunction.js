"use strict";

const { createTranspileFileFunction } = require("../utilities/transpile");

function createTranspileFileFunctionOperation(proceed, abort, context) {
  const transpileFileFunction = createTranspileFileFunction(context);

  if (transpileFileFunction === null) {
    abort();

    return;
  }

  Object.assign(context, {
    transpileFileFunction
  });

  proceed();
}

module.exports = createTranspileFileFunctionOperation;
