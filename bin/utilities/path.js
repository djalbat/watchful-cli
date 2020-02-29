'use strict';

const necessary = require('necessary');

const { pathUtilities } = necessary,
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

module.exports = Object.assign(pathUtilities, {
  guaranteePath,
  fileNameFromFilePath
});
