"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DeleteFileTask;
    }
});
const _task = /*#__PURE__*/ _interop_require_default(require("../task"));
const _fileSystem = require("../utilities/fileSystem");
const _path = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DeleteFileTask extends _task.default {
    static fromPath(path, context) {
        let deleteFileTask = null;
        const { sourceDirectoryPath, targetDirectoryPath } = context, sourceFilePath = path, filePath = (0, _path.pathWithoutDirectoryPathFromPathAndDirectoryPath)(sourceFilePath, sourceDirectoryPath), deletedTargetFilePath = (0, _path.combinePaths)(targetDirectoryPath, filePath), deletedTargetFileExists = (0, _fileSystem.checkFileExists)(deletedTargetFilePath);
        if (deletedTargetFileExists) {
            deleteFileTask = new DeleteFileTask(_fileSystem.deleteFile, deletedTargetFilePath, ()=>{
                const { quietly } = context;
                if (!quietly) {
                    console.log(`Deleted '${deletedTargetFilePath}'.`);
                }
            });
        }
        return deleteFileTask;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL2RlbGV0ZUZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrXCI7XG5cbmltcG9ydCB7IGRlbGV0ZUZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgY29tYmluZVBhdGhzLCBwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlRmlsZVRhc2sgZXh0ZW5kcyBUYXNrIHtcbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVsZXRlRmlsZVRhc2sgPSBudWxsO1xuXG4gICAgY29uc3QgeyBzb3VyY2VEaXJlY3RvcnlQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHNvdXJjZUZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoKHNvdXJjZUZpbGVQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoKSwgIC8vL1xuICAgICAgICAgIGRlbGV0ZWRUYXJnZXRGaWxlUGF0aCA9IGNvbWJpbmVQYXRocyh0YXJnZXREaXJlY3RvcnlQYXRoLCBmaWxlUGF0aCksXG4gICAgICAgICAgZGVsZXRlZFRhcmdldEZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMoZGVsZXRlZFRhcmdldEZpbGVQYXRoKTtcblxuICAgIGlmIChkZWxldGVkVGFyZ2V0RmlsZUV4aXN0cykge1xuICAgICAgZGVsZXRlRmlsZVRhc2sgPSBuZXcgRGVsZXRlRmlsZVRhc2soZGVsZXRlRmlsZSwgZGVsZXRlZFRhcmdldEZpbGVQYXRoLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcXVpZXRseSB9ID0gY29udGV4dDtcblxuICAgICAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRGVsZXRlZCAnJHtkZWxldGVkVGFyZ2V0RmlsZVBhdGh9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZUZpbGVUYXNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVsZXRlRmlsZVRhc2siLCJUYXNrIiwiZnJvbVBhdGgiLCJwYXRoIiwiY29udGV4dCIsImRlbGV0ZUZpbGVUYXNrIiwic291cmNlRGlyZWN0b3J5UGF0aCIsInRhcmdldERpcmVjdG9yeVBhdGgiLCJzb3VyY2VGaWxlUGF0aCIsImZpbGVQYXRoIiwicGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoIiwiZGVsZXRlZFRhcmdldEZpbGVQYXRoIiwiY29tYmluZVBhdGhzIiwiZGVsZXRlZFRhcmdldEZpbGVFeGlzdHMiLCJjaGVja0ZpbGVFeGlzdHMiLCJkZWxldGVGaWxlIiwicXVpZXRseSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7NEJBRTJCO3NCQUNtQzs7Ozs7O0FBRWhFLE1BQU1BLHVCQUF1QkMsYUFBSTtJQUM5QyxPQUFPQyxTQUFTQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtRQUM3QixJQUFJQyxpQkFBaUI7UUFFckIsTUFBTSxFQUFFQyxtQkFBbUIsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0gsU0FDL0NJLGlCQUFpQkwsTUFDakJNLFdBQVdDLElBQUFBLHNEQUFnRCxFQUFDRixnQkFBZ0JGLHNCQUM1RUssd0JBQXdCQyxJQUFBQSxrQkFBWSxFQUFDTCxxQkFBcUJFLFdBQzFESSwwQkFBMEJDLElBQUFBLDJCQUFlLEVBQUNIO1FBRWhELElBQUlFLHlCQUF5QjtZQUMzQlIsaUJBQWlCLElBQUlMLGVBQWVlLHNCQUFVLEVBQUVKLHVCQUF1QjtnQkFDckUsTUFBTSxFQUFFSyxPQUFPLEVBQUUsR0FBR1o7Z0JBRXBCLElBQUksQ0FBQ1ksU0FBUztvQkFDWkMsUUFBUUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFUCxzQkFBc0IsRUFBRSxDQUFDO2dCQUNuRDtZQUNGO1FBQ0Y7UUFFQSxPQUFPTjtJQUNUO0FBQ0YifQ==