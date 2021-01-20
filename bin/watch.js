"use strict";

const chokidar = require("chokidar");

const Queue = require("./queue"),
      events = require("./events"),
      constants = require("./constants"),
      pathUtilities = require("./utilities/path"),
      BundleFilesTask = require("./task/bundleFiles"),
      handlerUtilities = require("./utilities/handler"),
      metricsUtilities = require("./utilities/metrics");

const { ALL_EVENT, READY_EVENT } = events,
      { SOURCE_DIRECTORY_WATCH_PATTERN } = constants,
      { eventHandler, queueEmptyHandler } = handlerUtilities,
      { startSecondsMetric, endSecondsMetric } = metricsUtilities,
      { isPathFullQualifiedPath, pathFromFullyQualifiedPath } = pathUtilities;

function watch(context) {
  const { quietly, metrics, sourceDirectoryPath } = context,
        watchPattern = `${sourceDirectoryPath}${SOURCE_DIRECTORY_WATCH_PATTERN}`,
        watcher = chokidar.watch(watchPattern),
        queue = Queue.fromEmptyHandler((previousTask) => {
          if (previousTask instanceof BundleFilesTask) {
            return;
          }

          if (metrics) {
            const seconds = endSecondsMetric(context);

            console.log(`Transpiled files in ${seconds} seconds.`);
          }

          queueEmptyHandler(queue, context);
        });

  watcher.on(READY_EVENT, () => {
    if (!quietly) {
      console.log(`Watching '${watchPattern}'.`);
    }

    watcher.on(ALL_EVENT, (event, path) => {
      const pathFullyQualifiedPath = isPathFullQualifiedPath(path);

      if (pathFullyQualifiedPath) {
        const fullyQualifiedPath = path;  ///

        path = pathFromFullyQualifiedPath(fullyQualifiedPath);
      }

      if (metrics) {
        const empty = queue.isEmpty();

        if (empty) {
          startSecondsMetric(context);
        }
      }

      eventHandler(event, path, queue, context);
    });
  });
}

module.exports = watch;
