"use strict";

const path = require("path");

const messages = require("../messages"),
      constants = require("../constants");

const { resolve } = path,
      { BABEL_CORE_PATH } = constants,
      { BABEL_NOT_INSTALLED } = messages;

function babelCallback(proceed, abort, context) {
  try {
    const babelCorePath = resolve(BABEL_CORE_PATH);

    Object.assign(context, {
      babelCorePath
    });
  } catch (error) {
    console.log(BABEL_NOT_INSTALLED);

    abort();
  }

  proceed();
}

module.exports = babelCallback;
