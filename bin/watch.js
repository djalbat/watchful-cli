'use strict';

const chokidar = require('chokidar');

const Task = require('./task'),
      Queue = require('./queue'),
      events = require('./events'),
      pathUtilities = require('./utilities/path'),
      bundleUtilities = require('./utilities/bundle'),
      transformUtilities = require('./utilities/transform'),
      fileSystemUtilities = require('./utilities/fileSystem');

const { cwd } = process,
      { bundleFiles } = bundleUtilities,
      { transformFile } = transformUtilities,
      { ADD_EVENT, CHANGE_EVENT, UNLINK_EVENT, UNLINK_DIR_EVENT } = events,
      { combinePaths, pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities,
      { deleteFile, deleteDirectory, checkFileExists, checkDirectoryExists } = fileSystemUtilities;

function watch(context) {
  const { sourceDirectoryPath } = context,
        pattern = `${sourceDirectoryPath}/**/*.js`,
        watcher = chokidar.watch(pattern),
        queue = Queue.fromNothing();

  watcher.on('ready', () => {
    watcher.on('all', (event, path) => eventHandler(event, path, queue, context));
  });
}

module.exports = watch;

function addOrChangeEventHandler(path, queue, context) {
  const { sourceDirectoryPath } = context,
        sourceFilePath = path,  ///
        filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath),  ///
        task = new Task(transformFile, filePath, context, () => {
          console.log(`Transformed '${sourceFilePath}'.`);
        });

  queue.addTask(task);
}

function unlinkDirEventHandler(path, queue, context) {
  const { sourceDirectoryPath, targetDirectoryPath } = context,
        currentWorkingDirectoryPath = cwd(),
        deletedSourceDirectoryPath = pathWithoutDirectoryPathFromPathAndDirectoryPath(path, currentWorkingDirectoryPath),  ///
        deletedDirectoryPath = pathWithoutDirectoryPathFromPathAndDirectoryPath(deletedSourceDirectoryPath, sourceDirectoryPath),
        deletedTargetDirectoryPath = combinePaths(targetDirectoryPath, deletedDirectoryPath),
        deletedTargetDirectoryExists = checkDirectoryExists(deletedTargetDirectoryPath);

  if (deletedTargetDirectoryExists) {
    const task = new Task(deleteDirectory, deletedTargetDirectoryPath, () => {
      console.log(`Deleted '${deletedTargetDirectoryPath}'.`);
    });

    queue.addTask(task);
  }
}

function unlinkEventHandler(path, queue, context) {
  const { sourceDirectoryPath, targetDirectoryPath } = context,
        sourceFilePath = path,  ///
        filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath),  ///
        deletedTargetFilePath = combinePaths(targetDirectoryPath, filePath),
        deletedTargetFileExists = checkFileExists(deletedTargetFilePath);

  if (deletedTargetFileExists) {
    const task = new Task(deleteFile, deletedTargetFilePath, () => {
      console.log(`Deleted '${deletedTargetFilePath}'.`);
    });

    queue.addTask(task);
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
