'use strict';

const commands = require('./commands'),
      options = require('./options'),
      help = require('./action/help'),
      batch = require('./action/batch'),
      version = require('./action/version');

const { HELP_OPTION, VERSION_OPTION } = options,
      { HELP_COMMAND, BATCH_COMMAND, VERSION_COMMAND } = commands;

function actions(command, argument, options) {
  const commandMissing = (command === null),
        helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION);

  if (false) {
    ///
  } else if (versionOptionPresent) {
    command = VERSION_COMMAND;
  } else if (commandMissing || helpOptionPresent) {
    command = HELP_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND : help(); break;
    case BATCH_COMMAND : batch(); break;
    case VERSION_COMMAND : version(); break;
  }
}

module.exports = actions;
