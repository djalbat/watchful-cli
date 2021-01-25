"use strict";

const TranspileFileFrame = require("../../frame/transpileFile");

function childProcessesTranspileFilesCallback(done, context) {
  const { filePaths, childProcessesLength } = context,
        filePathsLength = filePaths.length,
        transpileFileFrames = [];

  Object.assign(context, {
    transpileFileFrames
  });

  for (let count = 0; count < childProcessesLength; count++) {
    const transpileFileFrame = TranspileFileFrame.fromNext(next, context);

    transpileFileFrames.push(transpileFileFrame);
  }

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
}

module.exports = childProcessesTranspileFilesCallback;
