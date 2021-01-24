"use strict";

const necessary = require("necessary");

const constants = require("../constants"),
      transpileUtilities = require("../utilities/transpile");

const { arrayUtilities } = necessary,
      { third, fourth } = arrayUtilities,
      { transpileFile } = transpileUtilities,
      { EMPTY_MESSAGE } = constants;

const args = process.argv,  ///
      thirdArg = third(args),
      fourthArg = fourth(args),
      contextString = fourthArg, ///
      filePath = thirdArg,  ///
      context = JSON.parse(contextString);

transpileFile(filePath, context, () => {
  process.send(EMPTY_MESSAGE);
});
