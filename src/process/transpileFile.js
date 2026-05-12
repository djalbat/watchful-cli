"use strict";

import { arrayUtilities } from "necessary";

import transpileFile from "../transpileFile";

import { MESSAGE } from "../constants";
import { createTranspileFileFunction } from "../utilities/transpile";

const { third } = arrayUtilities;

const args = process.argv,  ///
      thirdArg = third(args),
      contextString = thirdArg, ///
      jsonString = contextString, ///
      json = JSON.parse(jsonString),
      context = json, ///
      transpileFileFunction = createTranspileFileFunction(context);

Object.assign(context, {
  transpileFileFunction
});

process.on(MESSAGE, (message) => {
  const filePath = message; ///

  transpileFile(filePath, context, (success) => process.send(success));
});
