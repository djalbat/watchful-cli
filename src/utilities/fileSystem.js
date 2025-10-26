"use strict";

import fs from "fs";

import { characters, pathUtilities, fileSystemUtilities } from "necessary";

import { W_PLUS } from "../constants";
import { pathWithoutBottommostNameFromPath } from "../utilities/path";

export const { readFile, writeFile, readDirectory, isEntryDirectory, createDirectory } = fileSystemUtilities;

const { concatenatePaths } = pathUtilities,
      { openSync, writeSync, rmdirSync, unlinkSync } = fs;

const { PERIOD_CHARACTER } = characters;

export function deleteFile(filePath, done) {
  unlinkSync(filePath);

  done && done(); ///
}

export function writeFileEx(filePath, buffer) {
  const file = openSync(filePath, W_PLUS);

  writeSync(file, buffer);
}

export function deleteDirectory(directoryPath, done) {
  cleanDirectory(directoryPath);

  rmdirSync(directoryPath);

  done && done(); ///
}

export function createParentDirectory(filePath) {
  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath);

  if ((filePathWithoutBottommostName !== PERIOD_CHARACTER) && (filePathWithoutBottommostName !== null)) {
    const parentDirectoryPath = filePathWithoutBottommostName;  ///

    createDirectory(parentDirectoryPath);
  }
}

function cleanDirectory(directoryPath) {
  const entryPaths = readDirectory(directoryPath);

  entryPaths.forEach((entryPath) => {
    entryPath = concatenatePaths(directoryPath, entryPath);  ///

    const entryDirectory = isEntryDirectory(entryPath);

    if (entryDirectory) {
      const directoryPath = entryPath;  ///

      cleanDirectory(directoryPath);

      deleteDirectory(directoryPath);
    } else {
      const filePath = entryPath; ///

      deleteFile(filePath);
    }
  });
}
