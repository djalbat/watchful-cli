"use strict";

const wrappersUtilities = require("../../utilities/wrappers");

const { createTranspileFileWrappers } = wrappersUtilities;

function multipleProcessesTranspileFilesCallback(done, context) {
  const next = createTranspileFileWrappers(done, context),
        { transpileFileWrappers } = context,
        transpileFileWrappersLength = transpileFileWrappers.length;

  for (let count = 0; count < transpileFileWrappersLength; count++) {
    next();
  }
}

module.exports = multipleProcessesTranspileFilesCallback;
