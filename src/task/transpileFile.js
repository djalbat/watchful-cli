"use strict";

import Task from "../task";
import transpileFile from '../transpileFile';

import { updateCountMetric } from "../utilities/metrics";
import { pathWithoutDirectoryPathFromPathAndDirectoryPath } from "../utilities/path";

export default class TranspileFileTask extends Task {
  static fromPath(path, context) {
    let transpileFileTask = null;

    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    transpileFileTask = new TranspileFileTask(transpileFile, filePath, context, (success) => {
      if (success) {
        const { metrics } = context;

        if (metrics) {
          updateCountMetric(context);
        }
      }
    });

    return transpileFileTask;
  }
}
