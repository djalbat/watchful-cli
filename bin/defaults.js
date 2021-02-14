"use strict";

const constants = require("./constants");

const { BABEL, BROWSERIFY } = constants;

const WAIT_DEFAULT = 0,
      DEBUG_DEFAULT = false,
      BUNDLER_DEFAULT = BROWSERIFY,
      QUIETLY_DEFAULT = false,
      METRICS_DEFAULT = false,
      PROCESSES_DEFAULT = 1,
      TRANSPILER_DEFAULT = BABEL;

module.exports = {
  WAIT_DEFAULT,
  DEBUG_DEFAULT,
  BUNDLER_DEFAULT,
  QUIETLY_DEFAULT,
  METRICS_DEFAULT,
  PROCESSES_DEFAULT,
  TRANSPILER_DEFAULT
};
