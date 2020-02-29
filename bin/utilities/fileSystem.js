'use strict';

const fs = require('fs'),
      necessary = require('necessary');

const pathUtilities = require('../utilities/path');

const { unlinkSync, rmdirSync } = fs,
      { fileSystemUtilities } = necessary,
      { pathWithoutBottommostNameFromPath } = pathUtilities,
      { readDirectory, isEntryDirectory, createDirectory, checkDirectoryExists } = fileSystemUtilities;

function cleanDirectory(directoryPath) {
  const entryPaths = readDirectory(directoryPath);

  entryPaths.forEach((entryPath) => {
    entryPath = `${directoryPath}/${entryPath}`;  ///

    const entryDirectory = isEntryDirectory(entryPath);

    if (entryDirectory) {
      const directoryPath = entryPath;  ///

      cleanDirectory(directoryPath);

      deleteDirectory(directoryPath);
    } else {
      const filePath = entryPath; ///

      deleteFile(filePath);
    }
  });
}

function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath);

  if ((filePathWithoutBottommostName !== '.') && (filePathWithoutBottommostName !== null)) {
    const parentDirectoryPath = filePathWithoutBottommostName,  ///
          parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

    if (!parentDirectoryExists) {
      createDirectory(parentDirectoryPath);
    }
  }
}

module.exports = Object.assign(fileSystemUtilities, {
  cleanDirectory,
  createParentDirectory
});

function deleteFile(filePath) {
  unlinkSync(filePath)
}

function deleteDirectory(directoryPath) {
  rmdirSync(directoryPath)
}
