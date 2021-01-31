"use strict";

const TranspileFileWrapper = require("../wrapper/transpileFile");

function createTranspileFileWrappers(callback, context) {
  const { filePaths, processesLength } = context,
        filePathsLength = filePaths.length,
        length = Math.min(filePathsLength, processesLength),
        transpileFileWrappers = [];

  for (let count = 0; count < length; count++) {
    const transpileFileWrapper = TranspileFileWrapper.fromCallback(callback, context);

    transpileFileWrappers.push(transpileFileWrapper);
  }

  Object.assign(context, {
    transpileFileWrappers
  });

  return transpileFileWrappers;
}

module.exports = {
  createTranspileFileWrappers
};
