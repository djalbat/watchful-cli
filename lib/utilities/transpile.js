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
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _necessary = require("necessary");
var _paths = require("../paths");
var _fileSystem = require("../utilities/fileSystem");
var _constants = require("../constants");
var _messages = require("../messages");
var _path1 = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var BASE64_ENCODING = _necessary.encodings.BASE64_ENCODING;
function createTranspileFileFunction(context) {
    var debug = context.debug, transpiler = context.transpiler, transpileFileFunction = transpiler === _constants.BABEL ? createBabelTranspileFileFunction(debug) : createSWCTranspileFileFunction(debug);
    return transpileFileFunction;
}
function createBabelTranspileFileFunction(debug) {
    var babelTranspileFileFunction = null;
    try {
        var babelCorePath = _path.default.resolve(_paths.BABEL_CORE_PATH), babel = require(babelCorePath), transpiler = babel; ///
        babelTranspileFileFunction = function(filePath, sourceDirectoryPath, targetDirectoryPath, callback) {
            var options;
            var sourceFilePath = (0, _path1.sourceFilePathFromFilePathAndSourceDirectoryPath)(filePath, sourceDirectoryPath), targetFilePath = (0, _path1.targetFilePathFromFilePathAndTargetDirectoryPath)(filePath, targetDirectoryPath);
            if (debug) {
                var sourceMaps = _constants.INLINE, sourceFileName = (0, _path1.sourceFileNameFromSourceFilePathAndTargetFilePath)(sourceFilePath, targetFilePath);
                options = {
                    sourceMaps: sourceMaps,
                    sourceFileName: sourceFileName
                };
            } else {
                options = {};
            }
            transpiler.transformFile(sourceFilePath, options, function(error, result) {
                if (error) {
                    var success = false, message = error.message;
                    error = message; ///
                    console.log("".concat(_messages.BABEL_FAILED_MESSAGE, "\n").concat(error));
                    callback(success);
                    return;
                }
                var code = result.code, success1 = true, targetFileContent = code; ///
                (0, _fileSystem.createParentDirectory)(targetFilePath);
                (0, _fileSystem.writeFile)(targetFilePath, targetFileContent);
                callback(success1);
            });
        };
    } catch (error) {
        console.log(_messages.BABEL_NOT_INSTALLED_MESSAGE);
    }
    return babelTranspileFileFunction;
}
function createSWCTranspileFileFunction(debug) {
    var swcTranspileFileFunction = null;
    try {
        var swcCorePath = _path.default.resolve(_paths.SWC_CORE_PATH), swc = require(swcCorePath), transpiler = swc; ///
        swcTranspileFileFunction = function(filePath, sourceDirectoryPath, targetDirectoryPath, callback) {
            var sourceFilePath = (0, _path1.sourceFilePathFromFilePathAndSourceDirectoryPath)(filePath, sourceDirectoryPath), targetFilePath = (0, _path1.targetFilePathFromFilePathAndTargetDirectoryPath)(filePath, targetDirectoryPath), filename = targetFilePath, sourceMaps = debug, sourceFileContent = (0, _fileSystem.readFile)(sourceFilePath), options = {
                filename: filename,
                sourceMaps: sourceMaps
            };
            transpiler.transform(sourceFileContent, options).then(function(output) {
                var success = true;
                var targetFileContent;
                if (debug) {
                    var code = output.code, map = output.map, mapJSON = JSON.parse(map);
                    var sources = mapJSON.sources;
                    sources = (0, _path1.sourcesFromSourcesSourceDirectoryPathAndTargetDirectoryPath)(sources, sourceDirectoryPath, targetDirectoryPath);
                    Object.assign(mapJSON, {
                        sources: sources
                    });
                    var mapJSONString = JSON.stringify(mapJSON), base64EncodedMapJSONString = Buffer.from(mapJSONString).toString(BASE64_ENCODING);
                    targetFileContent = "".concat(code, "\n").concat(_constants.SOURCE_MAP_PREAMBLE).concat(base64EncodedMapJSONString); ///
                } else {
                    var code1 = output.code;
                    targetFileContent = code1; ///
                }
                (0, _fileSystem.createParentDirectory)(targetFilePath);
                (0, _fileSystem.writeFile)(targetFilePath, targetFileContent);
                callback(success);
            }).catch(function(error) {
                var success = false;
                console.log("".concat(_messages.SWC_FAILED_MESSAGE, "\n").concat(error));
                callback(success);
            });
        };
    } catch (error) {
        console.log(_messages.SWC_NOT_INSTALLED_MESSAGE);
    }
    return swcTranspileFileFunction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhbnNwaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBlbmNvZGluZ3MgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IFNXQ19DT1JFX1BBVEgsIEJBQkVMX0NPUkVfUEFUSCB9IGZyb20gXCIuLi9wYXRoc1wiO1xuaW1wb3J0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgY3JlYXRlUGFyZW50RGlyZWN0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBCQUJFTCwgSU5MSU5FLCBTT1VSQ0VfTUFQX1BSRUFNQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1dDX0ZBSUxFRF9NRVNTQUdFLCBCQUJFTF9GQUlMRURfTUVTU0FHRSwgU1dDX05PVF9JTlNUQUxMRURfTUVTU0FHRSwgQkFCRUxfTk9UX0lOU1RBTExFRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBzb3VyY2VGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFNvdXJjZURpcmVjdG9yeVBhdGgsXG4gICAgICAgICB0YXJnZXRGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgsXG4gICAgICAgICBzb3VyY2VGaWxlTmFtZUZyb21Tb3VyY2VGaWxlUGF0aEFuZFRhcmdldEZpbGVQYXRoLFxuICAgICAgICAgc291cmNlc0Zyb21Tb3VyY2VzU291cmNlRGlyZWN0b3J5UGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuY29uc3QgeyBCQVNFNjRfRU5DT0RJTkcgfSA9IGVuY29kaW5ncztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zcGlsZUZpbGVGdW5jdGlvbihjb250ZXh0KSB7XG4gIGNvbnN0IHsgZGVidWcsIHRyYW5zcGlsZXIgfSA9IGNvbnRleHQsXG4gICAgICAgIHRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9ICh0cmFuc3BpbGVyID09PSBCQUJFTCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGRlYnVnKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24oZGVidWcpO1xuXG4gIHJldHVybiB0cmFuc3BpbGVGaWxlRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGRlYnVnKSB7XG4gIGxldCBiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBiYWJlbENvcmVQYXRoID0gcGF0aC5yZXNvbHZlKEJBQkVMX0NPUkVfUEFUSCksXG4gICAgICAgICAgYmFiZWwgPSByZXF1aXJlKGJhYmVsQ29yZVBhdGgpLFxuICAgICAgICAgIHRyYW5zcGlsZXIgPSBiYWJlbDsgLy8vXG5cbiAgICBiYWJlbFRyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxldCBvcHRpb25zO1xuXG4gICAgICBjb25zdCBzb3VyY2VGaWxlUGF0aCA9IHNvdXJjZUZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kU291cmNlRGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgICB0YXJnZXRGaWxlUGF0aCA9IHRhcmdldEZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kVGFyZ2V0RGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zdCBzb3VyY2VNYXBzID0gSU5MSU5FLCAgLy8vXG4gICAgICAgICAgICAgIHNvdXJjZUZpbGVOYW1lID0gc291cmNlRmlsZU5hbWVGcm9tU291cmNlRmlsZVBhdGhBbmRUYXJnZXRGaWxlUGF0aChzb3VyY2VGaWxlUGF0aCwgdGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc291cmNlTWFwcyxcbiAgICAgICAgICBzb3VyY2VGaWxlTmFtZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0cmFuc3BpbGVyLnRyYW5zZm9ybUZpbGUoc291cmNlRmlsZVBhdGgsIG9wdGlvbnMsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICAgICAgZXJyb3IgPSBtZXNzYWdlOyAgLy8vXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtCQUJFTF9GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcmVzdWx0LFxuICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZSxcbiAgICAgICAgICAgICAgdGFyZ2V0RmlsZUNvbnRlbnQgPSBjb2RlOyAvLy9cblxuICAgICAgICBjcmVhdGVQYXJlbnREaXJlY3RvcnkodGFyZ2V0RmlsZVBhdGgpO1xuXG4gICAgICAgIHdyaXRlRmlsZSh0YXJnZXRGaWxlUGF0aCwgdGFyZ2V0RmlsZUNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhCQUJFTF9OT1RfSU5TVEFMTEVEX01FU1NBR0UpO1xuICB9XG5cbiAgcmV0dXJuIGJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTV0NUcmFuc3BpbGVGaWxlRnVuY3Rpb24oZGVidWcpIHtcbiAgbGV0IHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzd2NDb3JlUGF0aCA9IHBhdGgucmVzb2x2ZShTV0NfQ09SRV9QQVRIKSxcbiAgICAgICAgICBzd2MgPSByZXF1aXJlKHN3Y0NvcmVQYXRoKSxcbiAgICAgICAgICB0cmFuc3BpbGVyID0gc3djOyAvLy9cblxuICAgIHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiA9IChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZUZpbGVQYXRoID0gc291cmNlRmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRTb3VyY2VEaXJlY3RvcnlQYXRoKGZpbGVQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIHRhcmdldEZpbGVQYXRoID0gdGFyZ2V0RmlsZVBhdGhGcm9tRmlsZVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoKGZpbGVQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICAgIGZpbGVuYW1lID0gdGFyZ2V0RmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZU1hcHMgPSBkZWJ1ZywgLy8vXG4gICAgICAgICAgICBzb3VyY2VGaWxlQ29udGVudCA9IHJlYWRGaWxlKHNvdXJjZUZpbGVQYXRoKSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGZpbGVuYW1lLFxuICAgICAgICAgICAgICBzb3VyY2VNYXBzXG4gICAgICAgICAgICB9O1xuXG4gICAgICB0cmFuc3BpbGVyLnRyYW5zZm9ybShzb3VyY2VGaWxlQ29udGVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgICAgbGV0IHRhcmdldEZpbGVDb250ZW50O1xuXG4gICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvZGUsIG1hcCB9ID0gb3V0cHV0LFxuICAgICAgICAgICAgICAgICAgbWFwSlNPTiA9IEpTT04ucGFyc2UobWFwKTtcblxuICAgICAgICAgICAgbGV0IHsgc291cmNlcyB9ID0gbWFwSlNPTjtcblxuICAgICAgICAgICAgc291cmNlcyA9IHNvdXJjZXNGcm9tU291cmNlc1NvdXJjZURpcmVjdG9yeVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoKHNvdXJjZXMsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1hcEpTT04sIHtcbiAgICAgICAgICAgICAgc291cmNlc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcEpTT05TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShtYXBKU09OKSxcbiAgICAgICAgICAgICAgICAgIGJhc2U2NEVuY29kZWRNYXBKU09OU3RyaW5nID0gQnVmZmVyLmZyb20obWFwSlNPTlN0cmluZykudG9TdHJpbmcoQkFTRTY0X0VOQ09ESU5HKTtcblxuICAgICAgICAgICAgdGFyZ2V0RmlsZUNvbnRlbnQgPSBgJHtjb2RlfVxuJHtTT1VSQ0VfTUFQX1BSRUFNQkxFfSR7YmFzZTY0RW5jb2RlZE1hcEpTT05TdHJpbmd9YDsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSB9ID0gb3V0cHV0O1xuXG4gICAgICAgICAgICB0YXJnZXRGaWxlQ29udGVudCA9IGNvZGU7IC8vL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNyZWF0ZVBhcmVudERpcmVjdG9yeSh0YXJnZXRGaWxlUGF0aCk7XG5cbiAgICAgICAgICB3cml0ZUZpbGUodGFyZ2V0RmlsZVBhdGgsIHRhcmdldEZpbGVDb250ZW50KTtcblxuICAgICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7U1dDX0ZBSUxFRF9NRVNTQUdFfVxuJHtlcnJvcn1gKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFNXQ19OT1RfSU5TVEFMTEVEX01FU1NBR0UpO1xuICB9XG5cbiAgcmV0dXJuIHN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbjtcbn1cblxuIl0sIm5hbWVzIjpbImNyZWF0ZVRyYW5zcGlsZUZpbGVGdW5jdGlvbiIsIkJBU0U2NF9FTkNPRElORyIsImVuY29kaW5ncyIsImNvbnRleHQiLCJkZWJ1ZyIsInRyYW5zcGlsZXIiLCJ0cmFuc3BpbGVGaWxlRnVuY3Rpb24iLCJCQUJFTCIsImNyZWF0ZUJhYmVsVHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiY3JlYXRlU1dDVHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiYmFiZWxUcmFuc3BpbGVGaWxlRnVuY3Rpb24iLCJiYWJlbENvcmVQYXRoIiwicGF0aCIsInJlc29sdmUiLCJCQUJFTF9DT1JFX1BBVEgiLCJiYWJlbCIsInJlcXVpcmUiLCJmaWxlUGF0aCIsInNvdXJjZURpcmVjdG9yeVBhdGgiLCJ0YXJnZXREaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJvcHRpb25zIiwic291cmNlRmlsZVBhdGgiLCJzb3VyY2VGaWxlUGF0aEZyb21GaWxlUGF0aEFuZFNvdXJjZURpcmVjdG9yeVBhdGgiLCJ0YXJnZXRGaWxlUGF0aCIsInRhcmdldEZpbGVQYXRoRnJvbUZpbGVQYXRoQW5kVGFyZ2V0RGlyZWN0b3J5UGF0aCIsInNvdXJjZU1hcHMiLCJJTkxJTkUiLCJzb3VyY2VGaWxlTmFtZSIsInNvdXJjZUZpbGVOYW1lRnJvbVNvdXJjZUZpbGVQYXRoQW5kVGFyZ2V0RmlsZVBhdGgiLCJ0cmFuc2Zvcm1GaWxlIiwiZXJyb3IiLCJyZXN1bHQiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJCQUJFTF9GQUlMRURfTUVTU0FHRSIsImNvZGUiLCJ0YXJnZXRGaWxlQ29udGVudCIsImNyZWF0ZVBhcmVudERpcmVjdG9yeSIsIndyaXRlRmlsZSIsIkJBQkVMX05PVF9JTlNUQUxMRURfTUVTU0FHRSIsInN3Y1RyYW5zcGlsZUZpbGVGdW5jdGlvbiIsInN3Y0NvcmVQYXRoIiwiU1dDX0NPUkVfUEFUSCIsInN3YyIsImZpbGVuYW1lIiwic291cmNlRmlsZUNvbnRlbnQiLCJyZWFkRmlsZSIsInRyYW5zZm9ybSIsInRoZW4iLCJvdXRwdXQiLCJtYXAiLCJtYXBKU09OIiwiSlNPTiIsInBhcnNlIiwic291cmNlcyIsInNvdXJjZXNGcm9tU291cmNlc1NvdXJjZURpcmVjdG9yeVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibWFwSlNPTlN0cmluZyIsInN0cmluZ2lmeSIsImJhc2U2NEVuY29kZWRNYXBKU09OU3RyaW5nIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiU09VUkNFX01BUF9QUkVBTUJMRSIsImNhdGNoIiwiU1dDX0ZBSUxFRF9NRVNTQUdFIiwiU1dDX05PVF9JTlNUQUxMRURfTUVTU0FHRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJnQkE7OztlQUFBQTs7OzJEQWZDO3lCQUVTO3FCQUVxQjswQkFDWTt5QkFDUjt3QkFDOEQ7cUJBSXJDOzs7Ozs7QUFFNUUsSUFBTSxBQUFFQyxrQkFBb0JDLG9CQUFTLENBQTdCRDtBQUVE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