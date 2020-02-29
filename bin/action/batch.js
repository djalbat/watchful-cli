'use strict';

const action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      optionsCallback = require('../callback/options'),
      browserifyCallback = require('../callback/browserify'),
      bundleFilesCallback = require('../callback/bundleFiles'),
      transformFilesCallback = require('../callback/transformFiles'),
      retrieveFilePathsCallback = require('../callback/retrieveFilePaths');

const { exit } = process,
      { BATCH_BUILD_FAILED_MESSAGE, BATCH_BUILD_SUCCESSFUL_MESSAGE } = messages;

function batch(options) {
  const callbacks = [
          optionsCallback,
          babelCallback,
          browserifyCallback,
          retrieveFilePathsCallback,
          transformFilesCallback,
          bundleFilesCallback
        ],
        context = {
          options
        };

  action(callbacks, (success) => {
    if (!success) {
      console.log(BATCH_BUILD_FAILED_MESSAGE);

      exit(1);
    }

    console.log(BATCH_BUILD_SUCCESSFUL_MESSAGE);

    exit(0);
  }, context);
}

module.exports = batch;
