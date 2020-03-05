'use strict';

const fs = require('fs');

const pathUtilities = require('../utilities/path');

const { pathWithoutBottommostNameFromPath } = pathUtilities,
      { openSync, writeSync, rmdirSync, unlinkSync } = fs;

function readFile(filePath, encoding = 'utf8') {
  const options = {
          encoding
        },
        content = fs.readFileSync(filePath, options);

  return content;
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

function deleteFile(filePath, done) {
  unlinkSync(filePath);

  done && done(); ///
}

function writeFileEx(filePath, buffer) {
  const file = openSync(filePath, 'w+');

  writeSync(file, buffer);
}

function readDirectory(directoryPath) {
  const subEntryNames = fs.readdirSync(directoryPath);

  return subEntryNames;
}

function deleteDirectory(directoryPath, done) {
  cleanDirectory(directoryPath);

  rmdirSync(directoryPath);

  done && done(); ///
}

function createDirectory(directoryPath) {
  const directoryPathWithoutBottommostName = pathWithoutBottommostNameFromPath(directoryPath);

  if ((directoryPathWithoutBottommostName !== '.') && (directoryPathWithoutBottommostName !== null)) {
    const parentDirectoryPath = directoryPathWithoutBottommostName,  ///
         parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

    if (!parentDirectoryExists) {
      createDirectory(parentDirectoryPath);
    }
  }

  fs.mkdirSync(directoryPath);
}

function isEntryDirectory(entryPath) {
  const stat = fs.statSync(entryPath),
        entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function checkFileExists(filePath) {
  let fileExists = false;

  const entryPath = filePath, ///
        entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    const entryFile = isEntryFile(entryPath);

    if (entryFile) {
      fileExists = true;
    }
  }

  return fileExists;
}

function checkEntryExists(entryPath) {
  const entryExists = fs.existsSync(entryPath);

  return entryExists;
}

function checkDirectoryExists(directoryPath) {
  let directoryExists = false;

  const entryPath = directoryPath, ///
    entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    const entryDirectory = isEntryDirectory(entryPath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
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

module.exports = {
  readFile,
  writeFile,
  deleteFile,
  writeFileEx,
  readDirectory,
  deleteDirectory,
  createDirectory,
  isEntryDirectory,
  checkFileExists,
  checkEntryExists,
  checkDirectoryExists,
  createParentDirectory
};

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
