'use strict';

const Task = require('../task'),
      pathUtilities = require('../utilities/path'),
      transformUtilities = require('../utilities/transform');

const { transformFile } = transformUtilities,
      { pathWithoutDirectoryPathFromPathAndDirectoryPath } = pathUtilities;

class TransformFileTask extends Task {
  static fromPathAndContext(path, context) {
    let transformFileTask = null;

    const { sourceDirectoryPath } = context,
          sourceFilePath = path,  ///
          filePath = pathWithoutDirectoryPathFromPathAndDirectoryPath(sourceFilePath, sourceDirectoryPath); ///

    transformFileTask = new TransformFileTask(transformFile, filePath, context, () => {
      ///
    });

    return transformFileTask;
  }
}

module.exports = TransformFileTask;
