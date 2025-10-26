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
var _task = /*#__PURE__*/ _interop_require_default(require("../task"));
var _fileSystem = require("../utilities/fileSystem");
var _path = require("../utilities/path");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var DeleteFileTask = /*#__PURE__*/ function(Task) {
    _inherits(DeleteFileTask, Task);
    function DeleteFileTask() {
        _class_call_check(this, DeleteFileTask);
        return _call_super(this, DeleteFileTask, arguments);
    }
    _create_class(DeleteFileTask, null, [
        {
            key: "fromPath",
            value: function fromPath(path, context) {
                var deleteFileTask = null;
                var sourceDirectoryPath = context.sourceDirectoryPath, targetDirectoryPath = context.targetDirectoryPath, sourceFilePath = path, filePath = (0, _path.pathWithoutDirectoryPathFromPathAndDirectoryPath)(sourceFilePath, sourceDirectoryPath), deletedTargetFilePath = (0, _path.combinePaths)(targetDirectoryPath, filePath), deletedTargetFileExists = (0, _fileSystem.checkFileExists)(deletedTargetFilePath);
                if (deletedTargetFileExists) {
                    deleteFileTask = new DeleteFileTask(_fileSystem.deleteFile, deletedTargetFilePath, function() {
                        var quietly = context.quietly;
                        if (!quietly) {
                            console.log("Deleted '".concat(deletedTargetFilePath, "'."));
                        }
                    });
                }
                return deleteFileTask;
            }
        }
    ]);
    return DeleteFileTask;
}(_task.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL2RlbGV0ZUZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrXCI7XG5cbmltcG9ydCB7IGRlbGV0ZUZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgY29tYmluZVBhdGhzLCBwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlRmlsZVRhc2sgZXh0ZW5kcyBUYXNrIHtcbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVsZXRlRmlsZVRhc2sgPSBudWxsO1xuXG4gICAgY29uc3QgeyBzb3VyY2VEaXJlY3RvcnlQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHNvdXJjZUZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoKHNvdXJjZUZpbGVQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoKSwgIC8vL1xuICAgICAgICAgIGRlbGV0ZWRUYXJnZXRGaWxlUGF0aCA9IGNvbWJpbmVQYXRocyh0YXJnZXREaXJlY3RvcnlQYXRoLCBmaWxlUGF0aCksXG4gICAgICAgICAgZGVsZXRlZFRhcmdldEZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMoZGVsZXRlZFRhcmdldEZpbGVQYXRoKTtcblxuICAgIGlmIChkZWxldGVkVGFyZ2V0RmlsZUV4aXN0cykge1xuICAgICAgZGVsZXRlRmlsZVRhc2sgPSBuZXcgRGVsZXRlRmlsZVRhc2soZGVsZXRlRmlsZSwgZGVsZXRlZFRhcmdldEZpbGVQYXRoLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcXVpZXRseSB9ID0gY29udGV4dDtcblxuICAgICAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRGVsZXRlZCAnJHtkZWxldGVkVGFyZ2V0RmlsZVBhdGh9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZUZpbGVUYXNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVsZXRlRmlsZVRhc2siLCJmcm9tUGF0aCIsInBhdGgiLCJjb250ZXh0IiwiZGVsZXRlRmlsZVRhc2siLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwidGFyZ2V0RGlyZWN0b3J5UGF0aCIsInNvdXJjZUZpbGVQYXRoIiwiZmlsZVBhdGgiLCJwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGgiLCJkZWxldGVkVGFyZ2V0RmlsZVBhdGgiLCJjb21iaW5lUGF0aHMiLCJkZWxldGVkVGFyZ2V0RmlsZUV4aXN0cyIsImNoZWNrRmlsZUV4aXN0cyIsImRlbGV0ZUZpbGUiLCJxdWlldGx5IiwiY29uc29sZSIsImxvZyIsIlRhc2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKOzBCQUUyQjtvQkFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDLGlCQUFpQjtnQkFFckIsSUFBUUMsc0JBQTZDRixRQUE3Q0UscUJBQXFCQyxzQkFBd0JILFFBQXhCRyxxQkFDdkJDLGlCQUFpQkwsTUFDakJNLFdBQVdDLElBQUFBLHNEQUFnRCxFQUFDRixnQkFBZ0JGLHNCQUM1RUssd0JBQXdCQyxJQUFBQSxrQkFBWSxFQUFDTCxxQkFBcUJFLFdBQzFESSwwQkFBMEJDLElBQUFBLDJCQUFlLEVBQUNIO2dCQUVoRCxJQUFJRSx5QkFBeUI7b0JBQzNCUixpQkFBaUIsSUFYRkosZUFXcUJjLHNCQUFVLEVBQUVKLHVCQUF1Qjt3QkFDckUsSUFBTSxBQUFFSyxVQUFZWixRQUFaWTt3QkFFUixJQUFJLENBQUNBLFNBQVM7NEJBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLFlBQWlDLE9BQXRCUCx1QkFBc0I7d0JBQ2hEO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9OO1lBQ1Q7OztXQXJCbUJKO0VBQXVCa0IsYUFBSSJ9