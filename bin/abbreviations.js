"use strict";

const { HELP_OPTION,
        WAIT_OPTION,
        DEBUG_OPTION,
        BUNDLER_OPTION,
        QUIETLY_OPTION,
        VERSION_OPTION,
        METRICS_OPTION,
        PROCESSES_OPTION,
        TRANSPILER_OPTION,
        ENTRY_FILE_OPTION,
        BUNDLE_FILE_OPTION,
        LIB_DIRECTORY_OPTION,
        TEMP_DIRECTORY_OPTION,
        SOURCE_DIRECTORY_OPTION } = require("./options");

const h = HELP_OPTION,
      w = WAIT_OPTION,
      d = DEBUG_OPTION,
      u = BUNDLER_OPTION,
      q = QUIETLY_OPTION,
      v = VERSION_OPTION,
      m = METRICS_OPTION,
      p = PROCESSES_OPTION,
      r = TRANSPILER_OPTION,
      e = ENTRY_FILE_OPTION,
      b = BUNDLE_FILE_OPTION,
      l = LIB_DIRECTORY_OPTION,
      t = TEMP_DIRECTORY_OPTION,
      s = SOURCE_DIRECTORY_OPTION;

module.exports = {
  h,
  w,
  d,
  u,
  q,
  v,
  m,
  p,
  r,
  e,
  b,
  l,
  t,
  s
};
