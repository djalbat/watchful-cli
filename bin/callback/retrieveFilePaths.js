"use strict";

const chokidar = require("chokidar");

const messages = require("../messages"),
      pathUtilities = require("../utilities/path");

const { ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES } = messages,
      { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

function retrieveFilePathsCallback(proceed, abort, context) {
  const { sourceDirectoryPath } = context,
        globPattern = `${sourceDirectoryPath}/**/*.js`,
        filePaths = [],
        watcher = chokidar.watch(globPattern);

  watcher.on("add", (path) => {
    const sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    filePaths.push(filePath);
  });

  watcher.on("ready", () => {
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
