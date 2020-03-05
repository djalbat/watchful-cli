'use strict';

const constants = require('../constants'),
      arrayUtilities = require('../utilities/array');

const { cwd } = process,
      { DELIMITER } = constants,
      { first, second, last } = arrayUtilities;

const currentWorkingDirectoryPath = cwd(),
      currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length;

function isPathName(path) {
  path = path.replace(/^\//,'').replace(/\/$/, ''); ///

  const pathName = (/\//.test(path) === false);

  return pathName;
}

function combinePaths(path, relativePath) {
  let combinedPath = null;

  const pathNames = path.split('/'),
      relativePathNames = relativePath.split('/');

  let lastPathName,
    firstRelativePathName = first(relativePathNames);

  if (firstRelativePathName === '.') {
    relativePathNames.shift();
  }

  firstRelativePathName = first(relativePathNames);
  lastPathName = last(pathNames);

  while ((firstRelativePathName === '..') && (lastPathName !== undefined)) {
    relativePathNames.shift();
    pathNames.pop();

    firstRelativePathName = first(relativePathNames);
    lastPathName = last(pathNames);
  }

  if (lastPathName !== undefined) {
    const combinedPathNames = [].concat(pathNames).concat(relativePathNames);

    combinedPath = combinedPathNames.join('/');
  }

  return combinedPath;
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

function bottommostNameFromPath(path) {
  let bottommostName = null;

  const matches = path.match(/^.*\/([^\/]+\/?)$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    bottommostName = secondMatch;  ///
  }

  return bottommostName;
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

function pathWithoutBottommostNameFromPath(path) {
  let pathWithoutBottommostName = null;

  const matches = path.match(/^(.*)\/[^\/]+\/?$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutDirectoryPathFromPathAndDirectoryPath(path, directoryPath) {
  const delimiterLength = DELIMITER.length,
        directoryPathLength = directoryPath.length,
        pathWithoutDirectoryPath = path.substring(directoryPathLength + delimiterLength);

  return pathWithoutDirectoryPath;
}

module.exports = {
  isPathName,
  combinePaths,
  fileNameFromFilePath,
  isPathFullQualifiedPath,
  pathFromFullyQualifiedPath,
  pathWithoutBottommostNameFromPath,
  pathWithoutDirectoryPathFromPathAndDirectoryPath
};
