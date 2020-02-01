#!/usr/bin/env node

const path = require('path'),
      necessary = require('necessary');

const messages = require('../messages');

const { createWriteStream } = fa,
      { BROWSERIFY_NOT_INSTALLED } = messages,
      { pathUtilities, fileSystemUtilities } = necessary,
      { pathWithoutBottommostNameFromPath } = pathUtilities,
      { createDirectory, checkDirectoryExists } = fileSystemUtilities;

function browserifyCallback(proceed, abort, context) {
  let browserify;

  try {
    browserify = require(path.resolve('./node_modules/browserify'));
  } catch (error) {
    console.log(BROWSERIFY_NOT_INSTALLED);

    abort();
  }

  const bundler = browserify(), ///
        { entryFileName, bundleFilePath, targetDirectoryPath } = context,
        outputFileName = entryFileName, ///
        outputFilePath = path.resolve(targetDirectoryPath, outputFileName);

  bundler.add(outputFilePath);

  createParentDirectory(bundleFilePath);

  const bundleStream = createWriteStream(path.resolve(bundleFilePath));

  bundler.bundle().pipe(bundleStream);

  proceed();
}

module.exports = browserifyCallback;

function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath),
        parentDirectoryPath = filePathWithoutBottommostName,  ///
        parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

  if (!parentDirectoryExists) {
    createDirectory(parentDirectoryPath);
  }
}
