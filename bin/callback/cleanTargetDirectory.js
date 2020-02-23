'use strict';

const fileSystemUtilities = require('../utilities/fileSystem');

const { cleanDirectory, checkDirectoryExists } = fileSystemUtilities;

function cleanTargetDirectoryCallback(proceed, abort, context) {
  const { targetDirectoryPath } = context,
        targetDirectoryExists = checkDirectoryExists(targetDirectoryPath);

  if (targetDirectoryExists) {
    cleanDirectory(targetDirectoryPath);
  }

  proceed();
}

module.exports = cleanTargetDirectoryCallback;
