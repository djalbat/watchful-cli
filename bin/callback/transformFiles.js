"use strict";

const necessary = require("necessary");

const messages = require("../messages"),
      metricsUtilities = require("../utilities/metrics"),
      transformUtilities = require("../utilities/transform");

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { transformFile } = transformUtilities,
      { startMetric, endMetric } = metricsUtilities,
      { TRANSPILED_METRIC_MESSAGE } = messages;

function transformFilesCallback(proceed, abort, context) {
  const { filePaths } = context,
        filePathsLength = filePaths.length,
        length = filePathsLength, ///
        count = 0;

  Object.assign(context, {
    count,
  });

  startMetric(context);

  forEach(filePaths, transformFileCallback, done, context);

  function done() {
    const { count } = context,
          success = (count === length);

    if (success) {
      const message = TRANSPILED_METRIC_MESSAGE;

      endMetric(context, message);
    }

    delete context.count;

    success ?
      proceed() :
        abort();
  }
}

module.exports = transformFilesCallback;

function transformFileCallback(filePath, next, done, context) {
  transformFile(filePath, context, () => {
    let { count } = context;

    count++;

    Object.assign(context, {
      count
    });

    next();
  });
}
