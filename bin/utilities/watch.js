"use strict";

const DeleteFileTask = require("../task/deleteFile"),
      BundleFilesTask = require("../task/bundleFiles"),
      TranspileFileTask = require("../task/transpileFile"),
      DeleteDirectoryTask = require("../task/deleteDirectory");

const { isPathFullQualifiedPath, pathFromFullyQualifiedPath } = require("../utilities/path"),
      { ADD_EVENT, CHANGE_EVENT, UNLINK_EVENT, UNLINK_DIR_EVENT } = require("../events"),
      { startCountMetric, startSecondsMetric, endCountMetric, endSecondsMetric } = require("../utilities/metrics");

function eventHandler(queue, event, path, context) {
  const { metrics } = context,
        pathFullyQualifiedPath = isPathFullQualifiedPath(path);

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

  switch (event) {
    case ADD_EVENT :
    case CHANGE_EVENT :
      addOrChangeEventHandler(queue, path, context);

      break;

    case UNLINK_DIR_EVENT :
      unlinkDirEventHandler(queue, context);

      break;

    case UNLINK_EVENT :
      unlinkEventHandler(queue, path, context);

      break;
  }
}

function queueEmptyHandler(queue, previousTask, context) {
  if (previousTask instanceof BundleFilesTask) {
    return;
  }

  const { wait, metrics } = context;

  if (metrics) {
    const count = endCountMetric(context),
          seconds = endSecondsMetric(context),
          sOrEmpty = (count === 1) ? "" : "s";

    console.log(`Transpiled ${count} file${sOrEmpty} in ${seconds} seconds.`);
  }

  setTimeout(() => {
    const empty = queue.isEmpty();

    if (empty) {
      const bundleFilesTask = BundleFilesTask.fromContext(context);

      if (bundleFilesTask !== null) {
        queue.addTask(bundleFilesTask);
      }
    }
  }, wait);
}

module.exports = {
  eventHandler,
  queueEmptyHandler
}

function addOrChangeEventHandler(queue, path, context) {
  const transpileFileTask = TranspileFileTask.fromPath(path, context);

  if (transpileFileTask !== null) {
    queue.addTask(transpileFileTask);
  }
}

function unlinkDirEventHandler(queue, path, context) {
  const deleteDirectoryTask = DeleteDirectoryTask.fromPath(path, context);

  if (deleteDirectoryTask !== null) {
    queue.addTask(deleteDirectoryTask);
  }
}

function unlinkEventHandler(queue, path, context) {
  const deleteFileTask = DeleteFileTask.fromPath(path, context);

  if (deleteFileTask !== null) {
    queue.addTask(deleteFileTask);
  }
}
