'use strict';

const path = require('path');

const messages = require('../messages'),
      constants = require('../constants');

const { resolve } = path,
      { BROWSERIFY_PATH } = constants,
      { BROWSERIFY_NOT_INSTALLED } = messages;

function browserifyCallback(proceed, abort, context) {
  const { browserifyOptions } = context,
        options = browserifyOptions;  ///

  try {
    const browserify = require(resolve(BROWSERIFY_PATH));

    const bundler = browserify(options); ///

    Object.assign(context, {
      bundler
    });
  } catch (error) {
    console.log(BROWSERIFY_NOT_INSTALLED);

    abort();
  }

  proceed();
}

module.exports = browserifyCallback;
