'use strict';

const necessary = require('necessary');

const constants = require('../constants');

const { DELIMITER } = constants,
      { pathUtilities } = necessary,
      { isPathName, bottommostNameFromPath } = pathUtilities;

function guaranteePath(path) {
  const pathAbsolutePath = /^\/.*/.test(path),
        pathAllowedRelativePath = /^\.\/.*/.test(path),
        pathForbiddenRelativePath = /^\.\.\/.*/.test(path);

  if (false) {
    ///
  } else if (pathAbsolutePath) {
    path = null;
  } else if (pathAllowedRelativePath) {
    path = path.replace(/^\.\//, '').replace(/\/$/, '');
  } else if (pathForbiddenRelativePath) {
    path = null;
  } else {
    ///
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

function pathWithoutDirectoryPathFromPathAndDirectoryPath(path, directoryPath) {
  const delimiterLength = DELIMITER.length,
        directoryPathLength = directoryPath.length,
        pathWithoutDirectoryPath = path.substring(directoryPathLength + delimiterLength);

  return pathWithoutDirectoryPath;
}

module.exports = Object.assign(pathUtilities, {
  guaranteePath,
  fileNameFromFilePath,
  pathWithoutDirectoryPathFromPathAndDirectoryPath
});
