"use strict";

const fs = require("fs");

const { characters, pathUtilities, fileSystemUtilities } = require("necessary");

const { W_PLUS } = require("../constants"),
      { pathWithoutBottommostNameFromPath } = require("../utilities/path");

const { concatenatePaths } = pathUtilities,
      { openSync, writeSync, rmdirSync, unlinkSync } = fs,
      { readDirectory, isEntryDirectory, createDirectory } = fileSystemUtilities;

const { PERIOD_CHARACTER } = characters;

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

  if ((filePathWithoutBottommostName !== PERIOD_CHARACTER) && (filePathWithoutBottommostName !== null)) {
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
    entryPath = concatenatePaths(directoryPath, entryPath);  ///

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
