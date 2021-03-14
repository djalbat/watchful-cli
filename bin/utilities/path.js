"use strict";

const { pathUtilities } = require("necessary");

const { DELIMITER } = require("../constants");

const { isPathName, bottommostNameFromPath } = pathUtilities;

const currentWorkingDirectoryPath = process.cwd(),
      currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length;

function pathFromOption(option) {
  let path = null;

  const optionAbsolutePath = /^\/.*/.test(option),
        optionAllowedRelativePath = /^\.\/.*/.test(option),
        optionForbiddenRelativePath = /^\.\.\/.*/.test(option);

  if (false) {
    ///
  } else if (optionAbsolutePath) {
    ///
  } else if (optionAllowedRelativePath) {
    path = option.replace(/^\.\//, "").replace(/\/$/, "");
  } else if (optionForbiddenRelativePath) {
    path = null;
  } else {
    path = option;  ///
  }

  return path;
}

function fileNameFromFilePath(filePath) {
  let fileName;

  const filePathFileName = isPathName(filePath);

  if (filePathFileName) {
    fileName = filePath;  ///
  } else {
    const bottommostFileName = bottommostNameFromPath(filePath);

    fileName = bottommostFileName;  ///
  }

  return fileName;
}

function isPathFullQualifiedPath(path) {
  const pathStartsWithCurrentWorkingDirectoryPath = path.startsWith(currentWorkingDirectoryPath),
        pathFullyQualifiedPath = pathStartsWithCurrentWorkingDirectoryPath; ///

  return pathFullyQualifiedPath;
}

function pathFromFullyQualifiedPath(fullyQualifiedPath) {
  const path = fullyQualifiedPath.substring(currentWorkingDirectoryPathLength);

  return path;
}

function pathWithoutDirectoryPathFromPathAndDirectoryPath(path, directoryPath) {
  const delimiterLength = DELIMITER.length,
        directoryPathLength = directoryPath.length,
        pathWithoutDirectoryPath = path.substring(directoryPathLength + delimiterLength);

  return pathWithoutDirectoryPath;
}

module.exports = Object.assign({}, pathUtilities, {
  pathFromOption,
  fileNameFromFilePath,
  isPathFullQualifiedPath,
  pathFromFullyQualifiedPath,
  pathWithoutDirectoryPathFromPathAndDirectoryPath
});
