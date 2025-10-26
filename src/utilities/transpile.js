"use strict";

import path from "path";

import { encodings } from "necessary";

import { SWC_CORE_PATH, BABEL_CORE_PATH } from "../paths";
import { readFile, writeFile, createParentDirectory } from "../utilities/fileSystem";
import { BABEL, INLINE, SOURCE_MAP_PREAMBLE } from "../constants";
import { SWC_FAILED_MESSAGE, BABEL_FAILED_MESSAGE, SWC_NOT_INSTALLED_MESSAGE, BABEL_NOT_INSTALLED_MESSAGE } from "../messages";
import { sourceFilePathFromFilePathAndSourceDirectoryPath,
         targetFilePathFromFilePathAndTargetDirectoryPath,
         sourceFileNameFromSourceFilePathAndTargetFilePath,
         sourcesFromSourcesSourceDirectoryPathAndTargetDirectoryPath } from "../utilities/path";

const { BASE64_ENCODING } = encodings;

export function createTranspileFileFunction(context) {
  const { debug, transpiler } = context,
        transpileFileFunction = (transpiler === BABEL) ?
                                  createBabelTranspileFileFunction(debug) :
                                    createSWCTranspileFileFunction(debug);

  return transpileFileFunction;
}

function createBabelTranspileFileFunction(debug) {
  let babelTranspileFileFunction = null;

  try {
    const babelCorePath = path.resolve(BABEL_CORE_PATH),
          babel = require(babelCorePath),
          transpiler = babel; ///

    babelTranspileFileFunction = (filePath, sourceDirectoryPath, targetDirectoryPath, callback) => {
      let options;

      const sourceFilePath = sourceFilePathFromFilePathAndSourceDirectoryPath(filePath, sourceDirectoryPath),
            targetFilePath = targetFilePathFromFilePathAndTargetDirectoryPath(filePath, targetDirectoryPath);

      if (debug) {
        const sourceMaps = INLINE,  ///
              sourceFileName = sourceFileNameFromSourceFilePathAndTargetFilePath(sourceFilePath, targetFilePath);

        options = {
          sourceMaps,
          sourceFileName
        };
      } else {
        options = {};
      }

      transpiler.transformFile(sourceFilePath, options, (error, result) => {
        if (error) {
          const success = false,
                { message } = error;

          error = message;  ///

          console.log(`${BABEL_FAILED_MESSAGE}
${error}`);

          callback(success);

          return;
        }

        const { code } = result,
              success = true,
              targetFileContent = code; ///

        createParentDirectory(targetFilePath);

        writeFile(targetFilePath, targetFileContent);

        callback(success);
      });
    };
  } catch (error) {
    console.log(BABEL_NOT_INSTALLED_MESSAGE);
  }

  return babelTranspileFileFunction;
}

function createSWCTranspileFileFunction(debug) {
  let swcTranspileFileFunction = null;

  try {
    const swcCorePath = path.resolve(SWC_CORE_PATH),
          swc = require(swcCorePath),
          transpiler = swc; ///

    swcTranspileFileFunction = (filePath, sourceDirectoryPath, targetDirectoryPath, callback) => {
      const sourceFilePath = sourceFilePathFromFilePathAndSourceDirectoryPath(filePath, sourceDirectoryPath),
            targetFilePath = targetFilePathFromFilePathAndTargetDirectoryPath(filePath, targetDirectoryPath),
            filename = targetFilePath,  ///
            sourceMaps = debug, ///
            sourceFileContent = readFile(sourceFilePath),
            options = {
              filename,
              sourceMaps
            };

      transpiler.transform(sourceFileContent, options)
        .then((output) => {
          const success = true;

          let targetFileContent;

          if (debug) {
            const { code, map } = output,
                  mapJSON = JSON.parse(map);

            let { sources } = mapJSON;

            sources = sourcesFromSourcesSourceDirectoryPathAndTargetDirectoryPath(sources, sourceDirectoryPath, targetDirectoryPath);

            Object.assign(mapJSON, {
              sources
            });

            const mapJSONString = JSON.stringify(mapJSON),
                  base64EncodedMapJSONString = Buffer.from(mapJSONString).toString(BASE64_ENCODING);

            targetFileContent = `${code}
${SOURCE_MAP_PREAMBLE}${base64EncodedMapJSONString}`; ///
          } else {
            const { code } = output;

            targetFileContent = code; ///
          }

          createParentDirectory(targetFilePath);

          writeFile(targetFilePath, targetFileContent);

          callback(success);
        })
        .catch((error) => {
          const success = false;

          console.log(`${SWC_FAILED_MESSAGE}
${error}`);

          callback(success);
        });
    };
  } catch (error) {
    console.log(SWC_NOT_INSTALLED_MESSAGE);
  }

  return swcTranspileFileFunction;
}

