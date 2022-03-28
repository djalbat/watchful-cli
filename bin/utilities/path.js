"use strict";

const path = require("path");

const { characters, pathUtilities } = require("necessary");

const { EMPTY_STRING } = require("../constants");

const { FORWARD_SLASH_CHARACTER } = characters,
      { combinePaths, pathWithoutBottommostNameFromPath } = pathUtilities;

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

function sourceFilePathFromFilePathAndSourceDirectoryPath(filePath, sourceDirectoryPath) {
  const sourceFilePath = combinePaths(sourceDirectoryPath, filePath);

  return sourceFilePath;
}

function targetFilePathFromFilePathAndTargetDirectoryPath(filePath, targetDirectoryPath) {
  const targetFilePath = combinePaths(targetDirectoryPath, filePath);

  return targetFilePath;
}

function sourceFileNameFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath) {
  const relativeSourceFilepath = relativeSourceFilePathFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath),
      sourceFileName = relativeSourceFilepath;  ///

  return sourceFileName;
}

function sourcesFromSourcesSourceDirectoryPathAndTargetDirectoryPath(sources, sourceDirectoryPath, targetDirectoryPath) {
  sources = sources.map((source) => { ///
    const sourceStartsWithTargetDirectoryPath = source.startsWith(targetDirectoryPath);

    if (sourceStartsWithTargetDirectoryPath) {
      const targetDirectoryPathLength = targetDirectoryPath.length,
            start = targetDirectoryPathLength + 1,
            filePath = source.substring(start),
            targetFilePath = source,  ///
            sourceFilePath = sourceFilePathFromFilePathAndSourceDirectoryPath(filePath, sourceDirectoryPath),
            relativeSourceFilePath = relativeSourceFilePathFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath);

      source = relativeSourceFilePath;  ///
    }

    return source;
  });

  return sources;
}

module.exports = Object.assign({}, pathUtilities, {
  pathFromOption,
  isPathFullQualifiedPath,
  pathFromFullyQualifiedPath,
  pathWithoutDirectoryPathFromPathAndDirectoryPath,
  sourceFilePathFromFilePathAndSourceDirectoryPath,
  targetFilePathFromFilePathAndTargetDirectoryPath,
  sourceFileNameFromSourceFilePathAndTargetFilePath,
  sourcesFromSourcesSourceDirectoryPathAndTargetDirectoryPath
});

function relativeSourceFilePathFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath) {
  const targetFilePathWithoutBottommostName = pathWithoutBottommostNameFromPath(targetFilePath),
        relativeSourceFilePath = path.relative(targetFilePathWithoutBottommostName, sourceFilePath);

  return relativeSourceFilePath;
}

