"use strict";

const { characters, pathUtilities } = require("necessary");

const { EMPTY_STRING } = require("../constants");

  const { FORWARD_SLASH_CHARACTER } = characters,
      { isPathName, bottommostNameFromPath } = pathUtilities;

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
    path = option.replace(/^\.\//, EMPTY_STRING).replace(/\/$/, EMPTY_STRING);
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
    const directoryPathLength = directoryPath.length,
          forwardSlashCharacterLength = FORWARD_SLASH_CHARACTER.length,
          pathWithoutDirectoryPath = path.substring(directoryPathLength + forwardSlashCharacterLength);

  return pathWithoutDirectoryPath;
}

module.exports = Object.assign({}, pathUtilities, {
  pathFromOption,
  fileNameFromFilePath,
  isPathFullQualifiedPath,
  pathFromFullyQualifiedPath,
  pathWithoutDirectoryPathFromPathAndDirectoryPath
});
