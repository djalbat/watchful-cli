"use strict";

import { createBundleFilesFunction } from "../utilities/bundle";

export default function createBundleFilesFunctionOperation(proceed, abort, context) {
  const { bundleFilePath } = context;

  if (bundleFilePath === null) {
    proceed();

    return;
  }

  const bundleFilesFunction = createBundleFilesFunction(context);

  if (bundleFilesFunction === null) {
    abort();

    return;
  }

  Object.assign(context, {
    bundleFilesFunction
  });

  proceed();
}
