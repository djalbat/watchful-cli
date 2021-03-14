"use strict";

const { createTranspileFileFunction } = require("../utilities/transpile");

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
