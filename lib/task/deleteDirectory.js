"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DeleteDirectoryTask;
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
class DeleteDirectoryTask extends _task.default {
    static fromPath(path, context) {
        let deleteDirectoryTask = null;
        const { sourceDirectoryPath, targetDirectoryPath } = context, deletedSourceDirectoryPath = path, deletedDirectoryPath = (0, _path.pathWithoutDirectoryPathFromPathAndDirectoryPath)(deletedSourceDirectoryPath, sourceDirectoryPath), deletedTargetDirectoryPath = (0, _path.combinePaths)(targetDirectoryPath, deletedDirectoryPath), deletedTargetDirectoryExists = (0, _fileSystem.checkDirectoryExists)(deletedTargetDirectoryPath);
        if (deletedTargetDirectoryExists) {
            deleteDirectoryTask = new DeleteDirectoryTask(_fileSystem.deleteDirectory, deletedTargetDirectoryPath, ()=>{
                const { quietly } = context;
                if (!quietly) {
                    console.log(`Deleted '${deletedTargetDirectoryPath}'.`);
                }
            });
        }
        return deleteDirectoryTask;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL2RlbGV0ZURpcmVjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRhc2sgZnJvbSBcIi4uL3Rhc2tcIjtcblxuaW1wb3J0IHsgZGVsZXRlRGlyZWN0b3J5LCBjaGVja0RpcmVjdG9yeUV4aXN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgY29tYmluZVBhdGhzLCBwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlRGlyZWN0b3J5VGFzayBleHRlbmRzIFRhc2sge1xuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgY29udGV4dCkge1xuICAgIGxldCBkZWxldGVEaXJlY3RvcnlUYXNrID0gbnVsbDtcblxuICAgIGNvbnN0IHsgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZWxldGVkU291cmNlRGlyZWN0b3J5UGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBkZWxldGVkRGlyZWN0b3J5UGF0aCA9IHBhdGhXaXRob3V0RGlyZWN0b3J5UGF0aEZyb21QYXRoQW5kRGlyZWN0b3J5UGF0aChkZWxldGVkU291cmNlRGlyZWN0b3J5UGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGVsZXRlZFRhcmdldERpcmVjdG9yeVBhdGggPSBjb21iaW5lUGF0aHModGFyZ2V0RGlyZWN0b3J5UGF0aCwgZGVsZXRlZERpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGRlbGV0ZWRUYXJnZXREaXJlY3RvcnlFeGlzdHMgPSBjaGVja0RpcmVjdG9yeUV4aXN0cyhkZWxldGVkVGFyZ2V0RGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAoZGVsZXRlZFRhcmdldERpcmVjdG9yeUV4aXN0cykge1xuICAgICAgZGVsZXRlRGlyZWN0b3J5VGFzayA9IG5ldyBEZWxldGVEaXJlY3RvcnlUYXNrKGRlbGV0ZURpcmVjdG9yeSwgZGVsZXRlZFRhcmdldERpcmVjdG9yeVBhdGgsICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBxdWlldGx5IH0gPSBjb250ZXh0O1xuXG4gICAgICAgIGlmICghcXVpZXRseSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBEZWxldGVkICcke2RlbGV0ZWRUYXJnZXREaXJlY3RvcnlQYXRofScuYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVEaXJlY3RvcnlUYXNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVsZXRlRGlyZWN0b3J5VGFzayIsIlRhc2siLCJmcm9tUGF0aCIsInBhdGgiLCJjb250ZXh0IiwiZGVsZXRlRGlyZWN0b3J5VGFzayIsInNvdXJjZURpcmVjdG9yeVBhdGgiLCJ0YXJnZXREaXJlY3RvcnlQYXRoIiwiZGVsZXRlZFNvdXJjZURpcmVjdG9yeVBhdGgiLCJkZWxldGVkRGlyZWN0b3J5UGF0aCIsInBhdGhXaXRob3V0RGlyZWN0b3J5UGF0aEZyb21QYXRoQW5kRGlyZWN0b3J5UGF0aCIsImRlbGV0ZWRUYXJnZXREaXJlY3RvcnlQYXRoIiwiY29tYmluZVBhdGhzIiwiZGVsZXRlZFRhcmdldERpcmVjdG9yeUV4aXN0cyIsImNoZWNrRGlyZWN0b3J5RXhpc3RzIiwiZGVsZXRlRGlyZWN0b3J5IiwicXVpZXRseSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7NkRBTEo7NEJBRXFDO3NCQUN5Qjs7Ozs7O0FBRWhFLE1BQU1BLDRCQUE0QkMsYUFBSTtJQUNuRCxPQUFPQyxTQUFTQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtRQUM3QixJQUFJQyxzQkFBc0I7UUFFMUIsTUFBTSxFQUFFQyxtQkFBbUIsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0gsU0FDL0NJLDZCQUE2QkwsTUFDN0JNLHVCQUF1QkMsSUFBQUEsc0RBQWdELEVBQUNGLDRCQUE0QkYsc0JBQ3BHSyw2QkFBNkJDLElBQUFBLGtCQUFZLEVBQUNMLHFCQUFxQkUsdUJBQy9ESSwrQkFBK0JDLElBQUFBLGdDQUFvQixFQUFDSDtRQUUxRCxJQUFJRSw4QkFBOEI7WUFDaENSLHNCQUFzQixJQUFJTCxvQkFBb0JlLDJCQUFlLEVBQUVKLDRCQUE0QjtnQkFDekYsTUFBTSxFQUFFSyxPQUFPLEVBQUUsR0FBR1o7Z0JBRXBCLElBQUksQ0FBQ1ksU0FBUztvQkFDWkMsUUFBUUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFUCwyQkFBMkIsRUFBRSxDQUFDO2dCQUN4RDtZQUNGO1FBQ0Y7UUFFQSxPQUFPTjtJQUNUO0FBQ0YifQ==