'use strict';

const chokidar = require('chokidar');

const messages = require('../messages');

const { ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES } = messages;

function retrieveFilePathsCallback(proceed, abort, context) {
  const { sourceDirectoryPath } = context,
        globPattern = `${sourceDirectoryPath}/**/*.js`,
        filePaths = [],
        watcher = chokidar.watch(globPattern);

  watcher.on('add', (path) => {
    const filePath = filePathFromPathAndSourceDirectoryPath(path, sourceDirectoryPath);

    filePaths.push(filePath);
  });

  watcher.on('ready', () => {
    watcher.close().then(() => {
      const { entryFilePath } = context;

      if (entryFilePath) {
        const filePathsIncludesEntryFilePath = filePaths.includes(entryFilePath);

        if (!filePathsIncludesEntryFilePath) {
          console.log(ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES);

          abort();

          return;
        }
      }

      Object.assign(context, {
        filePaths
      });

      proceed();
    });
  });
}

module.exports = retrieveFilePathsCallback;

function filePathFromPathAndSourceDirectoryPath(path, sourceDirectoryPath) {
  const delimiterLength = '/'.length,
        sourceDirectoryPathLength = sourceDirectoryPath.length,
        filePath = path.substring(sourceDirectoryPathLength + delimiterLength);

  return filePath;
}