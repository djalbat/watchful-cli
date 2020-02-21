'use strict';

const path = require('path');

const messages = require('../messages');

const { BROWSERIFY_NOT_INSTALLED } = messages;

function browserifyCallback(proceed, abort, context) {
  try {
    const browserify = require(path.resolve('./node_modules/browserify'));

    const bundler = browserify(); ///

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
