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
var readFile = _necessary.fileSystemUtilities.readFile, writeFile = _necessary.fileSystemUtilities.writeFile, readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory, createDirectory = _necessary.fileSystemUtilities.createDirectory;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzLCBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBXX1BMVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGNvbnN0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgcmVhZERpcmVjdG9yeSwgaXNFbnRyeURpcmVjdG9yeSwgY3JlYXRlRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IG9wZW5TeW5jLCB3cml0ZVN5bmMsIHJtZGlyU3luYywgdW5saW5rU3luYyB9ID0gZnM7XG5cbmNvbnN0IHsgUEVSSU9EX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZpbGUoZmlsZVBhdGgsIGRvbmUpIHtcbiAgdW5saW5rU3luYyhmaWxlUGF0aCk7XG5cbiAgZG9uZSAmJiBkb25lKCk7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlRXgoZmlsZVBhdGgsIGJ1ZmZlcikge1xuICBjb25zdCBmaWxlID0gb3BlblN5bmMoZmlsZVBhdGgsIFdfUExVUyk7XG5cbiAgd3JpdGVTeW5jKGZpbGUsIGJ1ZmZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgZG9uZSkge1xuICBjbGVhbkRpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcblxuICBybWRpclN5bmMoZGlyZWN0b3J5UGF0aCk7XG5cbiAgZG9uZSAmJiBkb25lKCk7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyZW50RGlyZWN0b3J5KGZpbGVQYXRoKSB7XG4gIGNvbnN0IGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICBpZiAoKGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBQRVJJT0RfQ0hBUkFDVEVSKSAmJiAoZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IG51bGwpKSB7XG4gICAgY29uc3QgcGFyZW50RGlyZWN0b3J5UGF0aCA9IGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lOyAgLy8vXG5cbiAgICBjcmVhdGVEaXJlY3RvcnkocGFyZW50RGlyZWN0b3J5UGF0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5EaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBlbnRyeVBhdGhzID0gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcblxuICBlbnRyeVBhdGhzLmZvckVhY2goKGVudHJ5UGF0aCkgPT4ge1xuICAgIGVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZGlyZWN0b3J5UGF0aCwgZW50cnlQYXRoKTsgIC8vL1xuXG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBlbnRyeVBhdGg7ICAvLy9cblxuICAgICAgY2xlYW5EaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGRlbGV0ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBlbnRyeVBhdGg7IC8vL1xuXG4gICAgICBkZWxldGVGaWxlKGZpbGVQYXRoKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZURpcmVjdG9yeSIsImNyZWF0ZVBhcmVudERpcmVjdG9yeSIsImRlbGV0ZURpcmVjdG9yeSIsImRlbGV0ZUZpbGUiLCJpc0VudHJ5RGlyZWN0b3J5IiwicmVhZERpcmVjdG9yeSIsInJlYWRGaWxlIiwid3JpdGVGaWxlIiwid3JpdGVGaWxlRXgiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJvcGVuU3luYyIsImZzIiwid3JpdGVTeW5jIiwicm1kaXJTeW5jIiwidW5saW5rU3luYyIsIlBFUklPRF9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiZmlsZVBhdGgiLCJkb25lIiwiYnVmZmVyIiwiZmlsZSIsIldfUExVUyIsImRpcmVjdG9yeVBhdGgiLCJjbGVhbkRpcmVjdG9yeSIsImZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIiwicGFyZW50RGlyZWN0b3J5UGF0aCIsImVudHJ5UGF0aHMiLCJmb3JFYWNoIiwiZW50cnlQYXRoIiwiZW50cnlEaXJlY3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVNxRUE7ZUFBQUE7O1FBMkJyREM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQVpBQztlQUFBQTs7UUFQbUNDO2VBQUFBOztRQUFmQztlQUFBQTs7UUFBckJDO2VBQUFBOztRQUFVQztlQUFBQTs7UUFhVEM7ZUFBQUE7Ozt5REFwQkQ7eUJBRWdEO3lCQUV4QztvQkFDMkI7Ozs7OztBQUUzQyxJQUFRRixXQUEwRUcsOEJBQW1CLENBQTdGSCxVQUFVQyxZQUFnRUUsOEJBQW1CLENBQW5GRixXQUFXRixnQkFBcURJLDhCQUFtQixDQUF4RUosZUFBZUQsbUJBQXNDSyw4QkFBbUIsQ0FBekRMLGtCQUFrQkosa0JBQW9CUyw4QkFBbUIsQ0FBdkNUO0FBRXJFLElBQU0sQUFBRVUsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0FFLFdBQStDQyxXQUFFLENBQWpERCxVQUFVRSxZQUFxQ0QsV0FBRSxDQUF2Q0MsV0FBV0MsWUFBMEJGLFdBQUUsQ0FBNUJFLFdBQVdDLGFBQWVILFdBQUUsQ0FBakJHO0FBRXhDLElBQU0sQUFBRUMsbUJBQXFCQyxxQkFBVSxDQUEvQkQ7QUFFRCxTQUFTZCxXQUFXZ0IsUUFBUSxFQUFFQyxJQUFJO0lBQ3ZDSixXQUFXRztJQUVYQyxRQUFRQSxRQUFRLEdBQUc7QUFDckI7QUFFTyxTQUFTWixZQUFZVyxRQUFRLEVBQUVFLE1BQU07SUFDMUMsSUFBTUMsT0FBT1YsU0FBU08sVUFBVUksaUJBQU07SUFFdENULFVBQVVRLE1BQU1EO0FBQ2xCO0FBRU8sU0FBU25CLGdCQUFnQnNCLGFBQWEsRUFBRUosSUFBSTtJQUNqREssZUFBZUQ7SUFFZlQsVUFBVVM7SUFFVkosUUFBUUEsUUFBUSxHQUFHO0FBQ3JCO0FBRU8sU0FBU25CLHNCQUFzQmtCLFFBQVE7SUFDNUMsSUFBTU8sZ0NBQWdDQyxJQUFBQSx1Q0FBaUMsRUFBQ1I7SUFFeEUsSUFBSSxBQUFDTyxrQ0FBa0NULG9CQUFzQlMsa0NBQWtDLE1BQU87UUFDcEcsSUFBTUUsc0JBQXNCRiwrQkFBZ0MsR0FBRztRQUUvRDFCLGdCQUFnQjRCO0lBQ2xCO0FBQ0Y7QUFFQSxTQUFTSCxlQUFlRCxhQUFhO0lBQ25DLElBQU1LLGFBQWF4QixjQUFjbUI7SUFFakNLLFdBQVdDLE9BQU8sQ0FBQyxTQUFDQztRQUNsQkEsWUFBWXJCLGlCQUFpQmMsZUFBZU8sWUFBYSxHQUFHO1FBRTVELElBQU1DLGlCQUFpQjVCLGlCQUFpQjJCO1FBRXhDLElBQUlDLGdCQUFnQjtZQUNsQixJQUFNUixrQkFBZ0JPLFdBQVksR0FBRztZQUVyQ04sZUFBZUQ7WUFFZnRCLGdCQUFnQnNCO1FBQ2xCLE9BQU87WUFDTCxJQUFNTCxXQUFXWSxXQUFXLEdBQUc7WUFFL0I1QixXQUFXZ0I7UUFDYjtJQUNGO0FBQ0YifQ==