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
    get checkDirectoryExists () {
        return checkDirectoryExists;
    },
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
var readFile = _necessary.fileSystemUtilities.readFile, writeFile = _necessary.fileSystemUtilities.writeFile, readDirectory = _necessary.fileSystemUtilities.readDirectory, createDirectory = _necessary.fileSystemUtilities.createDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory, checkFileExists = _necessary.fileSystemUtilities.checkFileExists, checkDirectoryExists = _necessary.fileSystemUtilities.checkDirectoryExists;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzLCBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBXX1BMVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGNvbnN0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgcmVhZERpcmVjdG9yeSwgY3JlYXRlRGlyZWN0b3J5LCBpc0VudHJ5RGlyZWN0b3J5LCBjaGVja0ZpbGVFeGlzdHMsIGNoZWNrRGlyZWN0b3J5RXhpc3RzIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IG9wZW5TeW5jLCB3cml0ZVN5bmMsIHJtZGlyU3luYywgdW5saW5rU3luYyB9ID0gZnM7XG5cbmNvbnN0IHsgUEVSSU9EX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZpbGUoZmlsZVBhdGgsIGRvbmUpIHtcbiAgdW5saW5rU3luYyhmaWxlUGF0aCk7XG5cbiAgZG9uZSAmJiBkb25lKCk7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlRXgoZmlsZVBhdGgsIGJ1ZmZlcikge1xuICBjb25zdCBmaWxlID0gb3BlblN5bmMoZmlsZVBhdGgsIFdfUExVUyk7XG5cbiAgd3JpdGVTeW5jKGZpbGUsIGJ1ZmZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgZG9uZSkge1xuICBjbGVhbkRpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcblxuICBybWRpclN5bmMoZGlyZWN0b3J5UGF0aCk7XG5cbiAgZG9uZSAmJiBkb25lKCk7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyZW50RGlyZWN0b3J5KGZpbGVQYXRoKSB7XG4gIGNvbnN0IGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICBpZiAoKGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBQRVJJT0RfQ0hBUkFDVEVSKSAmJiAoZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IG51bGwpKSB7XG4gICAgY29uc3QgcGFyZW50RGlyZWN0b3J5UGF0aCA9IGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lOyAgLy8vXG5cbiAgICBjcmVhdGVEaXJlY3RvcnkocGFyZW50RGlyZWN0b3J5UGF0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5EaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBlbnRyeVBhdGhzID0gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcblxuICBlbnRyeVBhdGhzLmZvckVhY2goKGVudHJ5UGF0aCkgPT4ge1xuICAgIGVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZGlyZWN0b3J5UGF0aCwgZW50cnlQYXRoKTsgIC8vL1xuXG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBlbnRyeVBhdGg7ICAvLy9cblxuICAgICAgY2xlYW5EaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGRlbGV0ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBlbnRyeVBhdGg7IC8vL1xuXG4gICAgICBkZWxldGVGaWxlKGZpbGVQYXRoKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNoZWNrRGlyZWN0b3J5RXhpc3RzIiwiY2hlY2tGaWxlRXhpc3RzIiwiY3JlYXRlRGlyZWN0b3J5IiwiY3JlYXRlUGFyZW50RGlyZWN0b3J5IiwiZGVsZXRlRGlyZWN0b3J5IiwiZGVsZXRlRmlsZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJ3cml0ZUZpbGVFeCIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsIm9wZW5TeW5jIiwiZnMiLCJ3cml0ZVN5bmMiLCJybWRpclN5bmMiLCJ1bmxpbmtTeW5jIiwiUEVSSU9EX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJmaWxlUGF0aCIsImRvbmUiLCJidWZmZXIiLCJmaWxlIiwiV19QTFVTIiwiZGlyZWN0b3J5UGF0aCIsImNsZWFuRGlyZWN0b3J5IiwiZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJwYXJlbnREaXJlY3RvcnlQYXRoIiwiZW50cnlQYXRocyIsImZvckVhY2giLCJlbnRyeVBhdGgiLCJlbnRyeURpcmVjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBU3VHQTtlQUFBQTs7UUFBakJDO2VBQUFBOztRQUFuQ0M7ZUFBQUE7O1FBMkJuQ0M7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQVpBQztlQUFBQTs7UUFQb0RDO2VBQUFBOztRQUFoQ0M7ZUFBQUE7O1FBQXJCQztlQUFBQTs7UUFBVUM7ZUFBQUE7O1FBYVRDO2VBQUFBOzs7eURBcEJEO3lCQUVnRDt5QkFFeEM7b0JBQzJCOzs7Ozs7QUFFM0MsSUFBUUYsV0FBaUhHLDhCQUFtQixDQUFwSUgsVUFBVUMsWUFBdUdFLDhCQUFtQixDQUExSEYsV0FBV0YsZ0JBQTRGSSw4QkFBbUIsQ0FBL0dKLGVBQWVMLGtCQUE2RVMsOEJBQW1CLENBQWhHVCxpQkFBaUJJLG1CQUE0REssOEJBQW1CLENBQS9FTCxrQkFBa0JMLGtCQUEwQ1UsOEJBQW1CLENBQTdEVixpQkFBaUJELHVCQUF5QlcsOEJBQW1CLENBQTVDWDtBQUV2RyxJQUFNLEFBQUVZLG1CQUFxQkMsd0JBQWEsQ0FBbENELGtCQUNBRSxXQUErQ0MsV0FBRSxDQUFqREQsVUFBVUUsWUFBcUNELFdBQUUsQ0FBdkNDLFdBQVdDLFlBQTBCRixXQUFFLENBQTVCRSxXQUFXQyxhQUFlSCxXQUFFLENBQWpCRztBQUV4QyxJQUFNLEFBQUVDLG1CQUFxQkMscUJBQVUsQ0FBL0JEO0FBRUQsU0FBU2QsV0FBV2dCLFFBQVEsRUFBRUMsSUFBSTtJQUN2Q0osV0FBV0c7SUFFWEMsUUFBUUEsUUFBUSxHQUFHO0FBQ3JCO0FBRU8sU0FBU1osWUFBWVcsUUFBUSxFQUFFRSxNQUFNO0lBQzFDLElBQU1DLE9BQU9WLFNBQVNPLFVBQVVJLGlCQUFNO0lBRXRDVCxVQUFVUSxNQUFNRDtBQUNsQjtBQUVPLFNBQVNuQixnQkFBZ0JzQixhQUFhLEVBQUVKLElBQUk7SUFDakRLLGVBQWVEO0lBRWZULFVBQVVTO0lBRVZKLFFBQVFBLFFBQVEsR0FBRztBQUNyQjtBQUVPLFNBQVNuQixzQkFBc0JrQixRQUFRO0lBQzVDLElBQU1PLGdDQUFnQ0MsSUFBQUEsdUNBQWlDLEVBQUNSO0lBRXhFLElBQUksQUFBQ08sa0NBQWtDVCxvQkFBc0JTLGtDQUFrQyxNQUFPO1FBQ3BHLElBQU1FLHNCQUFzQkYsK0JBQWdDLEdBQUc7UUFFL0QxQixnQkFBZ0I0QjtJQUNsQjtBQUNGO0FBRUEsU0FBU0gsZUFBZUQsYUFBYTtJQUNuQyxJQUFNSyxhQUFheEIsY0FBY21CO0lBRWpDSyxXQUFXQyxPQUFPLENBQUMsU0FBQ0M7UUFDbEJBLFlBQVlyQixpQkFBaUJjLGVBQWVPLFlBQWEsR0FBRztRQUU1RCxJQUFNQyxpQkFBaUI1QixpQkFBaUIyQjtRQUV4QyxJQUFJQyxnQkFBZ0I7WUFDbEIsSUFBTVIsa0JBQWdCTyxXQUFZLEdBQUc7WUFFckNOLGVBQWVEO1lBRWZ0QixnQkFBZ0JzQjtRQUNsQixPQUFPO1lBQ0wsSUFBTUwsV0FBV1ksV0FBVyxHQUFHO1lBRS9CNUIsV0FBV2dCO1FBQ2I7SUFDRjtBQUNGIn0=