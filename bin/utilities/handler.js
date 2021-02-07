"use strict";

const events = require("../events"),
      DeleteFileTask = require("../task/deleteFile"),
      BundleFilesTask = require("../task/bundleFiles"),
      TranspileFileTask = require("../task/transpileFile"),
      DeleteDirectoryTask = require("../task/deleteDirectory");

const { ADD_EVENT, CHANGE_EVENT, UNLINK_EVENT, UNLINK_DIR_EVENT } = events;

function eventHandler(queue, event, path, context) {
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

function queueEmptyHandler(queue, context) {
  const { wait } = context;

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
