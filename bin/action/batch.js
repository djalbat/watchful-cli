'use strict';

const action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      browserifyCallback = require('../callback/browserify');

const { BATCH_FAILED_MESSAGE, BATCH_SUCCESSFUL_MESSAGE } = messages;

function batch() {
  const callbacks = [
          babelCallback,
          browserifyCallback
        ],
        sourceMaps = 'inline',
        options = {
          sourceMaps
        },
        entryFileName = 'main.js',
        bundleFilePath = 'public/bundle.js',
        sourceDirectoryPath = 'es6',
        targetDirectoryPath = 'lib',
        context = {
          options,
          entryFileName,
          bundleFilePath,
          sourceDirectoryPath,
          targetDirectoryPath
        };

  action(callbacks, (success) => {
    success ?
      console.log(BATCH_SUCCESSFUL_MESSAGE) :
        console.log(BATCH_FAILED_MESSAGE);

    process.exit();
  }, context);
}

module.exports = batch;
