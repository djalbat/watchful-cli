"use strict";

const DELIMITER = "/",
      WATCHFUL_CLI = "watchful-cli",
      DEFAULT_PAUSE = 0,
      DEFAULT_QUIETLY = false,
      BROWSERIFY_PATH = "./node_modules/browserify",
      BABEL_CORE_PATH = "./node_modules/@babel/core",
      PACKAGE_JSON_FILE_NAME = "package.json",
      SOURCE_DIRECTORY_WATCH_PATTERN = "/**/*.js";

module.exports = {
  DELIMITER,
  WATCHFUL_CLI,
  DEFAULT_PAUSE,
  DEFAULT_QUIETLY,
  BROWSERIFY_PATH,
  BABEL_CORE_PATH,
  PACKAGE_JSON_FILE_NAME,
  SOURCE_DIRECTORY_WATCH_PATTERN
};
