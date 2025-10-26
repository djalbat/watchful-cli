"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TranspileFileTask;
    }
});
var _task = /*#__PURE__*/ _interop_require_default(require("../task"));
var _transpileFile = /*#__PURE__*/ _interop_require_default(require("../transpileFile"));
var _metrics = require("../utilities/metrics");
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
var TranspileFileTask = /*#__PURE__*/ function(Task) {
    _inherits(TranspileFileTask, Task);
    function TranspileFileTask() {
        _class_call_check(this, TranspileFileTask);
        return _call_super(this, TranspileFileTask, arguments);
    }
    _create_class(TranspileFileTask, null, [
        {
            key: "fromPath",
            value: function fromPath(path, context) {
                var transpileFileTask = null;
                var sourceDirectoryPath = context.sourceDirectoryPath, sourceFilePath = path, filePath = (0, _path.pathWithoutDirectoryPathFromPathAndDirectoryPath)(sourceFilePath, sourceDirectoryPath); ///
                transpileFileTask = new TranspileFileTask(_transpileFile.default, filePath, context, function(success) {
                    if (success) {
                        var metrics = context.metrics;
                        if (metrics) {
                            (0, _metrics.updateCountMetric)(context);
                        }
                    }
                });
                return transpileFileTask;
            }
        }
    ]);
    return TranspileFileTask;
}(_task.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL3RyYW5zcGlsZUZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrXCI7XG5pbXBvcnQgdHJhbnNwaWxlRmlsZSBmcm9tICcuLi90cmFuc3BpbGVGaWxlJztcblxuaW1wb3J0IHsgdXBkYXRlQ291bnRNZXRyaWMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21ldHJpY3NcIjtcbmltcG9ydCB7IHBhdGhXaXRob3V0RGlyZWN0b3J5UGF0aEZyb21QYXRoQW5kRGlyZWN0b3J5UGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc3BpbGVGaWxlVGFzayBleHRlbmRzIFRhc2sge1xuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgY29udGV4dCkge1xuICAgIGxldCB0cmFuc3BpbGVGaWxlVGFzayA9IG51bGw7XG5cbiAgICBjb25zdCB7IHNvdXJjZURpcmVjdG9yeVBhdGggfSA9IGNvbnRleHQsXG4gICAgICAgICAgc291cmNlRmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGgoc291cmNlRmlsZVBhdGgsIHNvdXJjZURpcmVjdG9yeVBhdGgpOyAvLy9cblxuICAgIHRyYW5zcGlsZUZpbGVUYXNrID0gbmV3IFRyYW5zcGlsZUZpbGVUYXNrKHRyYW5zcGlsZUZpbGUsIGZpbGVQYXRoLCBjb250ZXh0LCAoc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0O1xuXG4gICAgICAgIGlmIChtZXRyaWNzKSB7XG4gICAgICAgICAgdXBkYXRlQ291bnRNZXRyaWMoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc3BpbGVGaWxlVGFzaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRyYW5zcGlsZUZpbGVUYXNrIiwiZnJvbVBhdGgiLCJwYXRoIiwiY29udGV4dCIsInRyYW5zcGlsZUZpbGVUYXNrIiwic291cmNlRGlyZWN0b3J5UGF0aCIsInNvdXJjZUZpbGVQYXRoIiwiZmlsZVBhdGgiLCJwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGgiLCJ0cmFuc3BpbGVGaWxlIiwic3VjY2VzcyIsIm1ldHJpY3MiLCJ1cGRhdGVDb3VudE1ldHJpYyIsIlRhc2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KO29FQUNTO3VCQUVRO29CQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRUMsT0FBTztnQkFDM0IsSUFBSUMsb0JBQW9CO2dCQUV4QixJQUFNLEFBQUVDLHNCQUF3QkYsUUFBeEJFLHFCQUNGQyxpQkFBaUJKLE1BQ2pCSyxXQUFXQyxJQUFBQSxzREFBZ0QsRUFBQ0YsZ0JBQWdCRCxzQkFBc0IsR0FBRztnQkFFM0dELG9CQUFvQixJQVJISixrQkFReUJTLHNCQUFhLEVBQUVGLFVBQVVKLFNBQVMsU0FBQ087b0JBQzNFLElBQUlBLFNBQVM7d0JBQ1gsSUFBTSxBQUFFQyxVQUFZUixRQUFaUTt3QkFFUixJQUFJQSxTQUFTOzRCQUNYQyxJQUFBQSwwQkFBaUIsRUFBQ1Q7d0JBQ3BCO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQW5CbUJKO0VBQTBCYSxhQUFJIn0=