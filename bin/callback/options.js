'use strict';

function optionsCallback(proceed, abort, context) {
  const debug = true,
        sourceMaps = 'inline',
        babelOptions = {
          sourceMaps
        },
        browserifyOptions = {
          debug,
        },
        entryFilePath = 'main.js',
        bundleFilePath = 'public/lib/client.js',
        sourceDirectoryPath = 'es6',
        targetDirectoryPath = 'tmp';

  Object.assign(context, {
    babelOptions,
    entryFilePath,
    bundleFilePath,
    browserifyOptions,
    sourceDirectoryPath,
    targetDirectoryPath
  });

  proceed();
}

module.exports = optionsCallback;
