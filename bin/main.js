'use strict';

const actions = require('./actions');

function main(command, argument, options) {
  actions(command, argument, options);
}

module.exports = main;
