'use strict';

const options = require('./options');

const { HELP_OPTION, VERSION_OPTION } = options;

module.exports = {
  'h' : HELP_OPTION,
  'v' : VERSION_OPTION
};
