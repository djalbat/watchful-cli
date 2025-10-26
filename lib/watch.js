"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return watch;
    }
});
var _chokidar = /*#__PURE__*/ _interop_require_default(require("chokidar"));
var _queue = /*#__PURE__*/ _interop_require_default(require("./queue"));
var _events = require("./events");
var _constants = require("./constants");
var _watch = require("./utilities/watch");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function watch(context) {
    var quietly = context.quietly, sourceDirectoryPath = context.sourceDirectoryPath, watchPattern = "".concat(sourceDirectoryPath).concat(_constants.SOURCE_DIRECTORY_WATCH_PATTERN), watcher = _chokidar.default.watch(watchPattern), queue = _queue.default.fromEmptyHandler(function(previousTask) {
        return (0, _watch.queueEmptyHandler)(queue, previousTask, context);
    });
    watcher.on(_events.READY_EVENT, function() {
        if (!quietly) {
            console.log("Watching '".concat(watchPattern, "'."));
        }
        watcher.on(_events.ALL_EVENT, function(event, path) {
            return (0, _watch.eventHandler)(queue, event, path, context);
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93YXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNob2tpZGFyIGZyb20gXCJjaG9raWRhclwiO1xuXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcblxuaW1wb3J0IHsgQUxMX0VWRU5ULCBSRUFEWV9FVkVOVCB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHsgU09VUkNFX0RJUkVDVE9SWV9XQVRDSF9QQVRURVJOIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBldmVudEhhbmRsZXIsIHF1ZXVlRW1wdHlIYW5kbGVyIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3dhdGNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhdGNoKGNvbnRleHQpIHtcbiAgY29uc3QgeyBxdWlldGx5LCBzb3VyY2VEaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0LFxuICAgICAgICB3YXRjaFBhdHRlcm4gPSBgJHtzb3VyY2VEaXJlY3RvcnlQYXRofSR7U09VUkNFX0RJUkVDVE9SWV9XQVRDSF9QQVRURVJOfWAsXG4gICAgICAgIHdhdGNoZXIgPSBjaG9raWRhci53YXRjaCh3YXRjaFBhdHRlcm4pLFxuICAgICAgICBxdWV1ZSA9IFF1ZXVlLmZyb21FbXB0eUhhbmRsZXIoKHByZXZpb3VzVGFzaykgPT4gcXVldWVFbXB0eUhhbmRsZXIocXVldWUsIHByZXZpb3VzVGFzaywgY29udGV4dCkpO1xuXG4gIHdhdGNoZXIub24oUkVBRFlfRVZFTlQsICgpID0+IHtcbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBXYXRjaGluZyAnJHt3YXRjaFBhdHRlcm59Jy5gKTtcbiAgICB9XG5cbiAgICB3YXRjaGVyLm9uKEFMTF9FVkVOVCwgKGV2ZW50LCBwYXRoKSA9PiBldmVudEhhbmRsZXIocXVldWUsIGV2ZW50LCBwYXRoLCBjb250ZXh0KSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIndhdGNoIiwiY29udGV4dCIsInF1aWV0bHkiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwid2F0Y2hQYXR0ZXJuIiwiU09VUkNFX0RJUkVDVE9SWV9XQVRDSF9QQVRURVJOIiwid2F0Y2hlciIsImNob2tpZGFyIiwicXVldWUiLCJRdWV1ZSIsImZyb21FbXB0eUhhbmRsZXIiLCJwcmV2aW91c1Rhc2siLCJxdWV1ZUVtcHR5SGFuZGxlciIsIm9uIiwiUkVBRFlfRVZFTlQiLCJjb25zb2xlIiwibG9nIiwiQUxMX0VWRU5UIiwiZXZlbnQiLCJwYXRoIiwiZXZlbnRIYW5kbGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OytEQVJIOzREQUVIO3NCQUVxQjt5QkFDUTtxQkFDQzs7Ozs7O0FBRWpDLFNBQVNBLE1BQU1DLE9BQU87SUFDbkMsSUFBUUMsVUFBaUNELFFBQWpDQyxTQUFTQyxzQkFBd0JGLFFBQXhCRSxxQkFDWEMsZUFBZSxBQUFDLEdBQXdCQyxPQUF0QkYscUJBQXFELE9BQS9CRSx5Q0FBOEIsR0FDdEVDLFVBQVVDLGlCQUFRLENBQUNQLEtBQUssQ0FBQ0ksZUFDekJJLFFBQVFDLGNBQUssQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBQ0M7ZUFBaUJDLElBQUFBLHdCQUFpQixFQUFDSixPQUFPRyxjQUFjVjs7SUFFOUZLLFFBQVFPLEVBQUUsQ0FBQ0MsbUJBQVcsRUFBRTtRQUN0QixJQUFJLENBQUNaLFNBQVM7WUFDWmEsUUFBUUMsR0FBRyxDQUFDLEFBQUMsYUFBeUIsT0FBYlosY0FBYTtRQUN4QztRQUVBRSxRQUFRTyxFQUFFLENBQUNJLGlCQUFTLEVBQUUsU0FBQ0MsT0FBT0M7bUJBQVNDLElBQUFBLG1CQUFZLEVBQUNaLE9BQU9VLE9BQU9DLE1BQU1sQjs7SUFDMUU7QUFDRiJ9