"use strict";

const bundleUtilities = require("../utilities/bundle");

const { createBundleFilesFunction } = bundleUtilities;

function createBundleFilesFunctionCallback(proceed, abort, context) {
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

module.exports = createBundleFilesFunctionCallback;
