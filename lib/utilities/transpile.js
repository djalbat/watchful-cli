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
                    jsonString = map; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNwaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBlbmNvZGluZ3MgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IFNXQ19DT1JFX1BBVEgsIEJBQkVMX0NPUkVfUEFUSCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuaW1wb3J0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgY3JlYXRlUGFyZW50RGlyZWN0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBCQUJFTCwgSU5MSU5FLCBTT1VSQ0VfTUFQX1BSRUFNQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1dDX0ZBSUxFRF9NRVNTQUdFLCBCQUJFTF9GQUlMRURfTUVTU0FHRSwgU1dDX05PVF9JTlNUQUxMRURfTUVTU0FHRSwgQkFCRUxfTk9UX0lOU1RBTExFRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBzb3VyY2VGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFNvdXJjZURpcmVjdG9yeVBhdGgsXG4gICAgICAgICB0YXJnZXRGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgsXG4gICAgICAgICBzb3VyY2VGaWxlTmFtZUZyb21Tb3VyY2VGaWxlUGF0aEFuZFRhcmdldEZpbGVQYXRoLFxuICAgICAgICAgc291cmNlc0Zyb21Tb3VyY2VzU291cmNlRGlyZWN0b3J5UGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuY29uc3QgeyBCQVNFNjRfRU5DT0RJTkcgfSA9IGVuY29kaW5ncztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zcGlsZUZpbGVGdW5jdGlvbihjb250ZXh0KSB7XG4gIGNvbnN0IHsgZGVidWcsIHRyYW5zcGlsZXIgfSA9IGNvbnRleHQsXG4gICAgICAgIHRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9ICh0cmFuc3BpbGVyID09PSBCQUJFTCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGRlYnVnKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24oZGVidWcpO1xuXG4gIHJldHVybiB0cmFuc3BpbGVGaWxlRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGRlYnVnKSB7XG4gIGxldCBiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBiYWJlbENvcmVQYXRoID0gcGF0aC5yZXNvbHZlKEJBQkVMX0NPUkVfUEFUSCksXG4gICAgICAgICAgYmFiZWwgPSByZXF1aXJlKGJhYmVsQ29yZVBhdGgpLFxuICAgICAgICAgIHRyYW5zcGlsZXIgPSBiYWJlbDsgLy8vXG5cbiAgICBiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxldCBvcHRpb25zO1xuXG4gICAgICBjb25zdCBzb3VyY2VGaWxlUGF0aCA9IHNvdXJjZUZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kU291cmNlRGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgICB0YXJnZXRGaWxlUGF0aCA9IHRhcmdldEZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kVGFyZ2V0RGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zdCBzb3VyY2VNYXBzID0gSU5MSU5FLCAgLy8vXG4gICAgICAgICAgICAgIHNvdXJjZUZpbGVOYW1lID0gc291cmNlRmlsZU5hbWVGcm9tU291cmNlRmlsZVBhdGhBbmRUYXJnZXRGaWxlUGF0aChzb3VyY2VGaWxlUGF0aCwgdGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc291cmNlTWFwcyxcbiAgICAgICAgICBzb3VyY2VGaWxlTmFtZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0cmFuc3BpbGVyLnRyYW5zZm9ybUZpbGUoc291cmNlRmlsZVBhdGgsIG9wdGlvbnMsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICAgICAgZXJyb3IgPSBtZXNzYWdlOyAgLy8vXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtCQUJFTF9GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcmVzdWx0LFxuICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZSxcbiAgICAgICAgICAgICAgdGFyZ2V0RmlsZUNvbnRlbnQgPSBjb2RlOyAvLy9cblxuICAgICAgICBjcmVhdGVQYXJlbnREaXJlY3RvcnkodGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgIHdyaXRlRmlsZSh0YXJnZXRGaWxlUGF0aCwgdGFyZ2V0RmlsZUNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhCQUJFTF9OT1RfSU5TVEFMTEVEX01FU1NBR0UpO1xuICB9XG5cbiAgcmV0dXJuIGJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24oZGVidWcpIHtcbiAgbGV0IHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzd2NDb3JlUGF0aCA9IHBhdGgucmVzb2x2ZShTV0NfQ09SRV9QQVRIKSxcbiAgICAgICAgICBzd2MgPSByZXF1aXJlKHN3Y0NvcmVQYXRoKSxcbiAgICAgICAgICB0cmFuc3BpbGVyID0gc3djOyAvLy9cblxuICAgIHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZUZpbGVQYXRoID0gc291cmNlRmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRTb3VyY2VEaXJlY3RvcnlQYXRoKGZpbGVQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIHRhcmdldEZpbGVQYXRoID0gdGFyZ2V0RmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoKGZpbGVQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIGZpbGVuYW1lID0gdGFyZ2V0RmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZU1hcHMgPSBkZWJ1ZywgLy8vXG4gICAgICAgICAgICBzb3VyY2VGaWxlQ29udGVudCA9IHJlYWRGaWxlKHNvdXJjZUZpbGVQYXRoKSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGZpbGVuYW1lLFxuICAgICAgICAgICAgICBzb3VyY2VNYXBzXG4gICAgICAgICAgICB9O1xuXG4gICAgICB0cmFuc3BpbGVyLnRyYW5zZm9ybShzb3VyY2VGaWxlQ29udGVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgICAgbGV0IHRhcmdldEZpbGVDb250ZW50O1xuXG4gICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBsZXQganNvbixcbiAgICAgICAgICAgICAgICBqc29uU3RyaW5nO1xuXG4gICAgICAgICAgICBjb25zdCB7IGNvZGUsIG1hcCB9ID0gb3V0cHV0O1xuXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gbWFwOyAgLy8vXG5cbiAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgICBsZXQgeyBzb3VyY2VzIH0gPSBqc29uO1xuXG4gICAgICAgICAgICBzb3VyY2VzID0gc291cmNlc0Zyb21Tb3VyY2VzU291cmNlRGlyZWN0b3J5UGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgoc291cmNlcywgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oanNvbiwge1xuICAgICAgICAgICAgICBzb3VyY2VzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gICAgICAgICAgICBjb25zdCBiYXNlNjRFbmNvZGVkTWFwSlNPTlN0cmluZyA9IEJ1ZmZlci5mcm9tKGpzb25TdHJpbmcpLnRvU3RyaW5nKEJBU0U2NF9FTkNPRElORyk7XG5cbiAgICAgICAgICAgIHRhcmdldEZpbGVDb250ZW50ID0gYCR7Y29kZX1cbiR7U09VUkNFX01BUF9QUkVBTUJMRX0ke2Jhc2U2NEVuY29kZWRNYXBKU09OU3RyaW5nfWA7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvZGUgfSA9IG91dHB1dDtcblxuICAgICAgICAgICAgdGFyZ2V0RmlsZUNvbnRlbnQgPSBjb2RlOyAvLy9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjcmVhdGVQYXJlbnREaXJlY3RvcnkodGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgICAgd3JpdGVGaWxlKHRhcmdldEZpbGVQYXRoLCB0YXJnZXRGaWxlQ29udGVudCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke1NXQ19GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhTV0NfTk9UX0lOU1RBTExFRF9NRVNTQUdFKTtcbiAgfVxuXG4gIHJldHVybiBzd2NUcmFuc3BpbGVGaWxlRnVuY3Rpb247XG59XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVUcmFuc3BpbGVGaWxlRnVuY3Rpb24iLCJCQVNFNjRfRU5DT0RJTkciLCJlbmNvZGluZ3MiLCJjb250ZXh0IiwiZGVidWciLCJ0cmFuc3BpbGVyIiwidHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiQkFCRUwiLCJjcmVhdGVCYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiIsImNyZWF0ZVNXQ1RyYW5zcGlsZUZpbGVGdW5jdGlvbiIsImJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiYmFiZWxDb3JlUGF0aCIsInBhdGgiLCJyZXNvbHZlIiwiQkFCRUxfQ09SRV9QQVRIIiwiYmFiZWwiLCJyZXF1aXJlIiwiZmlsZVBhdGgiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwidGFyZ2V0RGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwib3B0aW9ucyIsInNvdXJjZUZpbGVQYXRoIiwic291cmNlRmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRTb3VyY2VEaXJlY3RvcnlQYXRoIiwidGFyZ2V0RmlsZVBhdGgiLCJ0YXJnZXRGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgiLCJzb3VyY2VNYXBzIiwiSU5MSU5FIiwic291cmNlRmlsZU5hbWUiLCJzb3VyY2VGaWxlTmFtZUZyb21Tb3VyY2VGaWxlUGF0aEFuZFRhcmdldEZpbGVQYXRoIiwidHJhbnNmb3JtRmlsZSIsImVycm9yIiwicmVzdWx0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiQkFCRUxfRkFJTEVEX01FU1NBR0UiLCJjb2RlIiwidGFyZ2V0RmlsZUNvbnRlbnQiLCJjcmVhdGVQYXJlbnREaXJlY3RvcnkiLCJ3cml0ZUZpbGUiLCJCQUJFTF9OT1RfSU5TVEFMTEVEX01FU1NBR0UiLCJzd2NUcmFuc3BpbGVGaWxlRnVuY3Rpb24iLCJzd2NDb3JlUGF0aCIsIlNXQ19DT1JFX1BBVEgiLCJzd2MiLCJmaWxlbmFtZSIsInNvdXJjZUZpbGVDb250ZW50IiwicmVhZEZpbGUiLCJ0cmFuc2Zvcm0iLCJ0aGVuIiwib3V0cHV0IiwianNvbiIsImpzb25TdHJpbmciLCJtYXAiLCJKU09OIiwicGFyc2UiLCJzb3VyY2VzIiwic291cmNlc0Zyb21Tb3VyY2VzU291cmNlRGlyZWN0b3J5UGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgiLCJPYmplY3QiLCJhc3NpZ24iLCJzdHJpbmdpZnkiLCJiYXNlNjRFbmNvZGVkTWFwSlNPTlN0cmluZyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlNPVVJDRV9NQVBfUFJFQU1CTEUiLCJjYXRjaCIsIlNXQ19GQUlMRURfTUVTU0FHRSIsIlNXQ19OT1RfSU5TVEFMTEVEX01FU1NBR0UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCZ0JBOzs7ZUFBQUE7Ozs2REFmQzsyQkFFUzt1QkFFcUI7NEJBQ1k7MkJBQ1I7MEJBQzhEO3VCQUlyQzs7Ozs7O0FBRTVFLE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUdDLG9CQUFTO0FBRTlCLFNBQVNGLDRCQUE0QkcsT0FBTztJQUNqRCxNQUFNLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFLEdBQUdGLFNBQ3hCRyx3QkFBd0IsQUFBQ0QsZUFBZUUsZ0JBQUssR0FDbkJDLGlDQUFpQ0osU0FDL0JLLCtCQUErQkw7SUFFakUsT0FBT0U7QUFDVDtBQUVBLFNBQVNFLGlDQUFpQ0osS0FBSztJQUM3QyxJQUFJTSw2QkFBNkI7SUFFakMsSUFBSTtRQUNGLE1BQU1DLGdCQUFnQkMsYUFBSSxDQUFDQyxPQUFPLENBQUNDLHNCQUFlLEdBQzVDQyxRQUFRQyxRQUFRTCxnQkFDaEJOLGFBQWFVLE9BQU8sR0FBRztRQUU3QkwsNkJBQTZCLENBQUNPLFVBQVVDLHFCQUFxQkMscUJBQXFCQztZQUNoRixJQUFJQztZQUVKLE1BQU1DLGlCQUFpQkMsSUFBQUEsdURBQWdELEVBQUNOLFVBQVVDLHNCQUM1RU0saUJBQWlCQyxJQUFBQSx1REFBZ0QsRUFBQ1IsVUFBVUU7WUFFbEYsSUFBSWYsT0FBTztnQkFDVCxNQUFNc0IsYUFBYUMsaUJBQU0sRUFDbkJDLGlCQUFpQkMsSUFBQUEsd0RBQWlELEVBQUNQLGdCQUFnQkU7Z0JBRXpGSCxVQUFVO29CQUNSSztvQkFDQUU7Z0JBQ0Y7WUFDRixPQUFPO2dCQUNMUCxVQUFVLENBQUM7WUFDYjtZQUVBaEIsV0FBV3lCLGFBQWEsQ0FBQ1IsZ0JBQWdCRCxTQUFTLENBQUNVLE9BQU9DO2dCQUN4RCxJQUFJRCxPQUFPO29CQUNULE1BQU1FLFVBQVUsT0FDVixFQUFFQyxPQUFPLEVBQUUsR0FBR0g7b0JBRXBCQSxRQUFRRyxTQUFVLEdBQUc7b0JBRXJCQyxRQUFRQyxHQUFHLENBQUMsR0FBR0MsOEJBQW9CLENBQUM7QUFDOUMsRUFBRU4sT0FBTztvQkFFQ1gsU0FBU2E7b0JBRVQ7Z0JBQ0Y7Z0JBRUEsTUFBTSxFQUFFSyxJQUFJLEVBQUUsR0FBR04sUUFDWEMsVUFBVSxNQUNWTSxvQkFBb0JELE1BQU0sR0FBRztnQkFFbkNFLElBQUFBLGlDQUFxQixFQUFDaEI7Z0JBRXRCaUIsSUFBQUEscUJBQVMsRUFBQ2pCLGdCQUFnQmU7Z0JBRTFCbkIsU0FBU2E7WUFDWDtRQUNGO0lBQ0YsRUFBRSxPQUFPRixPQUFPO1FBQ2RJLFFBQVFDLEdBQUcsQ0FBQ00scUNBQTJCO0lBQ3pDO0lBRUEsT0FBT2hDO0FBQ1Q7QUFFQSxTQUFTRCwrQkFBK0JMLEtBQUs7SUFDM0MsSUFBSXVDLDJCQUEyQjtJQUUvQixJQUFJO1FBQ0YsTUFBTUMsY0FBY2hDLGFBQUksQ0FBQ0MsT0FBTyxDQUFDZ0Msb0JBQWEsR0FDeENDLE1BQU05QixRQUFRNEIsY0FDZHZDLGFBQWF5QyxLQUFLLEdBQUc7UUFFM0JILDJCQUEyQixDQUFDMUIsVUFBVUMscUJBQXFCQyxxQkFBcUJDO1lBQzlFLE1BQU1FLGlCQUFpQkMsSUFBQUEsdURBQWdELEVBQUNOLFVBQVVDLHNCQUM1RU0saUJBQWlCQyxJQUFBQSx1REFBZ0QsRUFBQ1IsVUFBVUUsc0JBQzVFNEIsV0FBV3ZCLGdCQUNYRSxhQUFhdEIsT0FDYjRDLG9CQUFvQkMsSUFBQUEsb0JBQVEsRUFBQzNCLGlCQUM3QkQsVUFBVTtnQkFDUjBCO2dCQUNBckI7WUFDRjtZQUVOckIsV0FBVzZDLFNBQVMsQ0FBQ0YsbUJBQW1CM0IsU0FDckM4QixJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0wsTUFBTW5CLFVBQVU7Z0JBRWhCLElBQUlNO2dCQUVKLElBQUluQyxPQUFPO29CQUNULElBQUlpRCxNQUNBQztvQkFFSixNQUFNLEVBQUVoQixJQUFJLEVBQUVpQixHQUFHLEVBQUUsR0FBR0g7b0JBRXRCRSxhQUFhQyxLQUFNLEdBQUc7b0JBRXRCRixPQUFPRyxLQUFLQyxLQUFLLENBQUNIO29CQUVsQixJQUFJLEVBQUVJLE9BQU8sRUFBRSxHQUFHTDtvQkFFbEJLLFVBQVVDLElBQUFBLGtFQUEyRCxFQUFDRCxTQUFTeEMscUJBQXFCQztvQkFFcEd5QyxPQUFPQyxNQUFNLENBQUNSLE1BQU07d0JBQ2xCSztvQkFDRjtvQkFFQUosYUFBYUUsS0FBS00sU0FBUyxDQUFDVDtvQkFFNUIsTUFBTVUsNkJBQTZCQyxPQUFPQyxJQUFJLENBQUNYLFlBQVlZLFFBQVEsQ0FBQ2pFO29CQUVwRXNDLG9CQUFvQixHQUFHRCxLQUFLO0FBQ3hDLEVBQUU2Qiw4QkFBbUIsR0FBR0osNEJBQTRCLEVBQUUsR0FBRztnQkFDL0MsT0FBTztvQkFDTCxNQUFNLEVBQUV6QixJQUFJLEVBQUUsR0FBR2M7b0JBRWpCYixvQkFBb0JELE1BQU0sR0FBRztnQkFDL0I7Z0JBRUFFLElBQUFBLGlDQUFxQixFQUFDaEI7Z0JBRXRCaUIsSUFBQUEscUJBQVMsRUFBQ2pCLGdCQUFnQmU7Z0JBRTFCbkIsU0FBU2E7WUFDWCxHQUNDbUMsS0FBSyxDQUFDLENBQUNyQztnQkFDTixNQUFNRSxVQUFVO2dCQUVoQkUsUUFBUUMsR0FBRyxDQUFDLEdBQUdpQyw0QkFBa0IsQ0FBQztBQUM1QyxFQUFFdEMsT0FBTztnQkFFQ1gsU0FBU2E7WUFDWDtRQUNKO0lBQ0YsRUFBRSxPQUFPRixPQUFPO1FBQ2RJLFFBQVFDLEdBQUcsQ0FBQ2tDLG1DQUF5QjtJQUN2QztJQUVBLE9BQU8zQjtBQUNUIn0=