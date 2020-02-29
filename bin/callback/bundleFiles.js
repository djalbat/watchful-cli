'use strict';

const messages = require('../messages'),
      bundleUtilities = require('../utilities/bundle');

const { bundleFiles } = bundleUtilities,
      { BROWSERIFY_FAILED_MESSAGE } = messages;

function bundleFilesCallback(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  try {
    bundleFiles(entryFilePath, context, () => {
      proceed();
    });
  } catch (error) {
    console.log(BROWSERIFY_FAILED_MESSAGE);

    console.log(error);

    abort();
  }
}

module.exports = bundleFilesCallback;
