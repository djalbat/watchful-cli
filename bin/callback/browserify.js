#!/usr/bin/env node

const path = require('path'),
      necessary = require('necessary');

const messages = require('../messages');

const { exit } = process,
      { BABEL_CORE_NOT_INSTALLED } = messages,
      { pathUtilities, fileSystemUtilities } = necessary,
      { pathWithoutBottommostNameFromPath } = pathUtilities,
      { readFile, writeFile, createDirectory, checkDirectoryExists } = fileSystemUtilities;

let babel;

try {
  babel = require(path.resolve('./node_modules/@babel/core'));
} catch (error) {
  console.log(BABEL_CORE_NOT_INSTALLED);

  exit(1);
}

const { transform } = babel;

const sourceDirectoryPath = 'es6',
      targetDirectoryPath = 'lib',
      entryFileName = 'main.js',
      entryFilePath = path.resolve(sourceDirectoryPath, entryFileName),
      entryContent = readFile(entryFilePath),
      source = entryContent, ///
      sourceMaps = 'inline',
      options = {
        sourceMaps
      };

transform(source, options, (error, result) => {
  const { code } = result,
        outputFileName = entryFileName, ///
        outputFilePath = path.resolve(targetDirectoryPath, outputFileName),
        outputContent = code; ///

  createParentDirectory(outputFilePath);

  writeFile(outputFilePath, outputContent);
});

function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath),
        parentDirectoryPath = filePathWithoutBottommostName,  ///
        parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

  if (!parentDirectoryExists) {
    createDirectory(parentDirectoryPath);
  }
}
