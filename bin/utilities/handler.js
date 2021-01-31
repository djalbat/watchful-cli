"use strict";

const events = require("../events"),
      DeleteFileTask = require("../task/deleteFile"),
      BundleFilesTask = require("../task/bundleFiles"),
      DeleteDirectoryTask = require("../task/deleteDirectory"),
      SingleProcessTranspileFileTask = require("../task/transpileFile/singleProcess"),
      MultipleProcessesTranspileFileTask = require("../task/transpileFile/multipleProcesses");

const { ADD_EVENT, CHANGE_EVENT, UNLINK_EVENT, UNLINK_DIR_EVENT } = events;

function eventHandler(event, run, path, queue, context) {
  switch (event) {
    case ADD_EVENT :
    case CHANGE_EVENT :
      addOrChangeEventHandler(run, path, queue, context);

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

function addOrChangeEventHandler(run, path, queue, context) {
  const { processesLength } = context,
        transpileFileTask = (processesLength < 2) ?
                              SingleProcessTranspileFileTask.fromPath(path, context) :
                                MultipleProcessesTranspileFileTask.fromRunAndPath(run, path, context);

  queue.addTask(transpileFileTask);
}

function unlinkDirEventHandler(path, queue, context) {
  const deleteDirectoryTask = DeleteDirectoryTask.fromPath(path, context);

  if (deleteDirectoryTask !== null) {
    queue.addTask(deleteDirectoryTask);
  }
}

function unlinkEventHandler(path, queue, context) {
  const deleteFileTask = DeleteFileTask.fromPath(path, context);

  if (deleteFileTask !== null) {
    queue.addTask(deleteFileTask);
  }
}
