"use strict";

const fs = require("fs"),
      necessary = require("necessary");

const pathUtilities = require("../utilities/path");

const { fileSystemUtilities } = necessary,
      { pathWithoutBottommostNameFromPath } = pathUtilities,
      { openSync, writeSync, rmdirSync, unlinkSync, unlink } = fs,
      { readDirectory, isEntryDirectory, createDirectory, checkDirectoryExists } = fileSystemUtilities;

function deleteFile(filePath, done) {
  unlinkSync(filePath);

  done && done(); ///
}

function writeFileEx(filePath, buffer) {
  const file = openSync(filePath, "w+");

  writeSync(file, buffer);
}

function deleteDirectory(directoryPath, done) {
  cleanDirectory(directoryPath);

  rmdirSync(directoryPath);

  done && done(); ///
}

function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath);

  if ((filePathWithoutBottommostName !== ".") && (filePathWithoutBottommostName !== null)) {
    const parentDirectoryPath = filePathWithoutBottommostName,  ///
          parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

    if (!parentDirectoryExists) {
      createDirectory(parentDirectoryPath);
    }
  }
}

module.exports = Object.assign(fileSystemUtilities, {
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
