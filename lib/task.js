"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Task;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var Task = /*#__PURE__*/ function() {
    function Task(method) {
        for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            remainingArguments[_key - 1] = arguments[_key];
        }
        _class_call_check(this, Task);
        var callback = remainingArguments.pop(); ///
        this.method = method;
        this.callback = callback;
        this.remainingArguments = remainingArguments;
    }
    _create_class(Task, [
        {
            key: "getMethod",
            value: function getMethod() {
                return this.method;
            }
        },
        {
            key: "getCallback",
            value: function getCallback() {
                return this.callback;
            }
        },
        {
            key: "getRemainingArguments",
            value: function getRemainingArguments() {
                return this.remainingArguments;
            }
        },
        {
            key: "execute",
            value: function execute(callback) {
                var _method;
                var method = this.getMethod(), remainingArguments = this.getRemainingArguments();
                (_method = method).call.apply(_method, [
                    this
                ].concat(_to_consumable_array(remainingArguments), [
                    callback
                ]));
            }
        }
    ]);
    return Task;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobWV0aG9kLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgIC8vL1xuXG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzO1xuICB9XG5cbiAgZ2V0TWV0aG9kKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0UmVtYWluaW5nQXJndW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ0FyZ3VtZW50cztcbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBtZXRob2QgPSB0aGlzLmdldE1ldGhvZCgpLFxuICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHRoaXMuZ2V0UmVtYWluaW5nQXJndW1lbnRzKCk7XG5cbiAgICBtZXRob2QuY2FsbCh0aGlzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGNhbGxiYWNrKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRhc2siLCJtZXRob2QiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjYWxsYmFjayIsInBvcCIsImdldE1ldGhvZCIsImdldENhbGxiYWNrIiwiZ2V0UmVtYWluaW5nQXJndW1lbnRzIiwiZXhlY3V0ZSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLE1BQU07UUFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7WUFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0NBRHRCRjtRQUVqQixJQUFNRyxXQUFXRCxtQkFBbUJFLEdBQUcsSUFBSyxHQUFHO1FBRS9DLElBQUksQ0FBQ0gsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0UsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNELGtCQUFrQixHQUFHQTs7a0JBTlRGOztZQVNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxrQkFBa0I7WUFDaEM7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUwsUUFBUTtvQkFJZEY7Z0JBSEEsSUFBTUEsU0FBUyxJQUFJLENBQUNJLFNBQVMsSUFDdkJILHFCQUFxQixJQUFJLENBQUNLLHFCQUFxQjtnQkFFckROLENBQUFBLFVBQUFBLFFBQU9RLElBQUksT0FBWFIsU0FBQUE7b0JBQVksSUFBSTtpQkFBa0MsQ0FBbERBLE9BQWtCLHFCQUFHQyxxQkFBckJEO29CQUF5Q0U7aUJBQVM7WUFDcEQ7OztXQTFCbUJIIn0=