"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createTranspileFileFunction", {
    enumerable: true,
    get: function() {
        return createTranspileFileFunction;
    }
});
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _necessary = require("necessary");
const _paths = require("../paths");
const _fileSystem = require("../utilities/fileSystem");
const _constants = require("../constants");
const _messages = require("../messages");
const _path1 = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { BASE64_ENCODING } = _necessary.encodings;
function createTranspileFileFunction(context) {
    const { debug, transpiler } = context, transpileFileFunction = transpiler === _constants.BABEL ? createBabelTranspileFileFunction(debug) : createSWCTranspileFileFunction(debug);
    return transpileFileFunction;
}
function createBabelTranspileFileFunction(debug) {
    let babelTranspileFileFunction = null;
    try {
        const babelCorePath = _path.default.resolve(_paths.BABEL_CORE_PATH), babel = require(babelCorePath), transpiler = babel; ///
        babelTranspileFileFunction = (filePath, sourceDirectoryPath, targetDirectoryPath, callback)=>{
            let options;
            const sourceFilePath = (0, _path1.sourceFilePathFromFilePathAndSourceDirectoryPath)(filePath, sourceDirectoryPath), targetFilePath = (0, _path1.targetFilePathFromFilePathAndTargetDirectoryPath)(filePath, targetDirectoryPath);
            if (debug) {
                const sourceMaps = _constants.INLINE, sourceFileName = (0, _path1.sourceFileNameFromSourceFilePathAndTargetFilePath)(sourceFilePath, targetFilePath);
                options = {
                    sourceMaps,
                    sourceFileName
                };
            } else {
                options = {};
            }
            transpiler.transformFile(sourceFilePath, options, (error, result)=>{
                if (error) {
                    const success = false, { message } = error;
                    error = message; ///
                    console.log(`${_messages.BABEL_FAILED_MESSAGE}
${error}`);
                    callback(success);
                    return;
                }
                const { code } = result, success = true, targetFileContent = code; ///
                (0, _fileSystem.createParentDirectory)(targetFilePath);
                (0, _fileSystem.writeFile)(targetFilePath, targetFileContent);
                callback(success);
            });
        };
    } catch (error) {
        console.log(_messages.BABEL_NOT_INSTALLED_MESSAGE);
    }
    return babelTranspileFileFunction;
}
function createSWCTranspileFileFunction(debug) {
    let swcTranspileFileFunction = null;
    try {
        const swcCorePath = _path.default.resolve(_paths.SWC_CORE_PATH), swc = require(swcCorePath), transpiler = swc; ///
        swcTranspileFileFunction = (filePath, sourceDirectoryPath, targetDirectoryPath, callback)=>{
            const sourceFilePath = (0, _path1.sourceFilePathFromFilePathAndSourceDirectoryPath)(filePath, sourceDirectoryPath), targetFilePath = (0, _path1.targetFilePathFromFilePathAndTargetDirectoryPath)(filePath, targetDirectoryPath), filename = targetFilePath, sourceMaps = debug, sourceFileContent = (0, _fileSystem.readFile)(sourceFilePath), options = {
                filename,
                sourceMaps
            };
            transpiler.transform(sourceFileContent, options).then((output)=>{
                const success = true;
                let targetFileContent;
                if (debug) {
                    let json, jsonString;
                    const { code, map } = output;
                    jsonString -= map; ///
                    json = JSON.parse(jsonString);
                    let { sources } = json;
                    sources = (0, _path1.sourcesFromSourcesSourceDirectoryPathAndTargetDirectoryPath)(sources, sourceDirectoryPath, targetDirectoryPath);
                    Object.assign(json, {
                        sources
                    });
                    jsonString = JSON.stringify(json);
                    const base64EncodedMapJSONString = Buffer.from(jsonString).toString(BASE64_ENCODING);
                    targetFileContent = `${code}
${_constants.SOURCE_MAP_PREAMBLE}${base64EncodedMapJSONString}`; ///
                } else {
                    const { code } = output;
                    targetFileContent = code; ///
                }
                (0, _fileSystem.createParentDirectory)(targetFilePath);
                (0, _fileSystem.writeFile)(targetFilePath, targetFileContent);
                callback(success);
            }).catch((error)=>{
                const success = false;
                console.log(`${_messages.SWC_FAILED_MESSAGE}
${error}`);
                callback(success);
            });
        };
    } catch (error) {
        console.log(_messages.SWC_NOT_INSTALLED_MESSAGE);
    }
    return swcTranspileFileFunction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNwaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBlbmNvZGluZ3MgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IFNXQ19DT1JFX1BBVEgsIEJBQkVMX0NPUkVfUEFUSCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuaW1wb3J0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgY3JlYXRlUGFyZW50RGlyZWN0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBCQUJFTCwgSU5MSU5FLCBTT1VSQ0VfTUFQX1BSRUFNQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1dDX0ZBSUxFRF9NRVNTQUdFLCBCQUJFTF9GQUlMRURfTUVTU0FHRSwgU1dDX05PVF9JTlNUQUxMRURfTUVTU0FHRSwgQkFCRUxfTk9UX0lOU1RBTExFRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBzb3VyY2VGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFNvdXJjZURpcmVjdG9yeVBhdGgsXG4gICAgICAgICB0YXJnZXRGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgsXG4gICAgICAgICBzb3VyY2VGaWxlTmFtZUZyb21Tb3VyY2VGaWxlUGF0aEFuZFRhcmdldEZpbGVQYXRoLFxuICAgICAgICAgc291cmNlc0Zyb21Tb3VyY2VzU291cmNlRGlyZWN0b3J5UGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuY29uc3QgeyBCQVNFNjRfRU5DT0RJTkcgfSA9IGVuY29kaW5ncztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zcGlsZUZpbGVGdW5jdGlvbihjb250ZXh0KSB7XG4gIGNvbnN0IHsgZGVidWcsIHRyYW5zcGlsZXIgfSA9IGNvbnRleHQsXG4gICAgICAgIHRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9ICh0cmFuc3BpbGVyID09PSBCQUJFTCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGRlYnVnKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24oZGVidWcpO1xuXG4gIHJldHVybiB0cmFuc3BpbGVGaWxlRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGRlYnVnKSB7XG4gIGxldCBiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBiYWJlbENvcmVQYXRoID0gcGF0aC5yZXNvbHZlKEJBQkVMX0NPUkVfUEFUSCksXG4gICAgICAgICAgYmFiZWwgPSByZXF1aXJlKGJhYmVsQ29yZVBhdGgpLFxuICAgICAgICAgIHRyYW5zcGlsZXIgPSBiYWJlbDsgLy8vXG5cbiAgICBiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxldCBvcHRpb25zO1xuXG4gICAgICBjb25zdCBzb3VyY2VGaWxlUGF0aCA9IHNvdXJjZUZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kU291cmNlRGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgICB0YXJnZXRGaWxlUGF0aCA9IHRhcmdldEZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kVGFyZ2V0RGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zdCBzb3VyY2VNYXBzID0gSU5MSU5FLCAgLy8vXG4gICAgICAgICAgICAgIHNvdXJjZUZpbGVOYW1lID0gc291cmNlRmlsZU5hbWVGcm9tU291cmNlRmlsZVBhdGhBbmRUYXJnZXRGaWxlUGF0aChzb3VyY2VGaWxlUGF0aCwgdGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc291cmNlTWFwcyxcbiAgICAgICAgICBzb3VyY2VGaWxlTmFtZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0cmFuc3BpbGVyLnRyYW5zZm9ybUZpbGUoc291cmNlRmlsZVBhdGgsIG9wdGlvbnMsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICAgICAgZXJyb3IgPSBtZXNzYWdlOyAgLy8vXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtCQUJFTF9GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcmVzdWx0LFxuICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZSxcbiAgICAgICAgICAgICAgdGFyZ2V0RmlsZUNvbnRlbnQgPSBjb2RlOyAvLy9cblxuICAgICAgICBjcmVhdGVQYXJlbnREaXJlY3RvcnkodGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgIHdyaXRlRmlsZSh0YXJnZXRGaWxlUGF0aCwgdGFyZ2V0RmlsZUNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhCQUJFTF9OT1RfSU5TVEFMTEVEX01FU1NBR0UpO1xuICB9XG5cbiAgcmV0dXJuIGJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24oZGVidWcpIHtcbiAgbGV0IHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzd2NDb3JlUGF0aCA9IHBhdGgucmVzb2x2ZShTV0NfQ09SRV9QQVRIKSxcbiAgICAgICAgICBzd2MgPSByZXF1aXJlKHN3Y0NvcmVQYXRoKSxcbiAgICAgICAgICB0cmFuc3BpbGVyID0gc3djOyAvLy9cblxuICAgIHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZUZpbGVQYXRoID0gc291cmNlRmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRTb3VyY2VEaXJlY3RvcnlQYXRoKGZpbGVQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIHRhcmdldEZpbGVQYXRoID0gdGFyZ2V0RmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoKGZpbGVQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIGZpbGVuYW1lID0gdGFyZ2V0RmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZU1hcHMgPSBkZWJ1ZywgLy8vXG4gICAgICAgICAgICBzb3VyY2VGaWxlQ29udGVudCA9IHJlYWRGaWxlKHNvdXJjZUZpbGVQYXRoKSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGZpbGVuYW1lLFxuICAgICAgICAgICAgICBzb3VyY2VNYXBzXG4gICAgICAgICAgICB9O1xuXG4gICAgICB0cmFuc3BpbGVyLnRyYW5zZm9ybShzb3VyY2VGaWxlQ29udGVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgICAgbGV0IHRhcmdldEZpbGVDb250ZW50O1xuXG4gICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBsZXQganNvbixcbiAgICAgICAgICAgICAgICBqc29uU3RyaW5nO1xuXG4gICAgICAgICAgICBjb25zdCB7IGNvZGUsIG1hcCB9ID0gb3V0cHV0O1xuXG4gICAgICAgICAgICBqc29uU3RyaW5nIC09IG1hcDsgIC8vL1xuXG4gICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgICAgbGV0IHsgc291cmNlcyB9ID0ganNvbjtcblxuICAgICAgICAgICAgc291cmNlcyA9IHNvdXJjZXNGcm9tU291cmNlc1NvdXJjZURpcmVjdG9yeVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoKHNvdXJjZXMsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGpzb24sIHtcbiAgICAgICAgICAgICAgc291cmNlc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgICAgICAgICAgY29uc3QgYmFzZTY0RW5jb2RlZE1hcEpTT05TdHJpbmcgPSBCdWZmZXIuZnJvbShqc29uU3RyaW5nKS50b1N0cmluZyhCQVNFNjRfRU5DT0RJTkcpO1xuXG4gICAgICAgICAgICB0YXJnZXRGaWxlQ29udGVudCA9IGAke2NvZGV9XG4ke1NPVVJDRV9NQVBfUFJFQU1CTEV9JHtiYXNlNjRFbmNvZGVkTWFwSlNPTlN0cmluZ31gOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBvdXRwdXQ7XG5cbiAgICAgICAgICAgIHRhcmdldEZpbGVDb250ZW50ID0gY29kZTsgLy8vXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3JlYXRlUGFyZW50RGlyZWN0b3J5KHRhcmdldEZpbGVQYXRoKTtcblxuICAgICAgICAgIHdyaXRlRmlsZSh0YXJnZXRGaWxlUGF0aCwgdGFyZ2V0RmlsZUNvbnRlbnQpO1xuXG4gICAgICAgICAgY2FsbGJhY2soc3VjY2Vzcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtTV0NfRkFJTEVEX01FU1NBR0V9XG4ke2Vycm9yfWApO1xuXG4gICAgICAgICAgY2FsbGJhY2soc3VjY2Vzcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coU1dDX05PVF9JTlNUQUxMRURfTUVTU0FHRSk7XG4gIH1cblxuICByZXR1cm4gc3djVHJhbnNwaWxlRmlsZUZ1bmN0aW9uO1xufVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlVHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiQkFTRTY0X0VOQ09ESU5HIiwiZW5jb2RpbmdzIiwiY29udGV4dCIsImRlYnVnIiwidHJhbnNwaWxlciIsInRyYW5zcGlsZUZpbGVGdW5jdGlvbiIsIkJBQkVMIiwiY3JlYXRlQmFiZWxUcmFuc3BpbGVGaWxlRnVuY3Rpb24iLCJjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24iLCJiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiIsImJhYmVsQ29yZVBhdGgiLCJwYXRoIiwicmVzb2x2ZSIsIkJBQkVMX0NPUkVfUEFUSCIsImJhYmVsIiwicmVxdWlyZSIsImZpbGVQYXRoIiwic291cmNlRGlyZWN0b3J5UGF0aCIsInRhcmdldERpcmVjdG9yeVBhdGgiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJzb3VyY2VGaWxlUGF0aCIsInNvdXJjZUZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kU291cmNlRGlyZWN0b3J5UGF0aCIsInRhcmdldEZpbGVQYXRoIiwidGFyZ2V0RmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoIiwic291cmNlTWFwcyIsIklOTElORSIsInNvdXJjZUZpbGVOYW1lIiwic291cmNlRmlsZU5hbWVGcm9tU291cmNlRmlsZVBhdGhBbmRUYXJnZXRGaWxlUGF0aCIsInRyYW5zZm9ybUZpbGUiLCJlcnJvciIsInJlc3VsdCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIkJBQkVMX0ZBSUxFRF9NRVNTQUdFIiwiY29kZSIsInRhcmdldEZpbGVDb250ZW50IiwiY3JlYXRlUGFyZW50RGlyZWN0b3J5Iiwid3JpdGVGaWxlIiwiQkFCRUxfTk9UX0lOU1RBTExFRF9NRVNTQUdFIiwic3djVHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwic3djQ29yZVBhdGgiLCJTV0NfQ09SRV9QQVRIIiwic3djIiwiZmlsZW5hbWUiLCJzb3VyY2VGaWxlQ29udGVudCIsInJlYWRGaWxlIiwidHJhbnNmb3JtIiwidGhlbiIsIm91dHB1dCIsImpzb24iLCJqc29uU3RyaW5nIiwibWFwIiwiSlNPTiIsInBhcnNlIiwic291cmNlcyIsInNvdXJjZXNGcm9tU291cmNlc1NvdXJjZURpcmVjdG9yeVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwic3RyaW5naWZ5IiwiYmFzZTY0RW5jb2RlZE1hcEpTT05TdHJpbmciLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJTT1VSQ0VfTUFQX1BSRUFNQkxFIiwiY2F0Y2giLCJTV0NfRkFJTEVEX01FU1NBR0UiLCJTV0NfTk9UX0lOU1RBTExFRF9NRVNTQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQmdCQTs7O2VBQUFBOzs7NkRBZkM7MkJBRVM7dUJBRXFCOzRCQUNZ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