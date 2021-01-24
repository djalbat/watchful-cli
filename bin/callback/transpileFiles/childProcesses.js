"use strict";

const necessary = require("necessary"),
      child_process = require("child_process");

const constants = require("../../constants"),
      metricsUtilities = require("../../utilities/metrics");

const { asynchronousUtilities } = necessary,
      { MESSAGE } = constants,
      { repeatedly } = asynchronousUtilities,
      { updateCountMetric } = metricsUtilities;

function childProcessesTranspileFilesCallback(done, context) {
  const { filePaths } = context,
        filePathsLength = filePaths.length;

  repeatedly(transpileFileChildProcessCallback, filePathsLength, done, context);
}

module.exports = childProcessesTranspileFilesCallback;

function transpileFileChildProcessCallback(next, done ,context, index) {
  const { quietly, filePaths, babelCorePath, babelOptions, sourceDirectoryPath, targetDirectoryPath } = context,
        filePath = filePaths[index],
        childContext = {
          quietly,
          babelCorePath,
          babelOptions,
          sourceDirectoryPath,
          targetDirectoryPath
        },
        childContextString = JSON.stringify(childContext),
        parameters = [
          filePath,
          childContextString
        ],
        childProcess = child_process.fork(require.resolve("../../childProcess/transpileFile"), parameters);

  childProcess.on(MESSAGE, (message) => {
    updateCountMetric(context);

    next();
  });
}
