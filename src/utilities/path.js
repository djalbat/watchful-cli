"use strict";

import path from "path";

import { characters, pathUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { FORWARD_SLASH_CHARACTER } = characters;

const currentWorkingDirectoryPath = process.cwd(),
      currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length;

export const { combinePaths, pathWithoutBottommostNameFromPath } = pathUtilities;

export function pathFromOption(option) {
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

export function isPathFullQualifiedPath(path) {
  const pathStartsWithCurrentWorkingDirectoryPath = path.startsWith(currentWorkingDirectoryPath),
        pathFullyQualifiedPath = pathStartsWithCurrentWorkingDirectoryPath; ///

  return pathFullyQualifiedPath;
}

export function pathFromFullyQualifiedPath(fullyQualifiedPath) {
  const path = fullyQualifiedPath.substring(currentWorkingDirectoryPathLength);

  return path;
}

export function pathWithoutDirectoryPathFromPathAndDirectoryPath(path, directoryPath) {
    const directoryPathLength = directoryPath.length,
          forwardSlashCharacterLength = FORWARD_SLASH_CHARACTER.length,
          pathWithoutDirectoryPath = path.substring(directoryPathLength + forwardSlashCharacterLength);

  return pathWithoutDirectoryPath;
}

export function sourceFilePathFromFilePathAndSourceDirectoryPath(filePath, sourceDirectoryPath) {
  const sourceFilePath = combinePaths(sourceDirectoryPath, filePath);

  return sourceFilePath;
}

export function targetFilePathFromFilePathAndTargetDirectoryPath(filePath, targetDirectoryPath) {
  const targetFilePath = combinePaths(targetDirectoryPath, filePath);

  return targetFilePath;
}

export function sourceFileNameFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath) {
  const relativeSourceFilepath = relativeSourceFilePathFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath),
      sourceFileName = relativeSourceFilepath;  ///

  return sourceFileName;
}

export function sourcesFromSourcesSourceDirectoryPathAndTargetDirectoryPath(sources, sourceDirectoryPath, targetDirectoryPath) {
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

function relativeSourceFilePathFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath) {
  const targetFilePathWithoutBottommostName = pathWithoutBottommostNameFromPath(targetFilePath),
        relativeSourceFilePath = path.relative(targetFilePathWithoutBottommostName, sourceFilePath);

  return relativeSourceFilePath;
}

