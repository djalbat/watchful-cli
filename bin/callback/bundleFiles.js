"use strict";

const bundleFiles = require("../bundleFiles");

function bundleFilesCallback(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  bundleFiles(context, () => {
    proceed();
  });
}

module.exports = bundleFilesCallback;
