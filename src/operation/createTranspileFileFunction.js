"use strict";

import { createTranspileFileFunction } from "../utilities/transpile";

export default function createTranspileFileFunctionOperation(proceed, abort, context) {
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
