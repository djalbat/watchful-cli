'use strict';

const path = require('path');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { ENTRY_FILE_NOT_INCLUDED } = messages,
      { readDirectory, isEntryDirectory } = fileSystemUtilities;

function retrieveFilePathsCallback(proceed, abort, context) {
  const { sourceDirectoryPath, entryFilePath } = context,
        filePaths = retrieveFilePaths(sourceDirectoryPath),
        filePathsIncludesEntryFilePath = filePaths.includes(entryFilePath);

  if (!filePathsIncludesEntryFilePath) {
    console.log(ENTRY_FILE_NOT_INCLUDED);

    abort();

    return;
  }

  Object.assign(context, {
    filePaths
  });

  proceed();
}

module.exports = retrieveFilePathsCallback;

function retrieveFilePaths(sourceDirectoryPath, directoryPath = '.', filePaths = []) {
  const absoluteDirectoryPath = path.resolve(sourceDirectoryPath, directoryPath),
        entryPaths = readDirectory(absoluteDirectoryPath);

  entryPaths.forEach((entryPath) => {
    entryPath = `${directoryPath}/${entryPath}`;  ///

    const absoluteEntryPath = path.resolve(sourceDirectoryPath, entryPath),
          entryDirectory = isEntryDirectory(absoluteEntryPath);

    if (entryDirectory) {
      directoryPath = entryPath;  ///

      retrieveFilePaths(sourceDirectoryPath, directoryPath, filePaths);
    } else {
      const filePath = entryPath; ///

      filePaths.push(filePath);
    }
  });

  return filePaths;
}
