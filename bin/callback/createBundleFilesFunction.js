"use strict";

const bundleUtilities = require("../utilities/bundle");

const { createBundleFilesFunction } = bundleUtilities;

function createBundleFilesFunctionCallback(proceed, abort, context) {
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
