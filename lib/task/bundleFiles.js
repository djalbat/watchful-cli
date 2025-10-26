"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BundleFilesTask;
    }
});
var _task = /*#__PURE__*/ _interop_require_default(require("../task"));
var _bundleFiles = /*#__PURE__*/ _interop_require_default(require("../bundleFiles"));
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
var BundleFilesTask = /*#__PURE__*/ function(Task) {
    _inherits(BundleFilesTask, Task);
    function BundleFilesTask() {
        _class_call_check(this, BundleFilesTask);
        return _call_super(this, BundleFilesTask, arguments);
    }
    _create_class(BundleFilesTask, null, [
        {
            key: "fromContext",
            value: function fromContext(context) {
                var bundleFilesTask = null;
                var bundleFilePath = context.bundleFilePath;
                if (bundleFilePath) {
                    bundleFilesTask = new BundleFilesTask(_bundleFiles.default, context, function() {
                    ///
                    });
                }
                return bundleFilesTask;
            }
        }
    ]);
    return BundleFilesTask;
}(_task.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL2J1bmRsZUZpbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vdGFza1wiO1xuaW1wb3J0IGJ1bmRsZUZpbGVzIGZyb20gXCIuLi9idW5kbGVGaWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdW5kbGVGaWxlc1Rhc2sgZXh0ZW5kcyBUYXNrIHtcbiAgc3RhdGljIGZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgYnVuZGxlRmlsZXNUYXNrID0gbnVsbDtcblxuICAgIGNvbnN0IHsgYnVuZGxlRmlsZVBhdGggfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoYnVuZGxlRmlsZVBhdGgpIHtcbiAgICAgIGJ1bmRsZUZpbGVzVGFzayA9IG5ldyBCdW5kbGVGaWxlc1Rhc2soYnVuZGxlRmlsZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgLy8vXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVuZGxlRmlsZXNUYXNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQnVuZGxlRmlsZXNUYXNrIiwiZnJvbUNvbnRleHQiLCJjb250ZXh0IiwiYnVuZGxlRmlsZXNUYXNrIiwiYnVuZGxlRmlsZVBhdGgiLCJidW5kbGVGaWxlcyIsIlRhc2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhKO2tFQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPO2dCQUN4QixJQUFJQyxrQkFBa0I7Z0JBRXRCLElBQU0sQUFBRUMsaUJBQW1CRixRQUFuQkU7Z0JBRVIsSUFBSUEsZ0JBQWdCO29CQUNsQkQsa0JBQWtCLElBUEhILGdCQU91Qkssb0JBQVcsRUFBRUgsU0FBUztvQkFDMUQsR0FBRztvQkFDTDtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0FibUJIO0VBQXdCTSxhQUFJIn0=