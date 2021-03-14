"use strict";

const path = require("path");

const { pathWithoutBottommostNameFromPath } = require("../utilities/path");

function sourceFileNameFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath) {
  const targetFilePathWithoutBottommostName = pathWithoutBottommostNameFromPath(targetFilePath),
        relativeSourceFilePath = path.relative(targetFilePathWithoutBottommostName, sourceFilePath),
        sourceFileName = relativeSourceFilePath;  ///

  return sourceFileName;
}

module.exports = {
  sourceFileNameFromSourceFilePathAndTargetFilePath
};
