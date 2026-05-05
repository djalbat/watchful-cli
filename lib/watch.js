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
const _queue = /*#__PURE__*/ _interop_require_default(require("./queue"));
const _events = require("./events");
const _watcher = require("./utilities/watcher");
const _watch = require("./utilities/watch");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function watch(context) {
    const { quietly, sourceDirectoryPath } = context, ignoreInitial = true, watcher = (0, _watcher.watcherFromSourceDirectoryPath)(sourceDirectoryPath, ignoreInitial), queue = _queue.default.fromEmptyHandler((previousTask)=>{
        (0, _watch.queueEmptyHandler)(queue, previousTask, context);
    });
    watcher.on(_events.READY_EVENT, ()=>{
        if (!quietly) {
            console.log(`Watching the '${sourceDirectoryPath}' directory...`);
        }
    });
    watcher.on(_events.ALL_EVENT, (event, path)=>{
        (0, _watch.eventHandler)(queue, event, path, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93YXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFF1ZXVlIGZyb20gXCIuL3F1ZXVlXCI7XG5cbmltcG9ydCB7IEFMTF9FVkVOVCwgUkVBRFlfRVZFTlQgfSBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7IHdhdGNoZXJGcm9tU291cmNlRGlyZWN0b3J5UGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy93YXRjaGVyXCI7XG5pbXBvcnQgeyBldmVudEhhbmRsZXIsIHF1ZXVlRW1wdHlIYW5kbGVyIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3dhdGNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhdGNoKGNvbnRleHQpIHtcbiAgY29uc3QgeyBxdWlldGx5LCBzb3VyY2VEaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0LFxuICAgICAgICBpZ25vcmVJbml0aWFsID0gdHJ1ZSxcbiAgICAgICAgd2F0Y2hlciA9IHdhdGNoZXJGcm9tU291cmNlRGlyZWN0b3J5UGF0aChzb3VyY2VEaXJlY3RvcnlQYXRoLCBpZ25vcmVJbml0aWFsKSxcbiAgICAgICAgcXVldWUgPSBRdWV1ZS5mcm9tRW1wdHlIYW5kbGVyKChwcmV2aW91c1Rhc2spID0+IHtcbiAgICAgICAgICBxdWV1ZUVtcHR5SGFuZGxlcihxdWV1ZSwgcHJldmlvdXNUYXNrLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgd2F0Y2hlci5vbihSRUFEWV9FVkVOVCwgKCkgPT4ge1xuICAgIGlmICghcXVpZXRseSkge1xuICAgICAgY29uc29sZS5sb2coYFdhdGNoaW5nIHRoZSAnJHtzb3VyY2VEaXJlY3RvcnlQYXRofScgZGlyZWN0b3J5Li4uYCk7XG4gICAgfVxuICB9KTtcblxuICB3YXRjaGVyLm9uKEFMTF9FVkVOVCwgKGV2ZW50LCBwYXRoKSA9PiB7XG4gICAgZXZlbnRIYW5kbGVyKHF1ZXVlLCBldmVudCwgcGF0aCwgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIndhdGNoIiwiY29udGV4dCIsInF1aWV0bHkiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwiaWdub3JlSW5pdGlhbCIsIndhdGNoZXIiLCJ3YXRjaGVyRnJvbVNvdXJjZURpcmVjdG9yeVBhdGgiLCJxdWV1ZSIsIlF1ZXVlIiwiZnJvbUVtcHR5SGFuZGxlciIsInByZXZpb3VzVGFzayIsInF1ZXVlRW1wdHlIYW5kbGVyIiwib24iLCJSRUFEWV9FVkVOVCIsImNvbnNvbGUiLCJsb2ciLCJBTExfRVZFTlQiLCJldmVudCIsInBhdGgiLCJldmVudEhhbmRsZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7OERBTk47d0JBRXFCO3lCQUNRO3VCQUNDOzs7Ozs7QUFFakMsU0FBU0EsTUFBTUMsT0FBTztJQUNuQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0YsU0FDbkNHLGdCQUFnQixNQUNoQkMsVUFBVUMsSUFBQUEsdUNBQThCLEVBQUNILHFCQUFxQkMsZ0JBQzlERyxRQUFRQyxjQUFLLENBQUNDLGdCQUFnQixDQUFDLENBQUNDO1FBQzlCQyxJQUFBQSx3QkFBaUIsRUFBQ0osT0FBT0csY0FBY1Q7SUFDekM7SUFFTkksUUFBUU8sRUFBRSxDQUFDQyxtQkFBVyxFQUFFO1FBQ3RCLElBQUksQ0FBQ1gsU0FBUztZQUNaWSxRQUFRQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUVaLG9CQUFvQixjQUFjLENBQUM7UUFDbEU7SUFDRjtJQUVBRSxRQUFRTyxFQUFFLENBQUNJLGlCQUFTLEVBQUUsQ0FBQ0MsT0FBT0M7UUFDNUJDLElBQUFBLG1CQUFZLEVBQUNaLE9BQU9VLE9BQU9DLE1BQU1qQjtJQUNuQztBQUNGIn0=