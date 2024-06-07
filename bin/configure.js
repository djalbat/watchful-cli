"use strict";

const { DEFAULT_HELP, DEFAULT_VERSION } = require("./defaults"),
      { HELP_COMMAND, VERSION_COMMAND } = require("./commands");

function configure(command, argument, options, main) {
  const { help = DEFAULT_HELP, version = DEFAULT_VERSION } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  }

  main(command, argument, options);
}

module.exports = configure;
