"use strict";

import { arrayUtilities } from "necessary";

import transpileFile from "../transpileFile";

import { MESSAGE } from "../constants";
import { createTranspileFileFunction } from "../utilities/transpile";

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
