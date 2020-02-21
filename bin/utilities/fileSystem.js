'use strict';

const fs = require('fs'),
      necessary = require('necessary');

const { createWriteStream } = fs,
      { pathUtilities, fileSystemUtilities } = necessary,
      { pathWithoutBottommostNameFromPath } = pathUtilities,
      { createDirectory, checkDirectoryExists } = fileSystemUtilities;

function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath),
      parentDirectoryPath = filePathWithoutBottommostName,  ///
      parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

  if (!parentDirectoryExists) {
    createDirectory(parentDirectoryPath);
  }
}

module.exports = Object.assign(fileSystemUtilities, {
  createWriteStream,
  createParentDirectory
});
