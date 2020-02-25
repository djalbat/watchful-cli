'use strict';

function optionsCallback(proceed, abort, context) {
  const { options } = context,
        { debug, inputDirectory } = options,
        sourceMaps = debug ?
                      'inline' :
                        null,
        babelOptions = {
          sourceMaps
        },
        browserifyOptions = {
          debug,
        },
        entryFilePath = 'main.js',
        bundleFilePath = 'public/lib/client.js',
        inputDirectoryPath = inputDirectory,  ///,
        targetDirectoryPath = 'tmp';

  Object.assign(context, {
    babelOptions,
    entryFilePath,
    bundleFilePath,
    browserifyOptions,
    inputDirectoryPath,
    targetDirectoryPath
  });

  proceed();
}

module.exports = optionsCallback;
