"use strict";

const help = require("./action/help"),
      batch = require("./action/batch"),
      version = require("./action/version"),
      incremental = require("./action/incremental");

const { HELP_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND, BATCH_COMMAND, VERSION_COMMAND, INCREMENTAL_COMMAND } = require("./commands");

function actions(command, argument, options) {
  const commandMissing = (command === null),
        helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION);

  if (false) {
    ///
  } else if (versionOptionPresent) {
    command = VERSION_COMMAND;
  } else if (helpOptionPresent) {
    command = HELP_COMMAND;
  } else if (commandMissing) {
    command = INCREMENTAL_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND : help(); break;
    case BATCH_COMMAND : batch(options); break;
    case VERSION_COMMAND : version(); break;
    case INCREMENTAL_COMMAND : incremental(options); break;
  }
}

module.exports = actions;
