"use strict";

const path = require("path");

const pathUtilities = require("../utilities/path");

const { pathWithoutBottommostNameFromPath } = pathUtilities;

function sourceFileNameFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath) {
  const targetFilePathWithoutBottommostName = pathWithoutBottommostNameFromPath(targetFilePath),
        relativeSourceFilePath = path.relative(targetFilePathWithoutBottommostName, sourceFilePath),
        sourceFileName = relativeSourceFilePath;  ///

  return sourceFileName;
}

module.exports = {
  sourceFileNameFromSourceFilePathAndTargetFilePath
};
