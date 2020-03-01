'use strict';

const BABEL_NOT_INSTALLED = 'The \'@babel/core\' package is not installed.',
      BROWSERIFY_NOT_INSTALLED = 'Browserify is not installed.',
      BUNDLE_FAILED_MESSAGE = 'Browserify failed:',
      TRANSFORM_FAILED_MESSAGE = 'Babel failed:',
      BATCH_BUILD_FAILED_MESSAGE = 'The batch build failed.',
      INCREMENTAL_BUILD_FAILED_MESSAGE = 'The incremental build failed.',
      ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES = 'The entry file is not included in the files to be bundled.',
      NO_ENTRY_FILE_SPECIFIED_MESSAGE = 'If a temp directory has been specified then an entry file also must be given.',
      NO_TEMP_DIRECTORY_SPECIFIED_MESSAGE = 'If an entry file has been specified then a temp directory also must be given.',
      NO_SOURCE_DIRECTORY_SPECIFIED_MESSAGE = 'The source directory has not been specified.',
      BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE = 'There is no need to specify both a lib and a temp directory.',
      NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE = 'Neither a lib directory nor a temp directory has been specified',
      ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = 'The entry file path is not relative to the current directory.',
      BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = 'The bundle file path is not relative to the current directory.',
      LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = 'The lib directory path is not relative to the current directory.',
      TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = 'The temp directory path is not relative to the current directory.',
      SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = 'The source directory path is not relative to the current directory.';

module.exports = {
  BABEL_NOT_INSTALLED,
  BROWSERIFY_NOT_INSTALLED,
  BUNDLE_FAILED_MESSAGE,
  TRANSFORM_FAILED_MESSAGE,
  BATCH_BUILD_FAILED_MESSAGE,
  INCREMENTAL_BUILD_FAILED_MESSAGE,
  ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES,
  NO_ENTRY_FILE_SPECIFIED_MESSAGE,
  NO_TEMP_DIRECTORY_SPECIFIED_MESSAGE,
  NO_SOURCE_DIRECTORY_SPECIFIED_MESSAGE,
  BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE,
  NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE,
  ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE
};
