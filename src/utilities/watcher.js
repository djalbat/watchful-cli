"use strict";

import { watch as watchEx } from "chokidar";

import { JAVASCRIPT_FILE_EXTENSION } from "../constants";

export function watcherFromSourceDirectoryPath(sourceDirectoryPath, ignoreInitial = false) {
  const ignored = (path, stats) => {
          let ignored = false;

          const file = stats?.isFile();

          if (file) {
            const pathJavaScriptFilePath = path.endsWith(JAVASCRIPT_FILE_EXTENSION);

            if (!pathJavaScriptFilePath) {
              ignored = true;
            }
          }

          return ignored;
        },
        options = {
          ignored,
          ignoreInitial
        },
        watcher = watchEx(sourceDirectoryPath, options);

  return watcher;
}
