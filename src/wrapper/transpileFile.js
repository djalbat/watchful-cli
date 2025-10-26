"use strict";

import child_process from "child_process";

import { MESSAGE, PROCESS_TRANSPILE_FILE } from "../constants";

export default class TranspileFileWrapper {
  constructor(process, callback, parameters) {
    this.process = process;
    this.callback = callback;
    this.parameters = parameters;
  }

  getProcess() {
    return this.process;
  }

  getCallback() {
    return this.callback;
  }

  setParameters(parameters) {
    this.parameters = parameters;
  }

  getParameters() {
    return this.parameters;
  }

  send(filePath) {
    this.process.send(filePath);
  }

  messageHandler(success) {
    const transpileFileWrapper = this;  ///

    this.callback(transpileFileWrapper, success);
  }

  static fromCallback(callback, context) {
    const { debug, quietly, transpiler, sourceDirectoryPath, targetDirectoryPath } = context;

    context = { ///
      debug,
      quietly,
      transpiler,
      sourceDirectoryPath,
      targetDirectoryPath
    }

    const contextString = JSON.stringify(context),
          args = [
            contextString
          ],
          process = child_process.fork(require.resolve(PROCESS_TRANSPILE_FILE), args),
          parameters = null,
          transpileFileWrapper = new TranspileFileWrapper(process, callback, parameters);

    process.on(MESSAGE, (message) => transpileFileWrapper.messageHandler(message));

    return transpileFileWrapper;
  }
}
