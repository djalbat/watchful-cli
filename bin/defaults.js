"use strict";

const { BABEL, BROWSERIFY } = require("./constants");

const DEFAULT_HELP = false,
      DEFAULT_WAIT = 0,
      DEFAULT_NODE = false,
      DEFAULT_DEBUG = false,
      DEFAULT_RELEASE = false,
      DEFAULT_BUNDLER = BROWSERIFY,
      DEFAULT_VERSION = false,
      DEFAULT_QUIETLY = false,
      DEFAULT_METRICS = false,
      DEFAULT_PROCESSES = 1,
      DEFAULT_TRANSPILER = BABEL,
      DEFAULT_ENTRY_FILE = null,
      DEFAULT_BUNDLE_FILE = null,
      DEFAULT_LIB_DIRECTORY = null,
      DEFAULT_TEMP_DIRECTORY = null,
      DEFAULT_SOURCE_DIRECTORY = null;

module.exports = {
  DEFAULT_HELP,
  DEFAULT_WAIT,
  DEFAULT_NODE,
  DEFAULT_DEBUG,
  DEFAULT_RELEASE,
  DEFAULT_BUNDLER,
  DEFAULT_VERSION,
  DEFAULT_QUIETLY,
  DEFAULT_METRICS,
  DEFAULT_PROCESSES,
  DEFAULT_TRANSPILER,
  DEFAULT_ENTRY_FILE,
  DEFAULT_BUNDLE_FILE,
  DEFAULT_LIB_DIRECTORY,
  DEFAULT_TEMP_DIRECTORY,
  DEFAULT_SOURCE_DIRECTORY
};
