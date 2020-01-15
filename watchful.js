#!/usr/bin/env node

const babel = require('@babel/core');

const { transform } = babel;

const source = `() => {

        console.log('!');
        
      };`,
      options = {};

transform(source, options, (error, result) => {
  const { code, map, ast } = result;

  console.log(code);
});
