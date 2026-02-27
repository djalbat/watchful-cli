"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get eventHandler () {
        return eventHandler;
    },
    get queueEmptyHandler () {
        return queueEmptyHandler;
    }
});
const _deleteFile = /*#__PURE__*/ _interop_require_default(require("../task/deleteFile"));
const _bundleFiles = /*#__PURE__*/ _interop_require_default(require("../task/bundleFiles"));
const _transpileFile = /*#__PURE__*/ _interop_require_default(require("../task/transpileFile"));
const _deleteDirectory = /*#__PURE__*/ _interop_require_default(require("../task/deleteDirectory"));
const _path = require("../utilities/path");
const _events = require("../events");
const _metrics = require("../utilities/metrics");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function eventHandler(queue, event, path, context) {
    const { metrics } = context, pathFullyQualifiedPath = (0, _path.isPathFullQualifiedPath)(path);
    if (pathFullyQualifiedPath) {
        const fullyQualifiedPath = path; ///
        path = (0, _path.pathFromFullyQualifiedPath)(fullyQualifiedPath);
    }
    if (metrics) {
        const empty = queue.isEmpty();
        if (empty) {
            (0, _metrics.startCountMetric)(context);
            (0, _metrics.startSecondsMetric)(context);
        }
    }
    switch(event){
        case _events.ADD_EVENT:
        case _events.CHANGE_EVENT:
            addOrChangeEventHandler(queue, path, context);
            break;
        case _events.UNLINK_DIR_EVENT:
            unlinkDirEventHandler(queue, path, context);
            break;
        case _events.UNLINK_EVENT:
            unlinkEventHandler(queue, path, context);
            break;
    }
}
function queueEmptyHandler(queue, previousTask, context) {
    if (previousTask instanceof _bundleFiles.default) {
        return;
    }
    const { wait, metrics } = context;
    if (metrics) {
        const count = (0, _metrics.endCountMetric)(context), seconds = (0, _metrics.endSecondsMetric)(context), sOrEmpty = count === 1 ? "" : "s";
        console.log(`Transpiled ${count} file${sOrEmpty} in ${seconds} seconds.`);
    }
    setTimeout(()=>{
        const empty = queue.isEmpty();
        if (empty) {
            const bundleFilesTask = _bundleFiles.default.fromContext(context);
            if (bundleFilesTask !== null) {
                queue.addTask(bundleFilesTask);
            }
        }
    }, wait);
}
function addOrChangeEventHandler(queue, path, context) {
    const transpileFileTask = _transpileFile.default.fromPath(path, context);
    if (transpileFileTask !== null) {
        queue.addTask(transpileFileTask);
    }
}
function unlinkDirEventHandler(queue, path, context) {
    const deleteDirectoryTask = _deleteDirectory.default.fromPath(path, context);
    if (deleteDirectoryTask !== null) {
        queue.addTask(deleteDirectoryTask);
    }
}
function unlinkEventHandler(queue, path, context) {
    const deleteFileTask = _deleteFile.default.fromPath(path, context);
    if (deleteFileTask !== null) {
        queue.addTask(deleteFileTask);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvd2F0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWxldGVGaWxlVGFzayBmcm9tIFwiLi4vdGFzay9kZWxldGVGaWxlXCI7XG5pbXBvcnQgQnVuZGxlRmlsZXNUYXNrIGZyb20gXCIuLi90YXNrL2J1bmRsZUZpbGVzXCI7XG5pbXBvcnQgVHJhbnNwaWxlRmlsZVRhc2sgZnJvbSBcIi4uL3Rhc2svdHJhbnNwaWxlRmlsZVwiO1xuaW1wb3J0IERlbGV0ZURpcmVjdG9yeVRhc2sgZnJvbSBcIi4uL3Rhc2svZGVsZXRlRGlyZWN0b3J5XCI7XG5cbmltcG9ydCB7IGlzUGF0aEZ1bGxRdWFsaWZpZWRQYXRoLCBwYXRoRnJvbUZ1bGx5UXVhbGlmaWVkUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgQUREX0VWRU5ULCBDSEFOR0VfRVZFTlQsIFVOTElOS19FVkVOVCwgVU5MSU5LX0RJUl9FVkVOVCB9IGZyb20gXCIuLi9ldmVudHNcIjtcbmltcG9ydCB7IHN0YXJ0Q291bnRNZXRyaWMsIHN0YXJ0U2Vjb25kc01ldHJpYywgZW5kQ291bnRNZXRyaWMsIGVuZFNlY29uZHNNZXRyaWMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21ldHJpY3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50SGFuZGxlcihxdWV1ZSwgZXZlbnQsIHBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0LFxuICAgICAgICBwYXRoRnVsbHlRdWFsaWZpZWRQYXRoID0gaXNQYXRoRnVsbFF1YWxpZmllZFBhdGgocGF0aCk7XG5cbiAgaWYgKHBhdGhGdWxseVF1YWxpZmllZFBhdGgpIHtcbiAgICBjb25zdCBmdWxseVF1YWxpZmllZFBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBwYXRoID0gcGF0aEZyb21GdWxseVF1YWxpZmllZFBhdGgoZnVsbHlRdWFsaWZpZWRQYXRoKTtcbiAgfVxuXG4gIGlmIChtZXRyaWNzKSB7XG4gICAgY29uc3QgZW1wdHkgPSBxdWV1ZS5pc0VtcHR5KCk7XG5cbiAgICBpZiAoZW1wdHkpIHtcbiAgICAgIHN0YXJ0Q291bnRNZXRyaWMoY29udGV4dCk7XG4gICAgICBzdGFydFNlY29uZHNNZXRyaWMoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgQUREX0VWRU5UIDpcbiAgICBjYXNlIENIQU5HRV9FVkVOVCA6XG4gICAgICBhZGRPckNoYW5nZUV2ZW50SGFuZGxlcihxdWV1ZSwgcGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBVTkxJTktfRElSX0VWRU5UIDpcbiAgICAgIHVubGlua0RpckV2ZW50SGFuZGxlcihxdWV1ZSwgcGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBVTkxJTktfRVZFTlQgOlxuICAgICAgdW5saW5rRXZlbnRIYW5kbGVyKHF1ZXVlLCBwYXRoLCBjb250ZXh0KTtcblxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXVlRW1wdHlIYW5kbGVyKHF1ZXVlLCBwcmV2aW91c1Rhc2ssIGNvbnRleHQpIHtcbiAgaWYgKHByZXZpb3VzVGFzayBpbnN0YW5jZW9mIEJ1bmRsZUZpbGVzVGFzaykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgd2FpdCwgbWV0cmljcyB9ID0gY29udGV4dDtcblxuICBpZiAobWV0cmljcykge1xuICAgIGNvbnN0IGNvdW50ID0gZW5kQ291bnRNZXRyaWMoY29udGV4dCksXG4gICAgICAgICAgc2Vjb25kcyA9IGVuZFNlY29uZHNNZXRyaWMoY29udGV4dCksXG4gICAgICAgICAgc09yRW1wdHkgPSAoY291bnQgPT09IDEpID8gXCJcIiA6IFwic1wiO1xuXG4gICAgY29uc29sZS5sb2coYFRyYW5zcGlsZWQgJHtjb3VudH0gZmlsZSR7c09yRW1wdHl9IGluICR7c2Vjb25kc30gc2Vjb25kcy5gKTtcbiAgfVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5ID0gcXVldWUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKGVtcHR5KSB7XG4gICAgICBjb25zdCBidW5kbGVGaWxlc1Rhc2sgPSBCdW5kbGVGaWxlc1Rhc2suZnJvbUNvbnRleHQoY29udGV4dCk7XG5cbiAgICAgIGlmIChidW5kbGVGaWxlc1Rhc2sgIT09IG51bGwpIHtcbiAgICAgICAgcXVldWUuYWRkVGFzayhidW5kbGVGaWxlc1Rhc2spO1xuICAgICAgfVxuICAgIH1cbiAgfSwgd2FpdCk7XG59XG5cbmZ1bmN0aW9uIGFkZE9yQ2hhbmdlRXZlbnRIYW5kbGVyKHF1ZXVlLCBwYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRyYW5zcGlsZUZpbGVUYXNrID0gVHJhbnNwaWxlRmlsZVRhc2suZnJvbVBhdGgocGF0aCwgY29udGV4dCk7XG5cbiAgaWYgKHRyYW5zcGlsZUZpbGVUYXNrICE9PSBudWxsKSB7XG4gICAgcXVldWUuYWRkVGFzayh0cmFuc3BpbGVGaWxlVGFzayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5saW5rRGlyRXZlbnRIYW5kbGVyKHF1ZXVlLCBwYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlbGV0ZURpcmVjdG9yeVRhc2sgPSBEZWxldGVEaXJlY3RvcnlUYXNrLmZyb21QYXRoKHBhdGgsIGNvbnRleHQpO1xuXG4gIGlmIChkZWxldGVEaXJlY3RvcnlUYXNrICE9PSBudWxsKSB7XG4gICAgcXVldWUuYWRkVGFzayhkZWxldGVEaXJlY3RvcnlUYXNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxpbmtFdmVudEhhbmRsZXIocXVldWUsIHBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVsZXRlRmlsZVRhc2sgPSBEZWxldGVGaWxlVGFzay5mcm9tUGF0aChwYXRoLCBjb250ZXh0KTtcblxuICBpZiAoZGVsZXRlRmlsZVRhc2sgIT09IG51bGwpIHtcbiAgICBxdWV1ZS5hZGRUYXNrKGRlbGV0ZUZpbGVUYXNrKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV2ZW50SGFuZGxlciIsInF1ZXVlRW1wdHlIYW5kbGVyIiwicXVldWUiLCJldmVudCIsInBhdGgiLCJjb250ZXh0IiwibWV0cmljcyIsInBhdGhGdWxseVF1YWxpZmllZFBhdGgiLCJpc1BhdGhGdWxsUXVhbGlmaWVkUGF0aCIsImZ1bGx5UXVhbGlmaWVkUGF0aCIsInBhdGhGcm9tRnVsbHlRdWFsaWZpZWRQYXRoIiwiZW1wdHkiLCJpc0VtcHR5Iiwic3RhcnRDb3VudE1ldHJpYyIsInN0YXJ0U2Vjb25kc01ldHJpYyIsIkFERF9FVkVOVCIsIkNIQU5HRV9FVkVOVCIsImFkZE9yQ2hhbmdlRXZlbnRIYW5kbGVyIiwiVU5MSU5LX0RJUl9FVkVOVCIsInVubGlua0RpckV2ZW50SGFuZGxlciIsIlVOTElOS19FVkVOVCIsInVubGlua0V2ZW50SGFuZGxlciIsInByZXZpb3VzVGFzayIsIkJ1bmRsZUZpbGVzVGFzayIsIndhaXQiLCJjb3VudCIsImVuZENvdW50TWV0cmljIiwic2Vjb25kcyIsImVuZFNlY29uZHNNZXRyaWMiLCJzT3JFbXB0eSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiYnVuZGxlRmlsZXNUYXNrIiwiZnJvbUNvbnRleHQiLCJhZGRUYXNrIiwidHJhbnNwaWxlRmlsZVRhc2siLCJUcmFuc3BpbGVGaWxlVGFzayIsImZyb21QYXRoIiwiZGVsZXRlRGlyZWN0b3J5VGFzayIsIkRlbGV0ZURpcmVjdG9yeVRhc2siLCJkZWxldGVGaWxlVGFzayIsIkRlbGV0ZUZpbGVUYXNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFXZ0JBO2VBQUFBOztRQXNDQUM7ZUFBQUE7OzttRUEvQ1c7b0VBQ0M7c0VBQ0U7d0VBQ0U7c0JBRW9DO3dCQUNJO3lCQUNlOzs7Ozs7QUFFaEYsU0FBU0QsYUFBYUUsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsT0FBTztJQUN0RCxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxTQUNkRSx5QkFBeUJDLElBQUFBLDZCQUF1QixFQUFDSjtJQUV2RCxJQUFJRyx3QkFBd0I7UUFDMUIsTUFBTUUscUJBQXFCTCxNQUFPLEdBQUc7UUFFckNBLE9BQU9NLElBQUFBLGdDQUEwQixFQUFDRDtJQUNwQztJQUVBLElBQUlILFNBQVM7UUFDWCxNQUFNSyxRQUFRVCxNQUFNVSxPQUFPO1FBRTNCLElBQUlELE9BQU87WUFDVEUsSUFBQUEseUJBQWdCLEVBQUNSO1lBQ2pCUyxJQUFBQSwyQkFBa0IsRUFBQ1Q7UUFDckI7SUFDRjtJQUVBLE9BQVFGO1FBQ04sS0FBS1ksaUJBQVM7UUFDZCxLQUFLQyxvQkFBWTtZQUNmQyx3QkFBd0JmLE9BQU9FLE1BQU1DO1lBRXJDO1FBRUYsS0FBS2Esd0JBQWdCO1lBQ25CQyxzQkFBc0JqQixPQUFPRSxNQUFNQztZQUVuQztRQUVGLEtBQUtlLG9CQUFZO1lBQ2ZDLG1CQUFtQm5CLE9BQU9FLE1BQU1DO1lBRWhDO0lBQ0o7QUFDRjtBQUVPLFNBQVNKLGtCQUFrQkMsS0FBSyxFQUFFb0IsWUFBWSxFQUFFakIsT0FBTztJQUM1RCxJQUFJaUIsd0JBQXdCQyxvQkFBZSxFQUFFO1FBQzNDO0lBQ0Y7SUFFQSxNQUFNLEVBQUVDLElBQUksRUFBRWxCLE9BQU8sRUFBRSxHQUFHRDtJQUUxQixJQUFJQyxTQUFTO1FBQ1gsTUFBTW1CLFFBQVFDLElBQUFBLHVCQUFjLEVBQUNyQixVQUN2QnNCLFVBQVVDLElBQUFBLHlCQUFnQixFQUFDdkIsVUFDM0J3QixXQUFXLEFBQUNKLFVBQVUsSUFBSyxLQUFLO1FBRXRDSyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUVOLE1BQU0sS0FBSyxFQUFFSSxTQUFTLElBQUksRUFBRUYsUUFBUSxTQUFTLENBQUM7SUFDMUU7SUFFQUssV0FBVztRQUNULE1BQU1yQixRQUFRVCxNQUFNVSxPQUFPO1FBRTNCLElBQUlELE9BQU87WUFDVCxNQUFNc0Isa0JBQWtCVixvQkFBZSxDQUFDVyxXQUFXLENBQUM3QjtZQUVwRCxJQUFJNEIsb0JBQW9CLE1BQU07Z0JBQzVCL0IsTUFBTWlDLE9BQU8sQ0FBQ0Y7WUFDaEI7UUFDRjtJQUNGLEdBQUdUO0FBQ0w7QUFFQSxTQUFTUCx3QkFBd0JmLEtBQUssRUFBRUUsSUFBSSxFQUFFQyxPQUFPO0lBQ25ELE1BQU0rQixvQkFBb0JDLHNCQUFpQixDQUFDQyxRQUFRLENBQUNsQyxNQUFNQztJQUUzRCxJQUFJK0Isc0JBQXNCLE1BQU07UUFDOUJsQyxNQUFNaUMsT0FBTyxDQUFDQztJQUNoQjtBQUNGO0FBRUEsU0FBU2pCLHNCQUFzQmpCLEtBQUssRUFBRUUsSUFBSSxFQUFFQyxPQUFPO0lBQ2pELE1BQU1rQyxzQkFBc0JDLHdCQUFtQixDQUFDRixRQUFRLENBQUNsQyxNQUFNQztJQUUvRCxJQUFJa0Msd0JBQXdCLE1BQU07UUFDaENyQyxNQUFNaUMsT0FBTyxDQUFDSTtJQUNoQjtBQUNGO0FBRUEsU0FBU2xCLG1CQUFtQm5CLEtBQUssRUFBRUUsSUFBSSxFQUFFQyxPQUFPO0lBQzlDLE1BQU1vQyxpQkFBaUJDLG1CQUFjLENBQUNKLFFBQVEsQ0FBQ2xDLE1BQU1DO0lBRXJELElBQUlvQyxtQkFBbUIsTUFBTTtRQUMzQnZDLE1BQU1pQyxPQUFPLENBQUNNO0lBQ2hCO0FBQ0YifQ==