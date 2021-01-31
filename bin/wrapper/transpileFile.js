"use strict";

const child_process = require("child_process");

const constants = require("../constants");

const { MESSAGE } = constants;

class TranspileFileWrapper {
  constructor(process, callback) {
    this.process = process;
    this.callback = callback;
  }

  send(filePath) {
    this.process.send(filePath);
  }

  messageHandler(message) {
    const transpileFileWrapper = this;  ///

    this.callback(transpileFileWrapper);
  }

  static fromCallback(callback, context) {
    const { quietly, babelOptions,  babelCorePath, sourceDirectoryPath, targetDirectoryPath } = context;

    context = { ///
      quietly,
      babelOptions,
      babelCorePath,
      sourceDirectoryPath,
      targetDirectoryPath
    }

    const contextString = JSON.stringify(context),
          parameters = [
            contextString
          ],
          process = child_process.fork(require.resolve("../process/transpileFile"), parameters),
          transpileFileWrapper = new TranspileFileWrapper(process, callback);

    process.on(MESSAGE, (message) => transpileFileWrapper.messageHandler(message));

    return transpileFileWrapper;
  }
}

module.exports = TranspileFileWrapper;
