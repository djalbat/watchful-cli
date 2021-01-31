"use strict";

const necessary = require("necessary");

const constants = require("../constants"),
      transpileUtilities = require("../utilities/transpile");

const { arrayUtilities } = necessary,
      { third } = arrayUtilities,
      { MESSAGE } = constants,
      { transpileFile } = transpileUtilities;

const args = process.argv,  ///
      thirdArg = third(args),
      contextString = thirdArg, ///
      context = JSON.parse(contextString);

process.on(MESSAGE, (message) => {
  const filePath = message; ///

  transpileFile(filePath, context, () => process.send(filePath));
});
