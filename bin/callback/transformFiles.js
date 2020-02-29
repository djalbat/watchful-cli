'use strict';

const necessary = require('necessary');

const messages = require('../messages'),
      transformUtilities = require('../utilities/transform');

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { transformFile } = transformUtilities,
      { BABEL_FAILED_MESSAGE } = messages;

function transformFilesCallback(proceed, abort, context) {
  const { filePaths } = context,
        filePathsLength = filePaths.length,
        length = filePathsLength, ///
        count = 0;

  Object.assign(context, {
    count
  });

  forEach(filePaths, transformFileCallback, done, context);

  function done() {
    const { count } = context,
          success = (count === length);

    delete context.count;

    success ?
      proceed() :
        abort();
  }
}

module.exports = transformFilesCallback;

function transformFileCallback(filePath, next, done, context) {
  try {
    transformFile(filePath, context, () => {
      let { count } = context;

      count++;

      Object.assign(context, {
        count
      });

      next();
    });
  } catch (error) {
    console.log(BABEL_FAILED_MESSAGE);

    console.log(error);

    done();
  }
}
