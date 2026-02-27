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
                    const { code, map } = output, mapJSON = JSON.parse(map);
                    let { sources } = mapJSON;
                    sources = (0, _path1.sourcesFromSourcesSourceDirectoryPathAndTargetDirectoryPath)(sources, sourceDirectoryPath, targetDirectoryPath);
                    Object.assign(mapJSON, {
                        sources
                    });
                    const mapJSONString = JSON.stringify(mapJSON), base64EncodedMapJSONString = Buffer.from(mapJSONString).toString(BASE64_ENCODING);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNwaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBlbmNvZGluZ3MgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IFNXQ19DT1JFX1BBVEgsIEJBQkVMX0NPUkVfUEFUSCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuaW1wb3J0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgY3JlYXRlUGFyZW50RGlyZWN0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBCQUJFTCwgSU5MSU5FLCBTT1VSQ0VfTUFQX1BSRUFNQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1dDX0ZBSUxFRF9NRVNTQUdFLCBCQUJFTF9GQUlMRURfTUVTU0FHRSwgU1dDX05PVF9JTlNUQUxMRURfTUVTU0FHRSwgQkFCRUxfTk9UX0lOU1RBTExFRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBzb3VyY2VGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFNvdXJjZURpcmVjdG9yeVBhdGgsXG4gICAgICAgICB0YXJnZXRGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgsXG4gICAgICAgICBzb3VyY2VGaWxlTmFtZUZyb21Tb3VyY2VGaWxlUGF0aEFuZFRhcmdldEZpbGVQYXRoLFxuICAgICAgICAgc291cmNlc0Zyb21Tb3VyY2VzU291cmNlRGlyZWN0b3J5UGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuY29uc3QgeyBCQVNFNjRfRU5DT0RJTkcgfSA9IGVuY29kaW5ncztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zcGlsZUZpbGVGdW5jdGlvbihjb250ZXh0KSB7XG4gIGNvbnN0IHsgZGVidWcsIHRyYW5zcGlsZXIgfSA9IGNvbnRleHQsXG4gICAgICAgIHRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9ICh0cmFuc3BpbGVyID09PSBCQUJFTCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGRlYnVnKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24oZGVidWcpO1xuXG4gIHJldHVybiB0cmFuc3BpbGVGaWxlRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGRlYnVnKSB7XG4gIGxldCBiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBiYWJlbENvcmVQYXRoID0gcGF0aC5yZXNvbHZlKEJBQkVMX0NPUkVfUEFUSCksXG4gICAgICAgICAgYmFiZWwgPSByZXF1aXJlKGJhYmVsQ29yZVBhdGgpLFxuICAgICAgICAgIHRyYW5zcGlsZXIgPSBiYWJlbDsgLy8vXG5cbiAgICBiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxldCBvcHRpb25zO1xuXG4gICAgICBjb25zdCBzb3VyY2VGaWxlUGF0aCA9IHNvdXJjZUZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kU291cmNlRGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgICB0YXJnZXRGaWxlUGF0aCA9IHRhcmdldEZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kVGFyZ2V0RGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zdCBzb3VyY2VNYXBzID0gSU5MSU5FLCAgLy8vXG4gICAgICAgICAgICAgIHNvdXJjZUZpbGVOYW1lID0gc291cmNlRmlsZU5hbWVGcm9tU291cmNlRmlsZVBhdGhBbmRUYXJnZXRGaWxlUGF0aChzb3VyY2VGaWxlUGF0aCwgdGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc291cmNlTWFwcyxcbiAgICAgICAgICBzb3VyY2VGaWxlTmFtZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0cmFuc3BpbGVyLnRyYW5zZm9ybUZpbGUoc291cmNlRmlsZVBhdGgsIG9wdGlvbnMsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICAgICAgZXJyb3IgPSBtZXNzYWdlOyAgLy8vXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtCQUJFTF9GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcmVzdWx0LFxuICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZSxcbiAgICAgICAgICAgICAgdGFyZ2V0RmlsZUNvbnRlbnQgPSBjb2RlOyAvLy9cblxuICAgICAgICBjcmVhdGVQYXJlbnREaXJlY3RvcnkodGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgIHdyaXRlRmlsZSh0YXJnZXRGaWxlUGF0aCwgdGFyZ2V0RmlsZUNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhCQUJFTF9OT1RfSU5TVEFMTEVEX01FU1NBR0UpO1xuICB9XG5cbiAgcmV0dXJuIGJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24oZGVidWcpIHtcbiAgbGV0IHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzd2NDb3JlUGF0aCA9IHBhdGgucmVzb2x2ZShTV0NfQ09SRV9QQVRIKSxcbiAgICAgICAgICBzd2MgPSByZXF1aXJlKHN3Y0NvcmVQYXRoKSxcbiAgICAgICAgICB0cmFuc3BpbGVyID0gc3djOyAvLy9cblxuICAgIHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZUZpbGVQYXRoID0gc291cmNlRmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRTb3VyY2VEaXJlY3RvcnlQYXRoKGZpbGVQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIHRhcmdldEZpbGVQYXRoID0gdGFyZ2V0RmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoKGZpbGVQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIGZpbGVuYW1lID0gdGFyZ2V0RmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZU1hcHMgPSBkZWJ1ZywgLy8vXG4gICAgICAgICAgICBzb3VyY2VGaWxlQ29udGVudCA9IHJlYWRGaWxlKHNvdXJjZUZpbGVQYXRoKSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGZpbGVuYW1lLFxuICAgICAgICAgICAgICBzb3VyY2VNYXBzXG4gICAgICAgICAgICB9O1xuXG4gICAgICB0cmFuc3BpbGVyLnRyYW5zZm9ybShzb3VyY2VGaWxlQ29udGVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgICAgbGV0IHRhcmdldEZpbGVDb250ZW50O1xuXG4gICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvZGUsIG1hcCB9ID0gb3V0cHV0LFxuICAgICAgICAgICAgICAgICAgbWFwSlNPTiA9IEpTT04ucGFyc2UobWFwKTtcblxuICAgICAgICAgICAgbGV0IHsgc291cmNlcyB9ID0gbWFwSlNPTjtcblxuICAgICAgICAgICAgc291cmNlcyA9IHNvdXJjZXNGcm9tU291cmNlc1NvdXJjZURpcmVjdG9yeVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoKHNvdXJjZXMsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1hcEpTT04sIHtcbiAgICAgICAgICAgICAgc291cmNlc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcEpTT05TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShtYXBKU09OKSxcbiAgICAgICAgICAgICAgICAgIGJhc2U2NEVuY29kZWRNYXBKU09OU3RyaW5nID0gQnVmZmVyLmZyb20obWFwSlNPTlN0cmluZykudG9TdHJpbmcoQkFTRTY0X0VOQ09ESU5HKTtcblxuICAgICAgICAgICAgdGFyZ2V0RmlsZUNvbnRlbnQgPSBgJHtjb2RlfVxuJHtTT1VSQ0VfTUFQX1BSRUFNQkxFfSR7YmFzZTY0RW5jb2RlZE1hcEpTT05TdHJpbmd9YDsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSB9ID0gb3V0cHV0O1xuXG4gICAgICAgICAgICB0YXJnZXRGaWxlQ29udGVudCA9IGNvZGU7IC8vL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNyZWF0ZVBhcmVudERpcmVjdG9yeSh0YXJnZXRGaWxlUGF0aCk7XG5cbiAgICAgICAgICB3cml0ZUZpbGUodGFyZ2V0RmlsZVBhdGgsIHRhcmdldEZpbGVDb250ZW50KTtcblxuICAgICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7U1dDX0ZBSUxFRF9NRVNTQUdFfVxuJHtlcnJvcn1gKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFNXQ19OT1RfSU5TVEFMTEVEX01FU1NBR0UpO1xuICB9XG5cbiAgcmV0dXJuIHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbjtcbn1cblxuIl0sIm5hbWVzIjpbImNyZWF0ZVRyYW5zcGlsZUZpbGVGdW5jdGlvbiIsIkJBU0U2NF9FTkNPRElORyIsImVuY29kaW5ncyIsImNvbnRleHQiLCJkZWJ1ZyIsInRyYW5zcGlsZXIiLCJ0cmFuc3BpbGVGaWxlRnVuY3Rpb24iLCJCQUJFTCIsImNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiY3JlYXRlU1dDVHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiYmFiZWxUcmFuc3BpbGVGaWxlRnVuY3Rpb24iLCJiYWJlbENvcmVQYXRoIiwicGF0aCIsInJlc29sdmUiLCJCQUJFTF9DT1JFX1BBVEgiLCJiYWJlbCIsInJlcXVpcmUiLCJmaWxlUGF0aCIsInNvdXJjZURpcmVjdG9yeVBhdGgiLCJ0YXJnZXREaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJvcHRpb25zIiwic291cmNlRmlsZVBhdGgiLCJzb3VyY2VGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFNvdXJjZURpcmVjdG9yeVBhdGgiLCJ0YXJnZXRGaWxlUGF0aCIsInRhcmdldEZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kVGFyZ2V0RGlyZWN0b3J5UGF0aCIsInNvdXJjZU1hcHMiLCJJTkxJTkUiLCJzb3VyY2VGaWxlTmFtZSIsInNvdXJjZUZpbGVOYW1lRnJvbVNvdXJjZUZpbGVQYXRoQW5kVGFyZ2V0RmlsZVBhdGgiLCJ0cmFuc2Zvcm1GaWxlIiwiZXJyb3IiLCJyZXN1bHQiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJCQUJFTF9GQUlMRURfTUVTU0FHRSIsImNvZGUiLCJ0YXJnZXRGaWxlQ29udGVudCIsImNyZWF0ZVBhcmVudERpcmVjdG9yeSIsIndyaXRlRmlsZSIsIkJBQkVMX05PVF9JTlNUQUxMRURfTUVTU0FHRSIsInN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiIsInN3Y0NvcmVQYXRoIiwiU1dDX0NPUkVfUEFUSCIsInN3YyIsImZpbGVuYW1lIiwic291cmNlRmlsZUNvbnRlbnQiLCJyZWFkRmlsZSIsInRyYW5zZm9ybSIsInRoZW4iLCJvdXRwdXQiLCJtYXAiLCJtYXBKU09OIiwiSlNPTiIsInBhcnNlIiwic291cmNlcyIsInNvdXJjZXNGcm9tU291cmNlc1NvdXJjZURpcmVjdG9yeVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibWFwSlNPTlN0cmluZyIsInN0cmluZ2lmeSIsImJhc2U2NEVuY29kZWRNYXBKU09OU3RyaW5nIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiU09VUkNFX01BUF9QUkVBTUJMRSIsImNhdGNoIiwiU1dDX0ZBSUxFRF9NRVNTQUdFIiwiU1dDX05PVF9JTlNUQUxMRURfTUVTU0FHRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJnQkE7OztlQUFBQTs7OzZEQWZDOzJCQUVTO3VCQUVxQjs0QkFDWTsyQkFDUjswQkFDOEQ7dUJBSXJDOzs7Ozs7QUFFNUUsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR0Msb0JBQVM7QUFF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