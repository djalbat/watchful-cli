"use strict";

import bundleFiles from "../bundleFiles";

export default function bundleFilesOperation(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  bundleFiles(context, () => {
    proceed();
  });
}
