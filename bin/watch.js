'use strict';

const chokidar = require('chokidar');

const Queue = require('./queue'),
      events = require('./events'),
      constants = require('./constants'),
      pathUtilities = require('./utilities/path'),
      DeleteFileTask = require('./task/deleteFile'),
      BundleFilesTask = require('./task/bundleFiles'),
      TransformFileTask = require('./task/transformFile'),
      DeleteDirectoryTask = require('./task/deleteDirectory');

const { DEFAULT_GLOB_PATTERN } = constants,
      { isPathFullQualifiedPath, pathFromFullyQualifiedPath } = pathUtilities,
      { ADD_EVENT, CHANGE_EVENT, UNLINK_EVENT, UNLINK_DIR_EVENT } = events;

function watch(context) {
  const { sourceDirectoryPath } = context,
        pattern = `${sourceDirectoryPath}${DEFAULT_GLOB_PATTERN}`,
        watcher = chokidar.watch(pattern),
        queue = Queue.fromEmptyHandler(queueEmptyHandler);

  watcher.on('ready', () => {
    watcher.on('all', (event, path) => {
      const pathFullyQualifiedPath = isPathFullQualifiedPath(path);

      if (pathFullyQualifiedPath) {
        const fullyQualifiedPath = path;  ///

        path = pathFromFullyQualifiedPath(fullyQualifiedPath);
      }

      eventHandler(event, path, queue, context);
    });
  });

  function queueEmptyHandler(previousTask) {
    if (previousTask instanceof BundleFilesTask) {
      return;
    }

    const bundleFilesTask = BundleFilesTask.fromContext(context);

    if (bundleFilesTask !== null) {
      queue.addTask(bundleFilesTask);
    }
  }
}

module.exports = watch;

function addOrChangeEventHandler(path, queue, context) {
  const transformFileTask = TransformFileTask.fromPathAndContext(path, context);

  if (transformFileTask !== null) {
    queue.addTask(transformFileTask);
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
