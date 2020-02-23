'use strict';

const path = require('path');

const messages = require('../messages'),
      constants = require('../constants');

const { resolve } = path,
      { BABEL_CORE_PATH } = constants,
      { BABEL_CORE_NOT_INSTALLED } = messages;

function babelCallback(proceed, abort, context) {
  try {
    const babel = require(resolve(BABEL_CORE_PATH));

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
