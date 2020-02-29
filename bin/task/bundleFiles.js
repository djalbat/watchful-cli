'use strict';

const Task = require('../task'),
      bundleUtilities = require('../utilities/bundle');

const { bundleFiles } = bundleUtilities;

class BundleFilesTask extends Task {
  static fromContext(context) {
    let bundleFilesTask = null;

    const { entryFilePath } = context;

    if (entryFilePath) {
      bundleFilesTask = new BundleFilesTask(bundleFiles, entryFilePath, context, () => {
        console.log('Bundled files!');
      });
    }

    return bundleFilesTask;
  }
}

module.exports = BundleFilesTask;
