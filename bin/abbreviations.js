'use strict';

const options = require('./options');

const { HELP_OPTION,
        DEBUG_OPTION,
        VERSION_OPTION,
        BUNDLE_FILE_OPTION,
        INPUT_DIRECTORY_OPTION,
        OUTPUT_DIRECTORY_OPTION } = options;

const h = HELP_OPTION,
      d = DEBUG_OPTION,
      v = VERSION_OPTION,
      b = BUNDLE_FILE_OPTION,
      i = INPUT_DIRECTORY_OPTION,
      o = OUTPUT_DIRECTORY_OPTION;

module.exports = {
  h,
  d,
  v,
  b,
  i,
  o
};
