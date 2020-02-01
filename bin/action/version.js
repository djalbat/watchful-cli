'use strict';

const constants = require('../constants'),
      packageJSONUtilities = require('../utilities/packageJSON');

const { WATCHFUL_CLI } = constants,
      { getPackageVersion } = packageJSONUtilities;

function version() {
  const packageVersion = getPackageVersion(),
        version = packageVersion; ///

  console.log(`${WATCHFUL_CLI} version ${version}`);
}

module.exports = version;
