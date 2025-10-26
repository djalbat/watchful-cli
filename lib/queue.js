"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Queue;
    }
});
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
var Queue = /*#__PURE__*/ function() {
    function Queue(tasks, emptyHandler) {
        _class_call_check(this, Queue);
        this.tasks = tasks;
        this.emptyHandler = emptyHandler;
    }
    _create_class(Queue, [
        {
            key: "addTask",
            value: function addTask(task) {
                var empty = this.isEmpty();
                this.tasks.push(task);
                if (empty) {
                    this.executeFirstTask();
                }
            }
        },
        {
            key: "executeFirstTask",
            value: function executeFirstTask() {
                var firstTask = first(this.tasks), task = firstTask, next = this.next.bind(this);
                setTimeout(function() {
                    task.execute(function() {
                        var callback = task.getCallback();
                        callback.apply(task, arguments);
                        next();
                    });
                }, 0);
            }
        },
        {
            key: "next",
            value: function next() {
                var task = this.tasks.shift(), empty = this.isEmpty();
                if (!empty) {
                    this.executeFirstTask();
                    return;
                }
                var previousTask = task; ///
                this.emptyHandler(previousTask);
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var tasksLength = this.tasks.length, empty = tasksLength === 0;
                return empty;
            }
        }
    ], [
        {
            key: "fromEmptyHandler",
            value: function fromEmptyHandler(emptyHandler) {
                var tasks = [], queue = new Queue(tasks, emptyHandler);
                return queue;
            }
        }
    ]);
    return Queue;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWV1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xyXG5cclxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XHJcbiAgY29uc3RydWN0b3IodGFza3MsIGVtcHR5SGFuZGxlcikge1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gICAgdGhpcy5lbXB0eUhhbmRsZXIgPSBlbXB0eUhhbmRsZXI7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIGlmIChlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVGaXJzdFRhc2soKSB7XHJcbiAgICBjb25zdCBmaXJzdFRhc2sgPSBmaXJzdCh0aGlzLnRhc2tzKSxcclxuICAgICAgICAgIHRhc2sgPSBmaXJzdFRhc2ssIC8vL1xyXG4gICAgICAgICAgbmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0YXNrLmV4ZWN1dGUoZnVuY3Rpb24oKSB7IC8vL1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGFzay5nZXRDYWxsYmFjaygpO1xyXG5cclxuICAgICAgICBjYWxsYmFjay5hcHBseSh0YXNrLCBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgY29uc3QgdGFzayA9IHRoaXMudGFza3Muc2hpZnQoKSxcclxuICAgICAgICAgIGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XHJcblxyXG4gICAgaWYgKCFlbXB0eSkge1xyXG4gICAgICB0aGlzLmV4ZWN1dGVGaXJzdFRhc2soKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2aW91c1Rhc2sgPSB0YXNrOyAgLy8vXHJcblxyXG4gICAgdGhpcy5lbXB0eUhhbmRsZXIocHJldmlvdXNUYXNrKTtcclxuICB9XHJcbiAgXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIGNvbnN0IHRhc2tzTGVuZ3RoID0gdGhpcy50YXNrcy5sZW5ndGgsXHJcbiAgICAgICAgICBlbXB0eSA9ICh0YXNrc0xlbmd0aCA9PT0gMCk7XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbXB0eUhhbmRsZXIoZW1wdHlIYW5kbGVyKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdLFxyXG4gICAgICAgICAgcXVldWUgPSBuZXcgUXVldWUodGFza3MsIGVtcHR5SGFuZGxlcik7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUXVldWUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGFza3MiLCJlbXB0eUhhbmRsZXIiLCJhZGRUYXNrIiwidGFzayIsImVtcHR5IiwiaXNFbXB0eSIsInB1c2giLCJleGVjdXRlRmlyc3RUYXNrIiwiZmlyc3RUYXNrIiwibmV4dCIsImJpbmQiLCJzZXRUaW1lb3V0IiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJhcHBseSIsImFyZ3VtZW50cyIsInNoaWZ0IiwicHJldmlvdXNUYXNrIiwidGFza3NMZW5ndGgiLCJsZW5ndGgiLCJmcm9tRW1wdHlIYW5kbGVyIiwicXVldWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsc0JBQU47YUFBTUEsTUFDUEcsS0FBSyxFQUFFQyxZQUFZO2dDQURaSjtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUhISjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO2dCQUNWLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxPQUFPO2dCQUUxQixJQUFJLENBQUNMLEtBQUssQ0FBQ00sSUFBSSxDQUFDSDtnQkFFaEIsSUFBSUMsT0FBTztvQkFDVCxJQUFJLENBQUNHLGdCQUFnQjtnQkFDdkI7WUFDRjs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZVixNQUFNLElBQUksQ0FBQ0UsS0FBSyxHQUM1QkcsT0FBT0ssV0FDUEMsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUk7Z0JBRWhDQyxXQUFXO29CQUNUUixLQUFLUyxPQUFPLENBQUM7d0JBQ1gsSUFBTUMsV0FBV1YsS0FBS1csV0FBVzt3QkFFakNELFNBQVNFLEtBQUssQ0FBQ1osTUFBTWE7d0JBRXJCUDtvQkFDRjtnQkFDRixHQUFHO1lBQ0w7OztZQUVBQSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sT0FBTyxJQUFJLENBQUNILEtBQUssQ0FBQ2lCLEtBQUssSUFDdkJiLFFBQVEsSUFBSSxDQUFDQyxPQUFPO2dCQUUxQixJQUFJLENBQUNELE9BQU87b0JBQ1YsSUFBSSxDQUFDRyxnQkFBZ0I7b0JBRXJCO2dCQUNGO2dCQUVBLElBQU1XLGVBQWVmLE1BQU8sR0FBRztnQkFFL0IsSUFBSSxDQUFDRixZQUFZLENBQUNpQjtZQUNwQjs7O1lBRUFiLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYyxjQUFjLElBQUksQ0FBQ25CLEtBQUssQ0FBQ29CLE1BQU0sRUFDL0JoQixRQUFTZSxnQkFBZ0I7Z0JBRS9CLE9BQU9mO1lBQ1Q7Ozs7WUFFT2lCLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQnBCLFlBQVk7Z0JBQ2xDLElBQU1ELFFBQVEsRUFBRSxFQUNWc0IsUUFBUSxJQXhER3pCLE1Bd0RPRyxPQUFPQztnQkFFL0IsT0FBT3FCO1lBQ1Q7OztXQTNEbUJ6QiJ9