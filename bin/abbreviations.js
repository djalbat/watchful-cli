'use strict';

const options = require('./options');

const { HELP_OPTION,
        PAUSE_OPTION,
        DEBUG_OPTION,
        QUIETLY_OPTION,
        VERSION_OPTION,
        ENTRY_FILE_OPTION,
        BUNDLE_FILE_OPTION,
        LIB_DIRECTORY_OPTION,
        TEMP_DIRECTORY_OPTION,
        SOURCE_DIRECTORY_OPTION } = options;

const h = HELP_OPTION,
      p = PAUSE_OPTION,
      d = DEBUG_OPTION,
      q = QUIETLY_OPTION,
      v = VERSION_OPTION,
      e = ENTRY_FILE_OPTION,
      b = BUNDLE_FILE_OPTION,
      l = LIB_DIRECTORY_OPTION,
      t = TEMP_DIRECTORY_OPTION,
      s = SOURCE_DIRECTORY_OPTION;

module.exports = {
  h,
  p,
  d,
  q,
  v,
  e,
  b,
  l,
  t,
  s
};
