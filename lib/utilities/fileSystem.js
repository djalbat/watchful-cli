"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get checkFileExists () {
        return checkFileExists;
    },
    get createDirectory () {
        return createDirectory;
    },
    get createParentDirectory () {
        return createParentDirectory;
    },
    get deleteDirectory () {
        return deleteDirectory;
    },
    get deleteFile () {
        return deleteFile;
    },
    get isEntryDirectory () {
        return isEntryDirectory;
    },
    get readDirectory () {
        return readDirectory;
    },
    get readFile () {
        return readFile;
    },
    get writeFile () {
        return writeFile;
    },
    get writeFileEx () {
        return writeFileEx;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
var _necessary = require("necessary");
var _constants = require("../constants");
var _path = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var readFile = _necessary.fileSystemUtilities.readFile, writeFile = _necessary.fileSystemUtilities.writeFile, checkFileExists = _necessary.fileSystemUtilities.checkFileExists, readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory, createDirectory = _necessary.fileSystemUtilities.createDirectory;
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, openSync = _fs.default.openSync, writeSync = _fs.default.writeSync, rmdirSync = _fs.default.rmdirSync, unlinkSync = _fs.default.unlinkSync;
var PERIOD_CHARACTER = _necessary.characters.PERIOD_CHARACTER;
function deleteFile(filePath, done) {
    unlinkSync(filePath);
    done && done(); ///
}
function writeFileEx(filePath, buffer) {
    var file = openSync(filePath, _constants.W_PLUS);
    writeSync(file, buffer);
}
function deleteDirectory(directoryPath, done) {
    cleanDirectory(directoryPath);
    rmdirSync(directoryPath);
    done && done(); ///
}
function createParentDirectory(filePath) {
    var filePathWithoutBottommostName = (0, _path.pathWithoutBottommostNameFromPath)(filePath);
    if (filePathWithoutBottommostName !== PERIOD_CHARACTER && filePathWithoutBottommostName !== null) {
        var parentDirectoryPath = filePathWithoutBottommostName; ///
        createDirectory(parentDirectoryPath);
    }
}
function cleanDirectory(directoryPath) {
    var entryPaths = readDirectory(directoryPath);
    entryPaths.forEach(function(entryPath) {
        entryPath = concatenatePaths(directoryPath, entryPath); ///
        var entryDirectory = isEntryDirectory(entryPath);
        if (entryDirectory) {
            var _$directoryPath = entryPath; ///
            cleanDirectory(_$directoryPath);
            deleteDirectory(_$directoryPath);
        } else {
            var filePath = entryPath; ///
            deleteFile(filePath);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzLCBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBXX1BMVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGNvbnN0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgY2hlY2tGaWxlRXhpc3RzLCByZWFkRGlyZWN0b3J5LCBpc0VudHJ5RGlyZWN0b3J5LCBjcmVhdGVEaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgb3BlblN5bmMsIHdyaXRlU3luYywgcm1kaXJTeW5jLCB1bmxpbmtTeW5jIH0gPSBmcztcblxuY29uc3QgeyBQRVJJT0RfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRmlsZShmaWxlUGF0aCwgZG9uZSkge1xuICB1bmxpbmtTeW5jKGZpbGVQYXRoKTtcblxuICBkb25lICYmIGRvbmUoKTsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUZpbGVFeChmaWxlUGF0aCwgYnVmZmVyKSB7XG4gIGNvbnN0IGZpbGUgPSBvcGVuU3luYyhmaWxlUGF0aCwgV19QTFVTKTtcblxuICB3cml0ZVN5bmMoZmlsZSwgYnVmZmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoLCBkb25lKSB7XG4gIGNsZWFuRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpO1xuXG4gIHJtZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICBkb25lICYmIGRvbmUoKTsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJlbnREaXJlY3RvcnkoZmlsZVBhdGgpIHtcbiAgY29uc3QgZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gIGlmICgoZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IFBFUklPRF9DSEFSQUNURVIpICYmIChmaWxlUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gbnVsbCkpIHtcbiAgICBjb25zdCBwYXJlbnREaXJlY3RvcnlQYXRoID0gZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7ICAvLy9cblxuICAgIGNyZWF0ZURpcmVjdG9yeShwYXJlbnREaXJlY3RvcnlQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbkRpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IGVudHJ5UGF0aHMgPSByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpO1xuXG4gIGVudHJ5UGF0aHMuZm9yRWFjaCgoZW50cnlQYXRoKSA9PiB7XG4gICAgZW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhkaXJlY3RvcnlQYXRoLCBlbnRyeVBhdGgpOyAgLy8vXG5cbiAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoZW50cnlQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGVudHJ5UGF0aDsgIC8vL1xuXG4gICAgICBjbGVhbkRpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgZGVsZXRlRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGVudHJ5UGF0aDsgLy8vXG5cbiAgICAgIGRlbGV0ZUZpbGUoZmlsZVBhdGgpO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY2hlY2tGaWxlRXhpc3RzIiwiY3JlYXRlRGlyZWN0b3J5IiwiY3JlYXRlUGFyZW50RGlyZWN0b3J5IiwiZGVsZXRlRGlyZWN0b3J5IiwiZGVsZXRlRmlsZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJ3cml0ZUZpbGVFeCIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsIm9wZW5TeW5jIiwiZnMiLCJ3cml0ZVN5bmMiLCJybWRpclN5bmMiLCJ1bmxpbmtTeW5jIiwiUEVSSU9EX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJmaWxlUGF0aCIsImRvbmUiLCJidWZmZXIiLCJmaWxlIiwiV19QTFVTIiwiZGlyZWN0b3J5UGF0aCIsImNsZWFuRGlyZWN0b3J5IiwiZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJwYXJlbnREaXJlY3RvcnlQYXRoIiwiZW50cnlQYXRocyIsImZvckVhY2giLCJlbnRyeVBhdGgiLCJlbnRyeURpcmVjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBU29DQTtlQUFBQTs7UUFBa0RDO2VBQUFBOztRQTJCdEVDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBUG9EQztlQUFBQTs7UUFBZkM7ZUFBQUE7O1FBQXRDQztlQUFBQTs7UUFBVUM7ZUFBQUE7O1FBYVRDO2VBQUFBOzs7eURBcEJEO3lCQUVnRDt5QkFFeEM7b0JBQzJCOzs7Ozs7QUFFM0MsSUFBUUYsV0FBMkZHLDhCQUFtQixDQUE5R0gsVUFBVUMsWUFBaUZFLDhCQUFtQixDQUFwR0YsV0FBV1Isa0JBQXNFVSw4QkFBbUIsQ0FBekZWLGlCQUFpQk0sZ0JBQXFESSw4QkFBbUIsQ0FBeEVKLGVBQWVELG1CQUFzQ0ssOEJBQW1CLENBQXpETCxrQkFBa0JKLGtCQUFvQlMsOEJBQW1CLENBQXZDVDtBQUV0RixJQUFNLEFBQUVVLG1CQUFxQkMsd0JBQWEsQ0FBbENELGtCQUNBRSxXQUErQ0MsV0FBRSxDQUFqREQsVUFBVUUsWUFBcUNELFdBQUUsQ0FBdkNDLFdBQVdDLFlBQTBCRixXQUFFLENBQTVCRSxXQUFXQyxhQUFlSCxXQUFFLENBQWpCRztBQUV4QyxJQUFNLEFBQUVDLG1CQUFxQkMscUJBQVUsQ0FBL0JEO0FBRUQsU0FBU2QsV0FBV2dCLFFBQVEsRUFBRUMsSUFBSTtJQUN2Q0osV0FBV0c7SUFFWEMsUUFBUUEsUUFBUSxHQUFHO0FBQ3JCO0FBRU8sU0FBU1osWUFBWVcsUUFBUSxFQUFFRSxNQUFNO0lBQzFDLElBQU1DLE9BQU9WLFNBQVNPLFVBQVVJLGlCQUFNO0lBRXRDVCxVQUFVUSxNQUFNRDtBQUNsQjtBQUVPLFNBQVNuQixnQkFBZ0JzQixhQUFhLEVBQUVKLElBQUk7SUFDakRLLGVBQWVEO0lBRWZULFVBQVVTO0lBRVZKLFFBQVFBLFFBQVEsR0FBRztBQUNyQjtBQUVPLFNBQVNuQixzQkFBc0JrQixRQUFRO0lBQzVDLElBQU1PLGdDQUFnQ0MsSUFBQUEsdUNBQWlDLEVBQUNSO0lBRXhFLElBQUksQUFBQ08sa0NBQWtDVCxvQkFBc0JTLGtDQUFrQyxNQUFPO1FBQ3BHLElBQU1FLHNCQUFzQkYsK0JBQWdDLEdBQUc7UUFFL0QxQixnQkFBZ0I0QjtJQUNsQjtBQUNGO0FBRUEsU0FBU0gsZUFBZUQsYUFBYTtJQUNuQyxJQUFNSyxhQUFheEIsY0FBY21CO0lBRWpDSyxXQUFXQyxPQUFPLENBQUMsU0FBQ0M7UUFDbEJBLFlBQVlyQixpQkFBaUJjLGVBQWVPLFlBQWEsR0FBRztRQUU1RCxJQUFNQyxpQkFBaUI1QixpQkFBaUIyQjtRQUV4QyxJQUFJQyxnQkFBZ0I7WUFDbEIsSUFBTVIsa0JBQWdCTyxXQUFZLEdBQUc7WUFFckNOLGVBQWVEO1lBRWZ0QixnQkFBZ0JzQjtRQUNsQixPQUFPO1lBQ0wsSUFBTUwsV0FBV1ksV0FBVyxHQUFHO1lBRS9CNUIsV0FBV2dCO1FBQ2I7SUFDRjtBQUNGIn0=