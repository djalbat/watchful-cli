"use strict";

const { arrayUtilities } = require("necessary");

const { readFile } = require("../utilities/fileSystem"),
      { PACKAGE_JSON_FILE_NAME } = require("../constants");

const { second } = arrayUtilities;

const utilitiesDirectoryName = __dirname, ///
      matches = utilitiesDirectoryName.match(/^(.+)\/bin\/utilities$/),
      secondMatch = second(matches),
      applicationDirectoryName = secondMatch, ///
      packageJSONFilePath = `${applicationDirectoryName}/${PACKAGE_JSON_FILE_NAME}`,
      packageJSONFile = readFile(packageJSONFilePath),
      packageJSON = JSON.parse(packageJSONFile),
      { version } = packageJSON,
      packageVersion = version;  ///

function getPackageVersion() {
  return packageVersion;
}

module.exports = {
  getPackageVersion
};
