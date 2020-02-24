'use strict';

const necessary = require('necessary');

const messages = require('../messages'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { pathUtilities } = necessary,
      { combinePaths } = pathUtilities,
      { ENTRY_FILE_NOT_INCLUDED } = messages,
      { readDirectory, isEntryDirectory } = fileSystemUtilities;

function retrieveFilePathsCallback(proceed, abort, context) {
  let { entryFilePath } = context;

  entryFilePath = guaranteeDelimitedPath(entryFilePath);

  const { sourceDirectoryPath } = context,
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

function retrieveFilePaths(sourceDirectoryPath, subDirectoryPath = '.', filePaths = []) {
  const sourceSubDirectoryPath = combinePaths(sourceDirectoryPath, subDirectoryPath),
        entryPaths = readDirectory(sourceSubDirectoryPath);

  entryPaths.forEach((entryPath) => {
    entryPath = combinePaths(subDirectoryPath, entryPath); ///

    const sourceEntryPath = combinePaths(sourceDirectoryPath, entryPath),
          entryDirectory = isEntryDirectory(sourceEntryPath);

    if (entryDirectory) {
      const subDirectoryPath = entryPath;  ///

      retrieveFilePaths(sourceDirectoryPath, subDirectoryPath, filePaths);
    } else {
      const filePath = entryPath; ///

      filePaths.push(filePath);
    }
  });

  return filePaths;
}

function guaranteeDelimitedPath(path) {
  const pathDelimited = /^(?:\/|.\/|..\/).*/.test();

  path = pathDelimited ?
           path :
            `./${path}`;

  return path;
}
