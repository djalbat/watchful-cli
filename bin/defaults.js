"use strict";

const constants = require("./constants");

const { BROWSERIFY } = constants;

const WAIT_DEFAULT = 0,
      BUNDLER_DEFAULT = BROWSERIFY,
      QUIETLY_DEFAULT = false,
      METRICS_DEFAULT = false,
      PROCESSES_DEFAULT = 1;

module.exports = {
  WAIT_DEFAULT,
  BUNDLER_DEFAULT,
  QUIETLY_DEFAULT,
  METRICS_DEFAULT,
  PROCESSES_DEFAULT
};
