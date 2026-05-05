"use strict";

import Queue from "./queue";

import { ALL_EVENT, READY_EVENT } from "./events";
import { watcherFromSourceDirectoryPath } from "./utilities/watcher";
import { eventHandler, queueEmptyHandler } from "./utilities/watch";

export default function watch(context) {
  const { quietly, sourceDirectoryPath } = context,
        ignoreInitial = true,
        watcher = watcherFromSourceDirectoryPath(sourceDirectoryPath, ignoreInitial),
        queue = Queue.fromEmptyHandler((previousTask) => {
          queueEmptyHandler(queue, previousTask, context);
        });

  watcher.on(READY_EVENT, () => {
    if (!quietly) {
      console.log(`Watching the '${sourceDirectoryPath}' directory...`);
    }
  });

  watcher.on(ALL_EVENT, (event, path) => {
    eventHandler(queue, event, path, context);
  });
}
