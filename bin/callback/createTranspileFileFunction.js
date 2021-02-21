"use strict";

const transpileUtilities = require("../utilities/transpile");

const { createTranspileFileFunction } = transpileUtilities;

function createTranspileFileFunctionCallback(proceed, abort, context) {
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

module.exports = createTranspileFileFunctionCallback;
