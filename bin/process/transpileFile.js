"use strict";

const necessary = require("necessary");

const constants = require("../constants"),
      transpileFile = require("../transpileFile"),
      transpileUtilities = require("../utilities/transpile");

const { arrayUtilities } = necessary,
      { third } = arrayUtilities,
      { MESSAGE } = constants,
      { createTranspileFileFunction } = transpileUtilities;

const args = process.argv,  ///
      thirdArg = third(args),
      contextString = thirdArg, ///
      context = JSON.parse(contextString),
      transpileFileFunction = createTranspileFileFunction(context);

Object.assign(context, {
  transpileFileFunction
});

process.on(MESSAGE, (message) => {
  const filePath = message; ///

  transpileFile(filePath, context, (success) => process.send(success));
});
