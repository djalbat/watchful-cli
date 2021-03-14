"use strict";

const { arrayUtilities } = require("necessary");

const transpileFile = require("../transpileFile");

const { MESSAGE } = require("../constants"),
      { createTranspileFileFunction } = require("../utilities/transpile");

const { third } = arrayUtilities;

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
