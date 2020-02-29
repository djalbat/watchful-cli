'use strict';

const pathUtilities = require('../utilities/path'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { stdout } = process,
      { combinePaths } = pathUtilities,
      { writeFileEx, createParentDirectory } = fileSystemUtilities;

function bundleFiles(entryFilePath, done, context) {
  const { bundler, targetDirectoryPath } = context,
        targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath);

  bundler.add(targetEntryFilePath);

  bundler.bundle((error, buffer) => {
    if (error) {
      throw(error);
    }

    const { bundleFilePath } = context;

    if (!bundleFilePath) {
      stdout.write(buffer);
    } else {
      createParentDirectory(bundleFilePath);

      writeFileEx(bundleFilePath, buffer);
    }

    done();
  });
}

module.exports = {
  bundleFiles
};
