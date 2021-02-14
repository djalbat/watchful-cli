"use strict";

const INLINE = "inline",
      MESSAGE = "message",
      ESBUILD = "esbuild",
      DELIMITER = "/",
      BROWSERIFY = "browserify",
      WATCHFUL_CLI = "watchful-cli",
      ESBUILD_PATH = "./node_modules/esbuild",
      BROWSERIFY_PATH = "./node_modules/browserify",
      BABEL_CORE_PATH = "./node_modules/@babel/core",
      PACKAGE_JSON_FILE_NAME = "package.json",
      SOURCE_DIRECTORY_WATCH_PATTERN = "/**/*.js";

module.exports = {
  INLINE,
  MESSAGE,
  ESBUILD,
  DELIMITER,
  BROWSERIFY,
  WATCHFUL_CLI,
  ESBUILD_PATH,
  BROWSERIFY_PATH,
  BABEL_CORE_PATH,
  PACKAGE_JSON_FILE_NAME,
  SOURCE_DIRECTORY_WATCH_PATTERN
};
