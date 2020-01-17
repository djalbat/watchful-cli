#!/usr/bin/env node

const path = require('path');

const messages = require('./bin/messages')

const { exit } = process,
      { BABEL_CORE_NOT_INSTALLED } = messages;

let babel;

try {
  babel = require(path.resolve('./node_modules/@babel/core'));
} catch (error) {
  console.log(BABEL_CORE_NOT_INSTALLED);

  exit(1);
}

const { transform } = babel;

const source = `() => {

        console.log('!');
        
      };`,
      options = {};

transform(source, options, (error, result) => {
  const { code, map, ast } = result;

  console.log(code);
});
