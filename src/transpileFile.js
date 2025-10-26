"use strict";

import { combinePaths } from "./utilities/path";

export default function transpileFile(filePath, context, callback) {
  const { transpileFileFunction, sourceDirectoryPath, targetDirectoryPath } = context;

  transpileFileFunction(filePath, sourceDirectoryPath, targetDirectoryPath, (success) => {
    const { quietly } = context;

    if (!quietly) {
      const sourceFilePath = combinePaths(sourceDirectoryPath, filePath);

      console.log(`Transpiled '${sourceFilePath}'.`);
    }

    callback(success);
  });
}
