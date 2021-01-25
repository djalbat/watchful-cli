"use strict";

const child_process = require("child_process");

const constants = require("../constants"),
      metricsUtilities = require("../utilities/metrics");

const { MESSAGE } = constants,
      { updateCountMetric } = metricsUtilities;

class TranspileFileFrame {
  constructor(childProcess) {
    this.childProcess = childProcess;
  }

  send(filePath) { this.childProcess.send(filePath);}

  callback(next, context) {
    const { transpileFileFrames } = context,
          transpileFileFrame = this;  ///

    transpileFileFrames.push(transpileFileFrame);

    updateCountMetric(context);

    next();
  }

  static fromNext(next, context) {
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
          transpileFileFrame = new TranspileFileFrame(childProcess);

    childProcess.on(MESSAGE, (message) => transpileFileFrame.callback(next, context));

    return transpileFileFrame;
  }
}

module.exports = TranspileFileFrame;
