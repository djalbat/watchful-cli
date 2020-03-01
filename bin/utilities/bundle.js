'use strict';

const messages = require('../messages'),
      pathUtilities = require('../utilities/path'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { stdout } = process,
      { combinePaths } = pathUtilities,
      { BUNDLE_FAILED_MESSAGE } = messages,
      { writeFileEx, createParentDirectory } = fileSystemUtilities;

function bundleFiles(entryFilePath, context, done) {
  const { browserify, browserifyOptions, targetDirectoryPath } = context,
        targetEntryFilePath = combinePaths(targetDirectoryPath, entryFilePath),
        options = browserifyOptions,  ///
        bundler = browserify(options); ///

  bundler.add(targetEntryFilePath);

  bundler.bundle((error, buffer) => {
    if (error) {
      console.log(BUNDLE_FAILED_MESSAGE);

      console.log(error);

      done();

      return;
    }

    const { bundleFilePath } = context;

    if (!bundleFilePath) {
      stdout.write(buffer);
    } else {
      createParentDirectory(bundleFilePath);

      writeFileEx(bundleFilePath, buffer);

      const { quietly } = context;

      if (!quietly) {
        console.log(`Written bundle to '${bundleFilePath}'.`);
      }
    }

    done();
  });
}

module.exports = {
  bundleFiles
};
