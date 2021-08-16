"use strict";

const fs = require("fs");

const { fileSystemUtilities } = require("necessary");

const { W_PLUS, FULL_STOP } = require("../constants"),
      { pathWithoutBottommostNameFromPath } = require("../utilities/path");

const { openSync, writeSync, rmdirSync, unlinkSync } = fs,
      { readDirectory, isEntryDirectory, createDirectory } = fileSystemUtilities;

function deleteFile(filePath, done) {
  unlinkSync(filePath);

  done && done(); ///
}

function writeFileEx(filePath, buffer) {
  const file = openSync(filePath, W_PLUS);

  writeSync(file, buffer);
}

function deleteDirectory(directoryPath, done) {
  cleanDirectory(directoryPath);

  rmdirSync(directoryPath);

  done && done(); ///
}

function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath);

  if ((filePathWithoutBottommostName !== FULL_STOP) && (filePathWithoutBottommostName !== null)) {
    const parentDirectoryPath = filePathWithoutBottommostName;  ///

    createDirectory(parentDirectoryPath);
  }
}

module.exports = Object.assign({}, fileSystemUtilities, {
  deleteFile,
  writeFileEx,
  deleteDirectory,
  createParentDirectory
});

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
