"use strict";

const path = require("path");

const messages = require("../messages"),
      constants = require("../constants");

const { resolve } = path,
      { ESBUILD_NOT_INSTALLED } = messages,
      { ESBUILD_PATH, ESBUILD } = constants;

function esbuildPathCallback(proceed, abort, context) {
  const { bundler, entryFilePath } = context;

  if (!entryFilePath) {
    proceed();

    return;
  }

  if (bundler !== ESBUILD) {
    proceed();

    return;
  }

  try {
    const esbuildPath = resolve(ESBUILD_PATH);

    Object.assign(context, {
      esbuildPath
    });
  } catch (error) {
    console.log(ESBUILD_NOT_INSTALLED);

    abort();
  }

  proceed();
}

module.exports = esbuildPathCallback;
