#!/usr/bin/env node

const path = require('path');

const babel = require(path.resolve('./node_modules/@babel/core'));

const { transform } = babel;

const source = `() => {

        console.log('!');
        
      };`,
      options = {};

transform(source, options, (error, result) => {
  const { code, map, ast } = result;

  console.log(code);
});
