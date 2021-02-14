"use strict";

const BABEL_FAILED_MESSAGE = "Babel failed:",
      ESBUILD_FAILED_MESSAGE = "esbuild failed.",
      BROWSERIFY_FAILED_MESSAGE = "Browserify failed:",
      BATCH_BUILD_FAILED_MESSAGE = "The batch build failed.",
      INCREMENTAL_BUILD_FAILED_MESSAGE = "The incremental build failed.",
      BABEL_NOT_INSTALLED_MESSAGE = "The '@babel/core' package is not installed.",
      ESBUILD_NOT_INSTALLED_MESSAGE = "esbuild is not installed.",
      BROWSERIFY_NOT_INSTALLED_MESSAGE = "Browserify is not installed.",
      NO_ENTRY_FILE_SPECIFIED_MESSAGE = "If a temp directory has been specified then an entry file must also be given.",
      NO_SOURCE_DIRECTORY_SPECIFIED_MESSAGE = "The source directory has not been specified.",
      BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE = "There is no need to specify both a lib and a temp directory.",
      NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE = "Neither a lib directory nor a temp directory has been specified",
      ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES_MESSAGE = "The entry file is not included in the files to be bundled.",
      ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = "The entry file path is not relative to the current directory.",
      BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = "The bundle file path is not relative to the current directory.",
      LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = "The lib directory path is not relative to the current directory.",
      TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = "The temp directory path is not relative to the current directory.",
      SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE = "The source directory path is not relative to the current directory.",
      ENTRY_FILE_BUT_NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE = "If an entry file has been specified then a temp or a lib directory must also be given.";

module.exports = {
  BABEL_FAILED_MESSAGE,
  ESBUILD_FAILED_MESSAGE,
  BROWSERIFY_FAILED_MESSAGE,
  BATCH_BUILD_FAILED_MESSAGE,
  INCREMENTAL_BUILD_FAILED_MESSAGE,
  BABEL_NOT_INSTALLED_MESSAGE,
  ESBUILD_NOT_INSTALLED_MESSAGE,
  BROWSERIFY_NOT_INSTALLED_MESSAGE,
  NO_ENTRY_FILE_SPECIFIED_MESSAGE,
  NO_SOURCE_DIRECTORY_SPECIFIED_MESSAGE,
  BOTH_LIB_AND_TEMP_DIRECTORIES_SPECIFIED_MESSAGE,
  NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE,
  ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES_MESSAGE,
  ENTRY_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  BUNDLE_FILE_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  LIB_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  TEMP_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  SOURCE_DIRECTORY_PATH_NOT_RELATIVE_TO_CURRENT_DIRECTORY_MESSAGE,
  ENTRY_FILE_BUT_NEITHER_LIB_NOR_TEMP_DIRECTORY_SPECIFIED_MESSAGE
};
