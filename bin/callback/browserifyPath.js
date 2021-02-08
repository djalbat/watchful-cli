"use strict";

const path = require("path");

const messages = require("../messages"),
      constants = require("../constants");

const { resolve } = path,
      { BROWSERIFY_NOT_INSTALLED } = messages,
      { BROWSERIFY_PATH, BROWSERIFY } = constants;

function browserifyPathCallback(proceed, abort, context) {
  const { bundler, entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  if (bundler !== BROWSERIFY) {
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

module.exports = browserifyPathCallback;
