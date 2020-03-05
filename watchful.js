#!/usr/bin/env node

const argumentative = require('argumentative');

const main = require('./bin/main'),
      abbreviations = require('./bin/abbreviations'),
      arrayUtilities = require('./bin/utilities/array');

const { argv } = process,
      { parseArgv } = argumentative,
      { first, second } = arrayUtilities;

const { commands, options } = parseArgv(argv, abbreviations),
      firstCommand = first(commands),
      secondCommand = second(commands),
      command = firstCommand || null, ///
      argument = secondCommand || null; ///

main(command, argument, options);
