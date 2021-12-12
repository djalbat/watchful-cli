"use strict";

const action = require("../action"),
      initialiseOperation = require("../operation/initialise"),
      bundleFilesOperation = require("../operation/bundleFiles"),
      transpileFilesOperation = require("../operation/transpileFiles"),
      retrieveFilePathsOperation = require("../operation/retrieveFilePaths"),
      createBundleFilesFunctionOperation = require("../operation/createBundleFilesFunction"),
      createTranspileFileFunctionOperation = require("../operation/createTranspileFileFunction");

const { BATCH_BUILD_FAILED_MESSAGE } = require("../messages");

function batch(options) {
  const operations = [
          initialiseOperation,
          createTranspileFileFunctionOperation,
          createBundleFilesFunctionOperation,
          retrieveFilePathsOperation,
          transpileFilesOperation,
          bundleFilesOperation
        ],
        context = {
          options
        };

  action(operations, (success) => {
    if (!success) {
      console.log(BATCH_BUILD_FAILED_MESSAGE);

      process.exit(1);
    }

    process.exit(0);
  }, context);
}

module.exports = batch;
