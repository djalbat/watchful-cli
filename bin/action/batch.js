'use strict';

const action = require('../action'),
      messages = require('../messages'),
      babelCallback = require('../callback/babel'),
      browserifyCallback = require('../callback/browserify'),
      bundleFilesCallback = require('../callback/bundleFiles'),
      transformFilesCallback = require('../callback/transformFiles'),
      retrieveFilePathsCallback = require('../callback/retrieveFilePaths');

const { BATCH_FAILED_MESSAGE, BATCH_SUCCESSFUL_MESSAGE } = messages;

function batch() {
  const callbacks = [
          babelCallback,
          browserifyCallback,
          retrieveFilePathsCallback,
          transformFilesCallback,
          bundleFilesCallback
        ],
        debug = true,
        sourceMaps = 'inline',
        babelOptions = {
          sourceMaps
        },
        browserifyOptions = {
          debug,
        },
        entryFilePath = './main.js',
        bundleFilePath = './public/lib/client.js',
        sourceDirectoryPath = './es6',
        targetDirectoryPath = './tmp',
        context = {
          babelOptions,
          entryFilePath,
          bundleFilePath,
          browserifyOptions,
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
