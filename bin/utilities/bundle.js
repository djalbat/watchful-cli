'use strict';

const pathUtilities = require('../utilities/path'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { stdout } = process,
      { combinePaths } = pathUtilities,
      { writeFileEx, createParentDirectory } = fileSystemUtilities;

function bundleFiles(entryFilePath, context, done) {
  const { browserify, browserifyOptions, targetDirectoryPath } = context,
        targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath),
        options = browserifyOptions,  ///
        bundler = browserify(options); ///

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
