"use strict";

import chokidar from "chokidar";

import { ADD_EVENT, READY_EVENT } from "../events";
import { ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES_MESSAGE } from "../messages";
import { pathWithoutDirectoryPathFromPathAndDirectoryPath } from "../utilities/path";

export default function retrieveFilePathsOperation(proceed, abort, context) {
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
          console.log(ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES_MESSAGE);

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
