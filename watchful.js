#!/usr/bin/env node

const necessary = require("necessary"),
      argumentative = require("argumentative");

const main = require("./bin/main"),
      abbreviations = require("./bin/abbreviations");

const { parseArgv } = argumentative,
      { arrayUtilities } = necessary,
      { first, second } = arrayUtilities;

const { commands, options } = parseArgv(process.argv, abbreviations),
      firstCommand = first(commands),
      secondCommand = second(commands),
      command = firstCommand || null, ///
      argument = secondCommand || null; ///

main(command, argument, options);
