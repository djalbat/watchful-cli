"use strict";

const { HELP_OPTION,
        NODE_OPTION,
        WAIT_OPTION,
        DEBUG_OPTION,
        RELEASE_OPTION,
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
      n = NODE_OPTION,
      w = WAIT_OPTION,
      d = DEBUG_OPTION,
      r = RELEASE_OPTION,
      u = BUNDLER_OPTION,
      q = QUIETLY_OPTION,
      v = VERSION_OPTION,
      m = METRICS_OPTION,
      p = PROCESSES_OPTION,
      t = TRANSPILER_OPTION,
      e = ENTRY_FILE_OPTION,
      b = BUNDLE_FILE_OPTION,
      l = LIB_DIRECTORY_OPTION,
      x = TEMP_DIRECTORY_OPTION,
      s = SOURCE_DIRECTORY_OPTION;

module.exports = {
  h,
  n,
  w,
  d,
  r,
  u,
  q,
  v,
  m,
  p,
  t,
  e,
  b,
  l,
  x,
  s
};
