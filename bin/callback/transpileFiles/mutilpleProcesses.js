"use strict";

const metricsUtilities = require("../../utilities/metrics"),
      TranspileFileWrapper = require("../../wrapper/transpileFile");

const { updateCountMetric } = metricsUtilities;

function multipleProcessesTranspileFilesCallback(done, context) {
  const { filePaths, processesLength } = context,
        filePathsLength = filePaths.length,
        transpileFileWrappers = [],
        length = Math.min(filePathsLength, processesLength);

  for (let count = 0; count < length; count++) {
    const transpileFileWrapper = TranspileFileWrapper.fromCallback(callback, context);

    transpileFileWrappers.push(transpileFileWrapper);
  }

  Object.assign(context, {
    transpileFileWrappers
  });

  let index = 0;

  function next() {
    if (index === filePathsLength) {
      const transpileFileWrappersLength = transpileFileWrappers.length;

      if (transpileFileWrappersLength === length) {
        done();
      }

      return;
    }

    const filePath = filePaths[index++],
          transpileFileWrapper = transpileFileWrappers.pop();

    transpileFileWrapper.send(filePath);
  }

  function callback(transpileFileWrapper) {
    transpileFileWrappers.push(transpileFileWrapper);

    updateCountMetric(context);

    next();
  }

  for (let count = 0; count < length; count++) {
    next();
  }
}

module.exports = multipleProcessesTranspileFilesCallback;
