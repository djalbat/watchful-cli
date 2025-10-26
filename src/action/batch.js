"use strict";

import action from "../action";
import initialiseOperation from "../operation/initialise";
import bundleFilesOperation from "../operation/bundleFiles";
import transpileFilesOperation from "../operation/transpileFiles";
import retrieveFilePathsOperation from "../operation/retrieveFilePaths";
import createBundleFilesFunctionOperation from "../operation/createBundleFilesFunction";
import createTranspileFileFunctionOperation from "../operation/createTranspileFileFunction";

import { BATCH_BUILD_FAILED_MESSAGE } from "../messages";

export default function batchAction(wait, node, debug, release, bundler, quietly, metrics, processes, entryFile, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory) {
  const operations = [
          initialiseOperation,
          createTranspileFileFunctionOperation,
          createBundleFilesFunctionOperation,
          retrieveFilePathsOperation,
          transpileFilesOperation,
          bundleFilesOperation
        ],
        context = {
          wait,
          node,
          debug,
          release,
          bundler,
          quietly,
          metrics,
          processes,
          entryFile,
          transpiler,
          bundleFile,
          libDirectory,
          tempDirectory,
          sourceDirectory
        };

  action(operations, (success) => {
    if (!success) {
      console.log(BATCH_BUILD_FAILED_MESSAGE);
    }

    process.exit(); ///
  }, context);
}
