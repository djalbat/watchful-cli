#!/usr/bin/env node

const fs = require('fs'),
      path = require('path'),
      necessary = require('necessary');

const messages = require('../messages');

const { exit } = process,
      { createWriteStream } = fs,
      { pathUtilities, fileSystemUtilities } = necessary,
      { pathWithoutBottommostNameFromPath } = pathUtilities,
      { BABEL_CORE_NOT_INSTALLED, BROWSERIFY_NOT_INSTALLED } = messages,
      { readFile, writeFile, createDirectory, checkDirectoryExists } = fileSystemUtilities;

let babel;

try {
  babel = require(path.resolve('./node_modules/@babel/core'));
} catch (error) {
  console.log(BABEL_CORE_NOT_INSTALLED);

  exit(1);
}

let browserify;

try {
  browserify = require(path.resolve('./node_modules/browserify'));
} catch (error) {
  console.log(BROWSERIFY_NOT_INSTALLED);

  exit(1);
}

const { transform } = babel;

const sourceDirectoryPath = 'es6',
      targetDirectoryPath = 'lib',
      bundleFilePath = 'public/bundle.js',
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

  const bundler = browserify(); ///

  bundler.add(outputFilePath);

  createParentDirectory(bundleFilePath);

  const bundleStream = createWriteStream(path.resolve(bundleFilePath));

  bundler.bundle().pipe(bundleStream);
});

function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath),
        parentDirectoryPath = filePathWithoutBottommostName,  ///
        parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

  if (!parentDirectoryExists) {
    createDirectory(parentDirectoryPath);
  }
}
