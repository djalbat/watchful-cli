'use strict';

const path = require('path');

const messages = require('../messages');

const { BABEL_CORE_NOT_INSTALLED } = messages;

function babelCallback(proceed, abort, context) {
  try {
    const babel = require(path.resolve('./node_modules/@babel/core'));

    const { transform } = babel;

    Object.assign(context, {
      transform
    });
  } catch (error) {
    console.log(BABEL_CORE_NOT_INSTALLED);

    abort();
  }

  proceed();
}

module.exports = babelCallback;
