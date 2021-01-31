"use strict";

const chokidar = require("chokidar");

const events = require("./events"),
      constants = require("./constants"),
      pathUtilities = require("./utilities/path"),
      BundleFilesTask = require("./task/bundleFiles"),
      handlerUtilities = require("./utilities/handler"),
      metricsUtilities = require("./utilities/metrics"),
      SingleProcessQueue = require("./queue/singleProcess"),
      MultipleProcessesQueue = require("./queue/multipleProcesses"),
      incrementalWrappersUtilities = require("./utilities/wrappers/incremental");

const { ALL_EVENT, READY_EVENT } = events,
      { SOURCE_DIRECTORY_WATCH_PATTERN } = constants,
      { eventHandler, queueEmptyHandler } = handlerUtilities,
      { createIncrementalTranspileFileWrappers } = incrementalWrappersUtilities,
      { isPathFullQualifiedPath, pathFromFullyQualifiedPath } = pathUtilities,
      { startCountMetric, startSecondsMetric, endCountMetric, endSecondsMetric } = metricsUtilities;

function watch(context) {
  const { quietly, metrics, processesLength, sourceDirectoryPath } = context,
        watchPattern = `${sourceDirectoryPath}${SOURCE_DIRECTORY_WATCH_PATTERN}`,
        watcher = chokidar.watch(watchPattern);

  let run = null,
      Queue;

  if (processesLength < 2) {
    Queue = SingleProcessQueue; ///
  } else {
    Queue = MultipleProcessesQueue; ///

    run = createIncrementalTranspileFileWrappers(context);
  }

  const queue = Queue.fromEmptyHandler((previousTask) => {
    if (previousTask instanceof BundleFilesTask) {
      return;
    }

    if (metrics) {
      const count = endCountMetric(context),
            seconds = endSecondsMetric(context);

      console.log(`Transpiled ${count} files in ${seconds} seconds.`);
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
          startCountMetric(context);
          startSecondsMetric(context);
        }
      }

      eventHandler(event, run, path, queue, context);
    });
  });
}

module.exports = watch;
