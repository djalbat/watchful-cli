"use strict";

import Task from "../task";
import bundleFiles from "../bundleFiles";

export default class BundleFilesTask extends Task {
  static fromContext(context) {
    let bundleFilesTask = null;

    const { bundleFilePath } = context;

    if (bundleFilePath) {
      bundleFilesTask = new BundleFilesTask(bundleFiles, context, () => {
        ///
      });
    }

    return bundleFilesTask;
  }
}
