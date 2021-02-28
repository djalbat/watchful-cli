"use strict";

const Task = require("../task"),
      bundleFiles = require("../bundleFiles");

class BundleFilesTask extends Task {
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

module.exports = BundleFilesTask;
