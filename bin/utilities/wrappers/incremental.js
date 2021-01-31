"use strict";

const metricsUtilities = require("../../utilities/metrics"),
      wrappersUtilities = require("../../utilities/wrappers");

const { updateCountMetric } = metricsUtilities,
      { createTranspileFileWrappers } = wrappersUtilities;

function createIncrementalTranspileFileWrappers(context) {
  const transpileFileWrappers = createTranspileFileWrappers(callback, context);

  function run(filePath, callback) {
    let running = false;

    const transpileFileWrapper = transpileFileWrappers.pop() || null;

    if (transpileFileWrapper !== null) {
      const parameters = {
        callback
      };

      transpileFileWrapper.setParameters(parameters);

      transpileFileWrapper.send(filePath);

      running = true;
    }

    return running;
  }

  function callback(transpileFileWrapper) {
    const parameters = transpileFileWrapper.getParameters(),
          { callback } = parameters;

    transpileFileWrappers.push(transpileFileWrapper);

    updateCountMetric(context);

    callback();
  }

  return run;
}

module.exports = {
  createIncrementalTranspileFileWrappers
};
