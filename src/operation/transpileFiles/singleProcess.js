"use strict";

import { asynchronousUtilities } from "necessary";

import transpileFile from "../../transpileFile";

const { updateCountMetric } = require("../../utilities/metrics");

const { forEach } = asynchronousUtilities;

export default function singleProcessTranspileFilesOperation(done, context) {
  const { filePaths } = context;

  forEach(filePaths, transpileFileOperation, done, context);
}

function transpileFileOperation(filePath, next, done, context) {
  transpileFile(filePath, context, (success) => {
    if (success) {
      updateCountMetric(context);
    }

    next();
  });
}
