'use strict';

const DELIMITER = '/',
      WATCHFUL_CLI = 'watchful-cli',
      DEFAULT_PAUSE = 100,
      BROWSERIFY_PATH = './node_modules/browserify',
      BABEL_CORE_PATH = './node_modules/@babel/core',
      PACKAGE_JSON_FILE_NAME = 'package.json',
      SOURCE_DIRECTORY_WATCH_PATTERN = '/**/*.js';

module.exports = {
  DELIMITER,
  WATCHFUL_CLI,
  DEFAULT_PAUSE,
  BROWSERIFY_PATH,
  BABEL_CORE_PATH,
  PACKAGE_JSON_FILE_NAME,
  SOURCE_DIRECTORY_WATCH_PATTERN
};
