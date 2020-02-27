'use strict';

const BATCH_FAILED_MESSAGE = 'The build failed.',
      BABEL_FAILED_MESSAGE = 'Babel failed:',
      NO_ENTRY_FILE_MESSAGE = 'No entry file has been specified.',
      NO_BUNDLE_FILE_MESSAGE = 'No bundle file has been specified.',
      ENTRY_FILE_NOT_INCLUDED = 'The entry file is not included in the bundle files.',
      BATCH_SUCCESSFUL_MESSAGE = 'Successful build.',
      BROWSERIFY_NOT_INSTALLED = 'Browserify is not installed.',
      BABEL_CORE_NOT_INSTALLED = 'The \'@babel/core\' package is not installed.',
      BROWSERIFY_FAILED_MESSAGE = 'Browserify failed:',
      NO_OUTPUT_DIRECTORY_MESSAGE = 'No output directory has been specified.';

module.exports = {
  BATCH_FAILED_MESSAGE,
  BABEL_FAILED_MESSAGE,
  NO_ENTRY_FILE_MESSAGE,
  NO_BUNDLE_FILE_MESSAGE,
  ENTRY_FILE_NOT_INCLUDED,
  BATCH_SUCCESSFUL_MESSAGE,
  BROWSERIFY_NOT_INSTALLED,
  BABEL_CORE_NOT_INSTALLED,
  BROWSERIFY_FAILED_MESSAGE,
  NO_OUTPUT_DIRECTORY_MESSAGE
};
