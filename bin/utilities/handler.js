"use strict";

const events = require("../events"),
      DeleteFileTask = require("../task/deleteFile"),
      BundleFilesTask = require("../task/bundleFiles"),
      TranspileFileTask = require("../task/transpileFile"),
      DeleteDirectoryTask = require("../task/deleteDirectory");

const { ADD_EVENT, CHANGE_EVENT, UNLINK_EVENT, UNLINK_DIR_EVENT } = events;

function eventHandler(event, path, queue, context) {
  switch (event) {
    case ADD_EVENT :
    case CHANGE_EVENT :
      addOrChangeEventHandler(path, queue, context);

      break;

    case UNLINK_DIR_EVENT :
      unlinkDirEventHandler(path, queue, context);

      break;

    case UNLINK_EVENT :
      unlinkEventHandler(path, queue, context);

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

function addOrChangeEventHandler(path, queue, context) {
  const transpileFileTask = TranspileFileTask.fromPathAndContext(path, context);

  if (transpileFileTask !== null) {
    queue.addTask(transpileFileTask);
  }
}

function unlinkDirEventHandler(path, queue, context) {
  const deleteDirectoryTask = DeleteDirectoryTask.fromPathAndContext(path, context);

  if (deleteDirectoryTask !== null) {
    queue.addTask(deleteDirectoryTask);
  }
}

function unlinkEventHandler(path, queue, context) {
  const deleteFileTask = DeleteFileTask.fromPathAndContext(path, context);

  if (deleteFileTask !== null) {
    queue.addTask(deleteFileTask);
  }
}
