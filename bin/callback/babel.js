'use strict';

const path = require('path');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { readFile, writeFile, createParentDirectory } = fileSystemUtilities,
      { BABEL_FAILED_MESSAGE, BABEL_CORE_NOT_INSTALLED } = messages;

function babelCallback(proceed, abort, context) {
  let transform;

  try {
    const babel = require(path.resolve('./node_modules/@babel/core'));

    ({transform} = babel);
  } catch (error) {
    console.log(BABEL_CORE_NOT_INSTALLED);

    abort();
  }

  try {
    const { options, sourceDirectoryPath, entryFileName } = context,
          absoluteEntryFilePath = path.resolve(sourceDirectoryPath, entryFileName),
          entryContent = readFile(absoluteEntryFilePath),
          source = entryContent;  ///

    transform(source, options, (error, result) => {
      const { code } = result,
            { targetDirectoryPath } = context,
            outputFileName = entryFileName, ///
            absoluteOutputFilePath = path.resolve(targetDirectoryPath, outputFileName),
            outputContent = code; ///

      createParentDirectory(absoluteOutputFilePath);

      writeFile(absoluteOutputFilePath, outputContent);

      proceed();
    });
  } catch (error) {
    console.log(BABEL_FAILED_MESSAGE);

    console.log(error);

    abort();
  }
}

module.exports = babelCallback;
