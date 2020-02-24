'use strict';

const options = require('./options');

const { HELP_OPTION, DEBUG_OPTION, VERSION_OPTION } = options;

const h = HELP_OPTION,
      d = DEBUG_OPTION,
      v = VERSION_OPTION;

module.exports = {
  h,
  d,
  v
};
