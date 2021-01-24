"use strict";

const path = require("path");

const messages = require("../messages"),
      constants = require("../constants");

const { resolve } = path,
      { BROWSERIFY_PATH } = constants,
      { BROWSERIFY_NOT_INSTALLED } = messages;

function browserifyCallback(proceed, abort, context) {
  const { entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  try {
    const browserifyPath = resolve(BROWSERIFY_PATH);

    Object.assign(context, {
      browserifyPath
    });
  } catch (error) {
    console.log(BROWSERIFY_NOT_INSTALLED);

    abort();
  }

  proceed();
}

module.exports = browserifyCallback;
