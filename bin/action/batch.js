'use strict';

const action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      browserifyCallback = require('../callback/browserify');

const { exit } = process,
      { FAILED_BATCH_MESSAGE, SUCCESSFUL_BATCH_MESSAGE } = messages;

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
      console.log(SUCCESSFUL_BATCH_MESSAGE) :
        console.log(FAILED_BATCH_MESSAGE);

    exit();
  }, context);
}

module.exports = batch;
