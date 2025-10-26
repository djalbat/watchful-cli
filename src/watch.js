"use strict";

import chokidar from "chokidar";

import Queue from "./queue";

import { ALL_EVENT, READY_EVENT } from "./events";
import { SOURCE_DIRECTORY_WATCH_PATTERN } from "./constants";
import { eventHandler, queueEmptyHandler } from "./utilities/watch";

export default function watch(context) {
  const { quietly, sourceDirectoryPath } = context,
        watchPattern = `${sourceDirectoryPath}${SOURCE_DIRECTORY_WATCH_PATTERN}`,
        watcher = chokidar.watch(watchPattern),
        queue = Queue.fromEmptyHandler((previousTask) => queueEmptyHandler(queue, previousTask, context));

  watcher.on(READY_EVENT, () => {
    if (!quietly) {
      console.log(`Watching '${watchPattern}'.`);
    }

    watcher.on(ALL_EVENT, (event, path) => eventHandler(queue, event, path, context));
  });
}
