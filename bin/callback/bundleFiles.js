"use strict";

const bundleUtilities = require("../utilities/bundle");

const { bundleFiles } = bundleUtilities;

function bundleFilesCallback(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  bundleFiles(entryFilePath, context, () => {
    proceed();
  });
}

module.exports = bundleFilesCallback;
