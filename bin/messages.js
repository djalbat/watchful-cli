'use strict';

const BABEL_NOT_INSTALLED = 'The \'@babel/core\' package is not installed.',
      BROWSERIFY_NOT_INSTALLED = 'Browserify is not installed.',
      BABEL_FAILED_MESSAGE = 'Babel failed:',
      BROWSERIFY_FAILED_MESSAGE = 'Browserify failed:',
      BATCH_BUILD_FAILED_MESSAGE = 'The batch build failed.',
      BATCH_BUILD_SUCCESSFUL_MESSAGE = 'Batch build successful.',
      INCREMENTAL_BUILD_FAILED_MESSAGE = 'The incremental build failed.',
      NO_ENTRY_FILE_MESSAGE = 'If a temp directory has been specified then an entry file also must be given.',
      ENTRY_FILE_NOT_INCLUDED = 'The entry file is not included in the files to be bundled.',
      NO_TEMP_DIRECTORY_MESSAGE = 'If an entry file has been specified then a temp directory also must be given.',
      NO_SOURCE_DIRECTORY_MESSAGE = 'The source directory has not been specified.',
      NO_LIB_OR_TEMP_DIRECTORY_MESSAGE = 'Neither a lib directory nor a temp directory has been specified',
      BOTH_LIB_AND_TEMP_DIRECTORIES_MESSAGE = 'There is no need to specify both a lib and a temp directory.';

module.exports = {
  BABEL_NOT_INSTALLED,
  BROWSERIFY_NOT_INSTALLED,
  BABEL_FAILED_MESSAGE,
  BROWSERIFY_FAILED_MESSAGE,
  BATCH_BUILD_FAILED_MESSAGE,
  BATCH_BUILD_SUCCESSFUL_MESSAGE,
  INCREMENTAL_BUILD_FAILED_MESSAGE,
  NO_ENTRY_FILE_MESSAGE,
  ENTRY_FILE_NOT_INCLUDED,
  NO_TEMP_DIRECTORY_MESSAGE,
  NO_SOURCE_DIRECTORY_MESSAGE,
  NO_LIB_OR_TEMP_DIRECTORY_MESSAGE,
  BOTH_LIB_AND_TEMP_DIRECTORIES_MESSAGE
};
