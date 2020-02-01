'use strict';

const action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      browserifyCallback = require('../callback/browserify');

const { BATCH_URI } = uris,
      { FAILED_BATCH_MESSAGE, SUCCESSFUL_BATCH_MESSAGE } = messages;

function batch() {
  const uri = BATCH_URI,
        callbacks = [
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

  action(callbacks, uri, (json, done) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_BATCH_MESSAGE) :
        console.log(FAILED_BATCH_MESSAGE);

    done();
  }, context);
}

module.exports = batch;
