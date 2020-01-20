#!/usr/bin/env node

const fs = require('fs'),
      path = require('path'),
      necessary = require('necessary'),
      browserify = require('browserify');

const messages = require('./bin/messages');

const { exit, stdout } = process,
      { createWriteStream } = fs,
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

  writeFileAndDirectory(outputFilePath, outputContent);

  const bundler = browserify(); ///

  bundler.add(outputFilePath);

  const bundleStream = createWriteStream(path.resolve(bundleFilePath));

  bundler.bundle().pipe(bundleStream);
});

function writeFileAndDirectory(filePath, content) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath),
        directoryPath = filePathWithoutBottommostName,  ///
        directoryExists = checkDirectoryExists(directoryPath);

  if (!directoryExists) {
    createDirectory(directoryPath);
  }

  writeFile(filePath, content);
}