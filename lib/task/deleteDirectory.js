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
var DeleteDirectoryTask = /*#__PURE__*/ function(Task) {
    _inherits(DeleteDirectoryTask, Task);
    function DeleteDirectoryTask() {
        _class_call_check(this, DeleteDirectoryTask);
        return _call_super(this, DeleteDirectoryTask, arguments);
    }
    _create_class(DeleteDirectoryTask, null, [
        {
            key: "fromPath",
            value: function fromPath(path, context) {
                var deleteDirectoryTask = null;
                var sourceDirectoryPath = context.sourceDirectoryPath, targetDirectoryPath = context.targetDirectoryPath, deletedSourceDirectoryPath = path, deletedDirectoryPath = (0, _path.pathWithoutDirectoryPathFromPathAndDirectoryPath)(deletedSourceDirectoryPath, sourceDirectoryPath), deletedTargetDirectoryPath = (0, _path.combinePaths)(targetDirectoryPath, deletedDirectoryPath), deletedTargetDirectoryExists = (0, _fileSystem.checkDirectoryExists)(deletedTargetDirectoryPath);
                if (deletedTargetDirectoryExists) {
                    deleteDirectoryTask = new DeleteDirectoryTask(_fileSystem.deleteDirectory, deletedTargetDirectoryPath, function() {
                        var quietly = context.quietly;
                        if (!quietly) {
                            console.log("Deleted '".concat(deletedTargetDirectoryPath, "'."));
                        }
                    });
                }
                return deleteDirectoryTask;
            }
        }
    ]);
    return DeleteDirectoryTask;
}(_task.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL2RlbGV0ZURpcmVjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRhc2sgZnJvbSBcIi4uL3Rhc2tcIjtcblxuaW1wb3J0IHsgZGVsZXRlRGlyZWN0b3J5LCBjaGVja0RpcmVjdG9yeUV4aXN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgY29tYmluZVBhdGhzLCBwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlRGlyZWN0b3J5VGFzayBleHRlbmRzIFRhc2sge1xuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgY29udGV4dCkge1xuICAgIGxldCBkZWxldGVEaXJlY3RvcnlUYXNrID0gbnVsbDtcblxuICAgIGNvbnN0IHsgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZWxldGVkU291cmNlRGlyZWN0b3J5UGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBkZWxldGVkRGlyZWN0b3J5UGF0aCA9IHBhdGhXaXRob3V0RGlyZWN0b3J5UGF0aEZyb21QYXRoQW5kRGlyZWN0b3J5UGF0aChkZWxldGVkU291cmNlRGlyZWN0b3J5UGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGVsZXRlZFRhcmdldERpcmVjdG9yeVBhdGggPSBjb21iaW5lUGF0aHModGFyZ2V0RGlyZWN0b3J5UGF0aCwgZGVsZXRlZERpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGRlbGV0ZWRUYXJnZXREaXJlY3RvcnlFeGlzdHMgPSBjaGVja0RpcmVjdG9yeUV4aXN0cyhkZWxldGVkVGFyZ2V0RGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAoZGVsZXRlZFRhcmdldERpcmVjdG9yeUV4aXN0cykge1xuICAgICAgZGVsZXRlRGlyZWN0b3J5VGFzayA9IG5ldyBEZWxldGVEaXJlY3RvcnlUYXNrKGRlbGV0ZURpcmVjdG9yeSwgZGVsZXRlZFRhcmdldERpcmVjdG9yeVBhdGgsICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBxdWlldGx5IH0gPSBjb250ZXh0O1xuXG4gICAgICAgIGlmICghcXVpZXRseSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBEZWxldGVkICcke2RlbGV0ZWRUYXJnZXREaXJlY3RvcnlQYXRofScuYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVEaXJlY3RvcnlUYXNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVsZXRlRGlyZWN0b3J5VGFzayIsImZyb21QYXRoIiwicGF0aCIsImNvbnRleHQiLCJkZWxldGVEaXJlY3RvcnlUYXNrIiwic291cmNlRGlyZWN0b3J5UGF0aCIsInRhcmdldERpcmVjdG9yeVBhdGgiLCJkZWxldGVkU291cmNlRGlyZWN0b3J5UGF0aCIsImRlbGV0ZWREaXJlY3RvcnlQYXRoIiwicGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoIiwiZGVsZXRlZFRhcmdldERpcmVjdG9yeVBhdGgiLCJjb21iaW5lUGF0aHMiLCJkZWxldGVkVGFyZ2V0RGlyZWN0b3J5RXhpc3RzIiwiY2hlY2tEaXJlY3RvcnlFeGlzdHMiLCJkZWxldGVEaXJlY3RvcnkiLCJxdWlldGx5IiwiY29uc29sZSIsImxvZyIsIlRhc2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKOzBCQUVxQztvQkFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDLHNCQUFzQjtnQkFFMUIsSUFBUUMsc0JBQTZDRixRQUE3Q0UscUJBQXFCQyxzQkFBd0JILFFBQXhCRyxxQkFDdkJDLDZCQUE2QkwsTUFDN0JNLHVCQUF1QkMsSUFBQUEsc0RBQWdELEVBQUNGLDRCQUE0QkYsc0JBQ3BHSyw2QkFBNkJDLElBQUFBLGtCQUFZLEVBQUNMLHFCQUFxQkUsdUJBQy9ESSwrQkFBK0JDLElBQUFBLGdDQUFvQixFQUFDSDtnQkFFMUQsSUFBSUUsOEJBQThCO29CQUNoQ1Isc0JBQXNCLElBWFBKLG9CQVcrQmMsMkJBQWUsRUFBRUosNEJBQTRCO3dCQUN6RixJQUFNLEFBQUVLLFVBQVlaLFFBQVpZO3dCQUVSLElBQUksQ0FBQ0EsU0FBUzs0QkFDWkMsUUFBUUMsR0FBRyxDQUFDLEFBQUMsWUFBc0MsT0FBM0JQLDRCQUEyQjt3QkFDckQ7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT047WUFDVDs7O1dBckJtQko7RUFBNEJrQixhQUFJIn0=