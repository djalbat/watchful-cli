"use strict";

const child_process = require("child_process");

const constants = require("../constants");

const { MESSAGE } = constants;

class TranspileFileFrame {
  constructor(childProcess, callback) {
    this.childProcess = childProcess;
    this.callback = callback;
  }

  send(filePath) {
    this.childProcess.send(filePath);
  }

  messageHandler(message) {
    const transpileFileFrame = this;  ///

    this.callback(transpileFileFrame);
  }

  static fromCallback(callback, context) {
    const { quietly, babelOptions,  babelCorePath, sourceDirectoryPath, targetDirectoryPath } = context,
          childContext = {
            quietly,
            babelOptions,
            babelCorePath,
            sourceDirectoryPath,
            targetDirectoryPath
          },
          childContextString = JSON.stringify(childContext),
          parameters = [
            childContextString
          ],
          childProcess = child_process.fork(require.resolve("../childProcess/transpileFile"), parameters),
          transpileFileFrame = new TranspileFileFrame(childProcess, callback);

    childProcess.on(MESSAGE, (message) => transpileFileFrame.messageHandler(message));

    return transpileFileFrame;
  }
}

module.exports = TranspileFileFrame;
