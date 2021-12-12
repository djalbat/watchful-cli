"use strict";

const bundleFiles = require("../bundleFiles");

function bundleFilesOperation(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  bundleFiles(context, () => {
    proceed();
  });
}

module.exports = bundleFilesOperation;
