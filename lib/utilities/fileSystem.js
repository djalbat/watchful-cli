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
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _necessary = require("necessary");
const _constants = require("../constants");
const _path = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { readFile, writeFile, readDirectory, createDirectory, isEntryDirectory, checkFileExists, checkDirectoryExists } = _necessary.fileSystemUtilities;
const { concatenatePaths } = _necessary.pathUtilities, { openSync, writeSync, rmdirSync, unlinkSync } = _fs.default;
const { PERIOD_CHARACTER } = _necessary.characters;
function deleteFile(filePath, done) {
    unlinkSync(filePath);
    done && done(); ///
}
function writeFileEx(filePath, buffer) {
    const file = openSync(filePath, _constants.W_PLUS);
    writeSync(file, buffer);
}
function deleteDirectory(directoryPath, done) {
    cleanDirectory(directoryPath);
    rmdirSync(directoryPath);
    done && done(); ///
}
function createParentDirectory(filePath) {
    const filePathWithoutBottommostName = (0, _path.pathWithoutBottommostNameFromPath)(filePath);
    if (filePathWithoutBottommostName !== PERIOD_CHARACTER && filePathWithoutBottommostName !== null) {
        const parentDirectoryPath = filePathWithoutBottommostName; ///
        createDirectory(parentDirectoryPath);
    }
}
function cleanDirectory(directoryPath) {
    const entryPaths = readDirectory(directoryPath);
    entryPaths.forEach((entryPath)=>{
        entryPath = concatenatePaths(directoryPath, entryPath); ///
        const entryDirectory = isEntryDirectory(entryPath);
        if (entryDirectory) {
            const directoryPath = entryPath; ///
            cleanDirectory(directoryPath);
            deleteDirectory(directoryPath);
        } else {
            const filePath = entryPath; ///
            deleteFile(filePath);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzLCBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBXX1BMVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGNvbnN0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgcmVhZERpcmVjdG9yeSwgY3JlYXRlRGlyZWN0b3J5LCBpc0VudHJ5RGlyZWN0b3J5LCBjaGVja0ZpbGVFeGlzdHMsIGNoZWNrRGlyZWN0b3J5RXhpc3RzIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IG9wZW5TeW5jLCB3cml0ZVN5bmMsIHJtZGlyU3luYywgdW5saW5rU3luYyB9ID0gZnM7XG5cbmNvbnN0IHsgUEVSSU9EX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZpbGUoZmlsZVBhdGgsIGRvbmUpIHtcbiAgdW5saW5rU3luYyhmaWxlUGF0aCk7XG5cbiAgZG9uZSAmJiBkb25lKCk7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlRXgoZmlsZVBhdGgsIGJ1ZmZlcikge1xuICBjb25zdCBmaWxlID0gb3BlblN5bmMoZmlsZVBhdGgsIFdfUExVUyk7XG5cbiAgd3JpdGVTeW5jKGZpbGUsIGJ1ZmZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgZG9uZSkge1xuICBjbGVhbkRpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcblxuICBybWRpclN5bmMoZGlyZWN0b3J5UGF0aCk7XG5cbiAgZG9uZSAmJiBkb25lKCk7IC8vL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyZW50RGlyZWN0b3J5KGZpbGVQYXRoKSB7XG4gIGNvbnN0IGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICBpZiAoKGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBQRVJJT0RfQ0hBUkFDVEVSKSAmJiAoZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IG51bGwpKSB7XG4gICAgY29uc3QgcGFyZW50RGlyZWN0b3J5UGF0aCA9IGZpbGVQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lOyAgLy8vXG5cbiAgICBjcmVhdGVEaXJlY3RvcnkocGFyZW50RGlyZWN0b3J5UGF0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5EaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBlbnRyeVBhdGhzID0gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcblxuICBlbnRyeVBhdGhzLmZvckVhY2goKGVudHJ5UGF0aCkgPT4ge1xuICAgIGVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZGlyZWN0b3J5UGF0aCwgZW50cnlQYXRoKTsgIC8vL1xuXG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBlbnRyeVBhdGg7ICAvLy9cblxuICAgICAgY2xlYW5EaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGRlbGV0ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBlbnRyeVBhdGg7IC8vL1xuXG4gICAgICBkZWxldGVGaWxlKGZpbGVQYXRoKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNoZWNrRGlyZWN0b3J5RXhpc3RzIiwiY2hlY2tGaWxlRXhpc3RzIiwiY3JlYXRlRGlyZWN0b3J5IiwiY3JlYXRlUGFyZW50RGlyZWN0b3J5IiwiZGVsZXRlRGlyZWN0b3J5IiwiZGVsZXRlRmlsZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJ3cml0ZUZpbGVFeCIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsIm9wZW5TeW5jIiwid3JpdGVTeW5jIiwicm1kaXJTeW5jIiwidW5saW5rU3luYyIsImZzIiwiUEVSSU9EX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJmaWxlUGF0aCIsImRvbmUiLCJidWZmZXIiLCJmaWxlIiwiV19QTFVTIiwiZGlyZWN0b3J5UGF0aCIsImNsZWFuRGlyZWN0b3J5IiwiZmlsZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJwYXJlbnREaXJlY3RvcnlQYXRoIiwiZW50cnlQYXRocyIsImZvckVhY2giLCJlbnRyeVBhdGgiLCJlbnRyeURpcmVjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBU3VHQTtlQUFBQTs7UUFBakJDO2VBQUFBOztRQUFuQ0M7ZUFBQUE7O1FBMkJuQ0M7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQVpBQztlQUFBQTs7UUFQb0RDO2VBQUFBOztRQUFoQ0M7ZUFBQUE7O1FBQXJCQztlQUFBQTs7UUFBVUM7ZUFBQUE7O1FBYVRDO2VBQUFBOzs7MkRBcEJEOzJCQUVnRDsyQkFFeEM7c0JBQzJCOzs7Ozs7QUFFM0MsTUFBTSxFQUFFRixRQUFRLEVBQUVDLFNBQVMsRUFBRUYsYUFBYSxFQUFFTCxlQUFlLEVBQUVJLGdCQUFnQixFQUFFTCxlQUFlLEVBQUVELG9CQUFvQixFQUFFLEdBQUdXLDhCQUFtQjtBQUVuSixNQUFNLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdDLHdCQUFhLEVBQ3BDLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxXQUFFO0FBRXpELE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR0MscUJBQVU7QUFFaEMsU0FBU2YsV0FBV2dCLFFBQVEsRUFBRUMsSUFBSTtJQUN2Q0wsV0FBV0k7SUFFWEMsUUFBUUEsUUFBUSxHQUFHO0FBQ3JCO0FBRU8sU0FBU1osWUFBWVcsUUFBUSxFQUFFRSxNQUFNO0lBQzFDLE1BQU1DLE9BQU9WLFNBQVNPLFVBQVVJLGlCQUFNO0lBRXRDVixVQUFVUyxNQUFNRDtBQUNsQjtBQUVPLFNBQVNuQixnQkFBZ0JzQixhQUFhLEVBQUVKLElBQUk7SUFDakRLLGVBQWVEO0lBRWZWLFVBQVVVO0lBRVZKLFFBQVFBLFFBQVEsR0FBRztBQUNyQjtBQUVPLFNBQVNuQixzQkFBc0JrQixRQUFRO0lBQzVDLE1BQU1PLGdDQUFnQ0MsSUFBQUEsdUNBQWlDLEVBQUNSO0lBRXhFLElBQUksQUFBQ08sa0NBQWtDVCxvQkFBc0JTLGtDQUFrQyxNQUFPO1FBQ3BHLE1BQU1FLHNCQUFzQkYsK0JBQWdDLEdBQUc7UUFFL0QxQixnQkFBZ0I0QjtJQUNsQjtBQUNGO0FBRUEsU0FBU0gsZUFBZUQsYUFBYTtJQUNuQyxNQUFNSyxhQUFheEIsY0FBY21CO0lBRWpDSyxXQUFXQyxPQUFPLENBQUMsQ0FBQ0M7UUFDbEJBLFlBQVlyQixpQkFBaUJjLGVBQWVPLFlBQWEsR0FBRztRQUU1RCxNQUFNQyxpQkFBaUI1QixpQkFBaUIyQjtRQUV4QyxJQUFJQyxnQkFBZ0I7WUFDbEIsTUFBTVIsZ0JBQWdCTyxXQUFZLEdBQUc7WUFFckNOLGVBQWVEO1lBRWZ0QixnQkFBZ0JzQjtRQUNsQixPQUFPO1lBQ0wsTUFBTUwsV0FBV1ksV0FBVyxHQUFHO1lBRS9CNUIsV0FBV2dCO1FBQ2I7SUFDRjtBQUNGIn0=