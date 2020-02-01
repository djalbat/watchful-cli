#!/usr/bin/env node

const path = require('path'),
      necessary = require('necessary');

const messages = require('../messages');

const { pathUtilities, fileSystemUtilities } = necessary,
      { pathWithoutBottommostNameFromPath } = pathUtilities,
      { BABEL_CORE_NOT_INSTALLED } = messages,
      { readFile, writeFile, createDirectory, checkDirectoryExists } = fileSystemUtilities;

function babelCallback(proceed, abort, context) {
  let babel;

  try {
    babel = require(path.resolve('./node_modules/@babel/core'));
  } catch (error) {
    console.log(BABEL_CORE_NOT_INSTALLED);

    abort();
  }

  const { transform } = babel,
        { options, sourceDirectoryPath, entryFileName } = context,
        entryFilePath = path.resolve(sourceDirectoryPath, entryFileName),
        entryContent = readFile(entryFilePath),
        source = entryContent;  ///

  transform(source, options, (error, result) => {
    const { code } = result,
          { targetDirectoryPath } = context,
          outputFileName = entryFileName, ///
          outputFilePath = path.resolve(targetDirectoryPath, outputFileName),
          outputContent = code; ///

    createParentDirectory(outputFilePath);

    writeFile(outputFilePath, outputContent);

    proceed();
  });
}

module.exports = babelCallback;

function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath),
        parentDirectoryPath = filePathWithoutBottommostName,  ///
        parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

  if (!parentDirectoryExists) {
    createDirectory(parentDirectoryPath);
  }
}
