"use strict";

const necessary = require("necessary");

const metricsUtilities = require("../utilities/metrics"),
      transpileUtilities = require("../utilities/transpile");

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { transpileFile } = transpileUtilities,
      { startMetric, endMetric } = metricsUtilities;

function transpileFilesCallback(proceed, abort, context) {
  const { filePaths } = context,
        filePathsLength = filePaths.length,
        length = filePathsLength, ///
        count = 0;

  Object.assign(context, {
    count,
  });

  startMetric(context);

  forEach(filePaths, transpileFileCallback, done, context);

  function done() {
    const { count } = context,
          success = (count === length);

    if (success) {
      const seconds = endMetric(context);

      console.log(`Transpiled files in ${seconds} seconds.`);
    }

    delete context.count;

    success ?
      proceed() :
        abort();
  }
}

module.exports = transpileFilesCallback;

function transpileFileCallback(filePath, next, done, context) {
  transpileFile(filePath, context, () => {
    let { count } = context;

    count++;

    Object.assign(context, {
      count
    });

    next();
  });
}
