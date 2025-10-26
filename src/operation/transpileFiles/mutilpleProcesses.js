"use strict";

import TranspileFileWrapper from "../../wrapper/transpileFile";

import { updateCountMetric } from "../../utilities/metrics";

export default function multipleProcessesTranspileFilesOperation(done, context) {
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

  function callback(transpileFileWrapper, success) {
    if (success) {
      updateCountMetric(context);
    }

    transpileFileWrappers.push(transpileFileWrapper);

    next();
  }

  for (let count = 0; count < length; count++) {
    next();
  }
}
