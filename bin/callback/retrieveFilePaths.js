"use strict";

const chokidar = require("chokidar");

const events = require("../events"),
      messages = require("../messages"),
      pathUtilities = require("../utilities/path");

const { ADD_EVENT, READY_EVENT } = events,
      { ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES } = messages,
      { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

function retrieveFilePathsCallback(proceed, abort, context) {
  const { sourceDirectoryPath } = context,
        globPattern = `${sourceDirectoryPath}/**/*.js`,
        filePaths = [],
        watcher = chokidar.watch(globPattern);

  watcher.on(ADD_EVENT, (path) => {
    const sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    filePaths.push(filePath);
  });

  watcher.on(READY_EVENT, () => {
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
