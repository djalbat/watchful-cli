"use strict";

const chokidar = require("chokidar");

const Queue = require("./queue"),
      events = require("./events"),
      constants = require("./constants"),
      watchUtilities = require("./utilities/watch");

const { ALL_EVENT, READY_EVENT } = events,
      { SOURCE_DIRECTORY_WATCH_PATTERN } = constants,
      { eventHandler, queueEmptyHandler } = watchUtilities;

function watch(context) {
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

module.exports = watch;
