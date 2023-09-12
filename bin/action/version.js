"use strict";

const { packageUtilities } = require("necessary");

const { WATCHFUL_CLI } = require("../constants");

const { getVersion } = packageUtilities;

function versionAction() {
  const version = getVersion(); ///

  console.log(`${WATCHFUL_CLI} version ${version}`);
}

module.exports = versionAction;
