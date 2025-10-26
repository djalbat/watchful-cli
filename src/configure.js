"use strict";

import { DEFAULT_HELP, DEFAULT_VERSION } from "./defaults";
import { HELP_COMMAND, VERSION_COMMAND } from "./commands";

export default function configure(command, argument, options, main) {
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
