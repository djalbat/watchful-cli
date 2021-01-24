"use strict";

const child_process = require("child_process");

const constants = require("../constants");

const { MESSAGE } = constants;

function childProcessesCallback(proceed, abort, context) {
  const { babelCorePath, babelOptions, sourceDirectoryPath, targetDirectoryPath } = context

  const parameters = [
          "vbnmbnvm"
        ],
        childProcess = child_process.fork(require.resolve("../childProcess"), parameters);

  childProcess.on(MESSAGE, (message) => {
    proceed();
  });
}

module.exports = childProcessesCallback;
