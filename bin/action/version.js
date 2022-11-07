"use strict";

const { WATCHFUL_CLI } = require("../constants"),
      { getPackageVersion } = require("../utilities/packageJSON");

function versionAction() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${WATCHFUL_CLI} version ${version}`);
}

module.exports = versionAction;
