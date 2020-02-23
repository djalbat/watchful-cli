'use strict';

const action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      bundleCallback = require('../callback/bundle'),
      browserifyCallback = require('../callback/browserify'),
      transformFilesCallback = require('../callback/transformFiles'),
      retrieveFilePathsCallback = require('../callback/retrieveFilePaths'),
      cleanTargetDirectoryCallback = require('../callback/cleanTargetDirectory');

const { BATCH_FAILED_MESSAGE, BATCH_SUCCESSFUL_MESSAGE } = messages;

function batch() {
  const callbacks = [
          babelCallback,
          browserifyCallback,
          retrieveFilePathsCallback,
          cleanTargetDirectoryCallback,
          transformFilesCallback,
          bundleCallback
        ],
        sourceMaps = 'inline',
        options = {
          sourceMaps
        },
        entryFilePath = './main.js',
        bundleFilePath = './public/lib/client.js',
        sourceDirectoryPath = './es6',
        targetDirectoryPath = './tmp',
        context = {
          options,
          entryFilePath,
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
