"use strict";

const Task = require("../../task"),
      pathUtilities = require("../../utilities/path");

const { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

class MultipleProcessesTranspileFileTask extends Task {
  isRunning() {
    return this.running;
  }

  setRunning(running) {
    this.running = running;
  }

  static fromRunAndPath(run, path, context) {
    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          method = transpileFileMethod, ///
          running = false,
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath),
          multipleProcessesTranspileFileTask = new MultipleProcessesTranspileFileTask(method, run, running, filePath, context, () => {
            multipleProcessesTranspileFileTask.setRunning(running);
          });

    return multipleProcessesTranspileFileTask;
  }
}

module.exports = MultipleProcessesTranspileFileTask;

function transpileFileMethod(run, running, filePath, context, callback) {
  this.running = run(filePath, () => {
    callback();
  });
}
