'use strict';

function optionsCallback(proceed, abort, context) {
  const { options } = context,
        { debug, inputDirectory, outputDirectory } = options,
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
        outputDirectoryPath = outputDirectory;  ///

  Object.assign(context, {
    babelOptions,
    entryFilePath,
    bundleFilePath,
    browserifyOptions,
    inputDirectoryPath,
    outputDirectoryPath
  });

  proceed();
}

module.exports = optionsCallback;
