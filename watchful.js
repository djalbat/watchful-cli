#!/usr/bin/env node

const { parseArgv } = require("argumentative"),
      { arrayUtilities } = require("necessary");

const { default: main } = require("./lib/main"),
      { default: prepare } = require("./lib/prepare"),
      { default: abbreviations } = require("./lib/abbreviations");

const { first, second } = arrayUtilities;

const { commands, options } = parseArgv(process.argv, abbreviations),
      firstCommand = first(commands),
      secondCommand = second(commands),
      command = firstCommand || null, ///
      argument = secondCommand || null; ///

prepare(command, argument, options, main);
