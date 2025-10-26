"use strict";

import watch from "../watch";
import action from "../action";
import initialiseOperation from "../operation/initialise";
import retrieveFilePathsOperation from "../operation/retrieveFilePaths";
import createBundleFilesFunctionOperation from "../operation/createBundleFilesFunction";
import createTranspileFileFunctionOperation from "../operation/createTranspileFileFunction";

import { INCREMENTAL_BUILD_FAILED_MESSAGE } from "../messages";

export default function incrementalAction(wait, node, debug, release, bundler, quietly, metrics, processes, entryFile, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory) {
  const operations = [
          initialiseOperation,
          createTranspileFileFunctionOperation,
          createBundleFilesFunctionOperation,
          retrieveFilePathsOperation
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
      console.log(INCREMENTAL_BUILD_FAILED_MESSAGE);

      return;
    }

    watch(context);
  }, context);
}
