"use strict";

const batchWrappersUtilities = require("../../utilities/wrappers/batch");

const { createBatchTranspileFileWrappers } = batchWrappersUtilities;

function multipleProcessesTranspileFilesCallback(done, context) {
  const run = createBatchTranspileFileWrappers(done, context),
        { transpileFileWrappers } = context,
        transpileFileWrappersLength = transpileFileWrappers.length;

  for (let count = 0; count < transpileFileWrappersLength; count++) {
    run();
  }
}

module.exports = multipleProcessesTranspileFilesCallback;
