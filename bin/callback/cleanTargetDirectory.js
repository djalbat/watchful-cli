'use strict';

const fileSystemUtilities = require('../utilities/fileSystem');

const { cleanDirectory } = fileSystemUtilities;

function cleanTargetDirectoryCallback(proceed, abort, context) {
  const { targetDirectoryPath } = context;

  cleanDirectory(targetDirectoryPath);

  proceed();
}

module.exports = cleanTargetDirectoryCallback;
