'use strict';

const options = require('./options');

const { HELP_OPTION,
        DEBUG_OPTION,
        VERSION_OPTION,
        ENTRY_FILE_OPTION,
        BUNDLE_FILE_OPTION,
        SOURCE_DIRECTORY_OPTION,
        OUTPUT_DIRECTORY_OPTION } = options;

const h = HELP_OPTION,
      d = DEBUG_OPTION,
      v = VERSION_OPTION,
      e = ENTRY_FILE_OPTION,
      b = BUNDLE_FILE_OPTION,
      s = SOURCE_DIRECTORY_OPTION,
      o = OUTPUT_DIRECTORY_OPTION;

module.exports = {
  h,
  d,
  v,
  e,
  b,
  s,
  o
};
