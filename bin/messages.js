'use strict';

const BATCH_SUCCESSFUL_MESSAGE = 'Successful build.',
      BATCH_FAILED_MESSAGE = 'The build failed.',
      BABEL_FAILED_MESSAGE = 'Babel failed:',
      BROWSERIFY_FAILED_MESSAGE = 'Browserify failed:',
      BABEL_CORE_NOT_INSTALLED = 'The \'@babel/core\' package is not installed.',
      BROWSERIFY_NOT_INSTALLED = 'Browserify is not installed.',
      NO_ENTRY_FILE_MESSAGE = 'If a temp directory has been specified then an entry file also must be given.',
      ENTRY_FILE_NOT_INCLUDED = 'The entry file is not included in the files to be bundled.',
      NO_TEMP_DIRECTORY_MESSAGE = 'If an entry file has been specified then a temp directory also must be given.',
      NO_SOURCE_DIRECTORY_MESSAGE = 'The source directory has not been specified.',
      NO_LIB_OR_TEMP_DIRECTORY_MESSAGE = 'Neither a lib directory nor a temp directory has been specified',
      BOTH_LIB_AND_TEMP_DIRECTORIES_MESSAGE = 'There is no need to specify both a lib and a temp directory.';

module.exports = {
  BATCH_SUCCESSFUL_MESSAGE,
  BATCH_FAILED_MESSAGE,
  BABEL_FAILED_MESSAGE,
  BROWSERIFY_FAILED_MESSAGE,
  BABEL_CORE_NOT_INSTALLED,
  BROWSERIFY_NOT_INSTALLED,
  NO_ENTRY_FILE_MESSAGE,
  ENTRY_FILE_NOT_INCLUDED,
  NO_TEMP_DIRECTORY_MESSAGE,
  NO_SOURCE_DIRECTORY_MESSAGE,
  NO_LIB_OR_TEMP_DIRECTORY_MESSAGE,
  BOTH_LIB_AND_TEMP_DIRECTORIES_MESSAGE
};
