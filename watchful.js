#!/usr/bin/env node

const path = require('path'),
      necessary = require('necessary');

const messages = require('./bin/messages');

const { exit } = process,
      { pathUtilities, fileSystemUtilities } = necessary,
      { BABEL_CORE_NOT_INSTALLED } = messages,
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
      fileName = 'example.js',
      absoluteFilePath = path.resolve(sourceDirectoryPath, fileName),
      fileContent = readFile(absoluteFilePath),
      source = fileContent, ///
      sourceMaps = 'inline',
      options = {
        sourceMaps
      };

transform(source, options, (error, result) => {
  const { code } = result,
        absoluteFilePath = path.resolve(targetDirectoryPath, fileName),
        absoluteDirectoryPath = pathWithoutBottommostNameFromPath(absoluteFilePath),  ///
        fileContent = code, ///
        directoryExists = checkDirectoryExists(absoluteDirectoryPath);

  if (!directoryExists) {
    createDirectory(absoluteDirectoryPath);
  }

  writeFile(absoluteFilePath, fileContent);
});
