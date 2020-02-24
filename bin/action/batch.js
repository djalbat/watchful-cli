'use strict';

const action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      browserifyCallback = require('../callback/browserify'),
      bundleFilesCallback = require('../callback/bundleFiles'),
      transformFilesCallback = require('../callback/transformFiles'),
      optionsCallback = require('../callback/options'),
      retrieveFilePathsCallback = require('../callback/retrieveFilePaths');

const { BATCH_FAILED_MESSAGE, BATCH_SUCCESSFUL_MESSAGE } = messages;

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
    success ?
      console.log(BATCH_SUCCESSFUL_MESSAGE) :
        console.log(BATCH_FAILED_MESSAGE);

    process.exit();
  }, context);
}

module.exports = batch;
