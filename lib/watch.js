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
const _chokidar = /*#__PURE__*/ _interop_require_default(require("chokidar"));
const _queue = /*#__PURE__*/ _interop_require_default(require("./queue"));
const _events = require("./events");
const _constants = require("./constants");
const _watch = require("./utilities/watch");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function watch(context) {
    const { quietly, sourceDirectoryPath } = context, watchPattern = `${sourceDirectoryPath}${_constants.SOURCE_DIRECTORY_WATCH_PATTERN}`, watcher = _chokidar.default.watch(watchPattern), queue = _queue.default.fromEmptyHandler((previousTask)=>{
        (0, _watch.queueEmptyHandler)(queue, previousTask, context);
    });
    watcher.on(_events.READY_EVENT, ()=>{
        if (!quietly) {
            console.log(`Watching '${watchPattern}'.`);
        }
        watcher.on(_events.ALL_EVENT, (event, path)=>{
            (0, _watch.eventHandler)(queue, event, path, context);
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93YXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNob2tpZGFyIGZyb20gXCJjaG9raWRhclwiO1xuXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWVcIjtcblxuaW1wb3J0IHsgQUxMX0VWRU5ULCBSRUFEWV9FVkVOVCB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHsgU09VUkNFX0RJUkVDVE9SWV9XQVRDSF9QQVRURVJOIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBldmVudEhhbmRsZXIsIHF1ZXVlRW1wdHlIYW5kbGVyIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3dhdGNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhdGNoKGNvbnRleHQpIHtcbiAgY29uc3QgeyBxdWlldGx5LCBzb3VyY2VEaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0LFxuICAgICAgICB3YXRjaFBhdHRlcm4gPSBgJHtzb3VyY2VEaXJlY3RvcnlQYXRofSR7U09VUkNFX0RJUkVDVE9SWV9XQVRDSF9QQVRURVJOfWAsXG4gICAgICAgIHdhdGNoZXIgPSBjaG9raWRhci53YXRjaCh3YXRjaFBhdHRlcm4pLFxuICAgICAgICBxdWV1ZSA9IFF1ZXVlLmZyb21FbXB0eUhhbmRsZXIoKHByZXZpb3VzVGFzaykgPT4ge1xuICAgICAgICAgIHF1ZXVlRW1wdHlIYW5kbGVyKHF1ZXVlLCBwcmV2aW91c1Rhc2ssIGNvbnRleHQpO1xuICAgICAgICB9KTtcblxuICB3YXRjaGVyLm9uKFJFQURZX0VWRU5ULCAoKSA9PiB7XG4gICAgaWYgKCFxdWlldGx5KSB7XG4gICAgICBjb25zb2xlLmxvZyhgV2F0Y2hpbmcgJyR7d2F0Y2hQYXR0ZXJufScuYCk7XG4gICAgfVxuXG4gICAgd2F0Y2hlci5vbihBTExfRVZFTlQsIChldmVudCwgcGF0aCkgPT4ge1xuICAgICAgZXZlbnRIYW5kbGVyKHF1ZXVlLCBldmVudCwgcGF0aCwgY29udGV4dCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIndhdGNoIiwiY29udGV4dCIsInF1aWV0bHkiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwid2F0Y2hQYXR0ZXJuIiwiU09VUkNFX0RJUkVDVE9SWV9XQVRDSF9QQVRURVJOIiwid2F0Y2hlciIsImNob2tpZGFyIiwicXVldWUiLCJRdWV1ZSIsImZyb21FbXB0eUhhbmRsZXIiLCJwcmV2aW91c1Rhc2siLCJxdWV1ZUVtcHR5SGFuZGxlciIsIm9uIiwiUkVBRFlfRVZFTlQiLCJjb25zb2xlIiwibG9nIiwiQUxMX0VWRU5UIiwiZXZlbnQiLCJwYXRoIiwiZXZlbnRIYW5kbGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O2lFQVJIOzhEQUVIO3dCQUVxQjsyQkFDUTt1QkFDQzs7Ozs7O0FBRWpDLFNBQVNBLE1BQU1DLE9BQU87SUFDbkMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdGLFNBQ25DRyxlQUFlLEdBQUdELHNCQUFzQkUseUNBQThCLEVBQUUsRUFDeEVDLFVBQVVDLGlCQUFRLENBQUNQLEtBQUssQ0FBQ0ksZUFDekJJLFFBQVFDLGNBQUssQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQ0M7UUFDOUJDLElBQUFBLHdCQUFpQixFQUFDSixPQUFPRyxjQUFjVjtJQUN6QztJQUVOSyxRQUFRTyxFQUFFLENBQUNDLG1CQUFXLEVBQUU7UUFDdEIsSUFBSSxDQUFDWixTQUFTO1lBQ1phLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRVosYUFBYSxFQUFFLENBQUM7UUFDM0M7UUFFQUUsUUFBUU8sRUFBRSxDQUFDSSxpQkFBUyxFQUFFLENBQUNDLE9BQU9DO1lBQzVCQyxJQUFBQSxtQkFBWSxFQUFDWixPQUFPVSxPQUFPQyxNQUFNbEI7UUFDbkM7SUFDRjtBQUNGIn0=