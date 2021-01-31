"use strict";
"use strict";

const metricsUtilities = require("../utilities/metrics"),
      TranspileFileWrapper = require("../wrapper/transpileFile");

const { updateCountMetric } = metricsUtilities;

function createTranspileFileWrappers(done, context) {
  const { filePaths, processesLength } = context,
        transpileFileWrappers = [],
        filePathsLength = filePaths.length,
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

      if (transpileFileWrappersLength === processesLength) {
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

  return next;
}

module.exports = {
  createTranspileFileWrappers
};
