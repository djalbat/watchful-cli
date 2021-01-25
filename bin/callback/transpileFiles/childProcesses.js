"use strict";

const metricsUtilities = require("../../utilities/metrics"),
      TranspileFileFrame = require("../../frame/transpileFile");

const { updateCountMetric } = metricsUtilities;

function childProcessesTranspileFilesCallback(done, context) {
  const { filePaths, childProcessesLength } = context,
        transpileFileFrames = [],
        filePathsLength = filePaths.length,
        length = Math.min(filePathsLength, childProcessesLength);

  for (let count = 0; count < length; count++) {
    const transpileFileFrame = TranspileFileFrame.fromCallback(callback, context);

    transpileFileFrames.push(transpileFileFrame);
  }

  Object.assign(context, {
    transpileFileFrames
  });

  let index = 0;

  for (let count = 0; count < childProcessesLength; count++) {
    next();
  }

  function next() {
    if (index === filePathsLength) {
      const transpileFileFramesLength = transpileFileFrames.length;

      if (transpileFileFramesLength === childProcessesLength) {
        done();
      }

      return;
    }

    const filePath = filePaths[index++],
          transpileFileFrame = transpileFileFrames.pop();

    transpileFileFrame.send(filePath);
  }

  function callback(transpileFileFrame) {
    transpileFileFrames.push(transpileFileFrame);

    updateCountMetric(context);

    next();
  }
}

module.exports = childProcessesTranspileFilesCallback;
