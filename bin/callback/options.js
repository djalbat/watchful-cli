'use strict';

function optionsCallback(proceed, abort, context) {
  const { options } = context,
        { debug, entryFile, bundleFile, inputDirectory, outputDirectory } = options,
        sourceMaps = debug ?
                      'inline' :
                         null,
        babelOptions = {
          sourceMaps
        },
        browserifyOptions = {
          debug,
        },
        entryFilePath = entryFile,  ///,
        bundleFilePath = bundleFile,  ///
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
