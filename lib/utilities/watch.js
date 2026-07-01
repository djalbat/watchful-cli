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
    const previousTaskBundleFilesTask = _bundleFiles.default.prototype.isPrototypeOf(previousTask);
    if (previousTaskBundleFilesTask) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvd2F0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWxldGVGaWxlVGFzayBmcm9tIFwiLi4vdGFzay9kZWxldGVGaWxlXCI7XG5pbXBvcnQgQnVuZGxlRmlsZXNUYXNrIGZyb20gXCIuLi90YXNrL2J1bmRsZUZpbGVzXCI7XG5pbXBvcnQgVHJhbnNwaWxlRmlsZVRhc2sgZnJvbSBcIi4uL3Rhc2svdHJhbnNwaWxlRmlsZVwiO1xuaW1wb3J0IERlbGV0ZURpcmVjdG9yeVRhc2sgZnJvbSBcIi4uL3Rhc2svZGVsZXRlRGlyZWN0b3J5XCI7XG5cbmltcG9ydCB7IGlzUGF0aEZ1bGxRdWFsaWZpZWRQYXRoLCBwYXRoRnJvbUZ1bGx5UXVhbGlmaWVkUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgQUREX0VWRU5ULCBDSEFOR0VfRVZFTlQsIFVOTElOS19FVkVOVCwgVU5MSU5LX0RJUl9FVkVOVCB9IGZyb20gXCIuLi9ldmVudHNcIjtcbmltcG9ydCB7IHN0YXJ0Q291bnRNZXRyaWMsIHN0YXJ0U2Vjb25kc01ldHJpYywgZW5kQ291bnRNZXRyaWMsIGVuZFNlY29uZHNNZXRyaWMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21ldHJpY3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50SGFuZGxlcihxdWV1ZSwgZXZlbnQsIHBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0LFxuICAgICAgICBwYXRoRnVsbHlRdWFsaWZpZWRQYXRoID0gaXNQYXRoRnVsbFF1YWxpZmllZFBhdGgocGF0aCk7XG5cbiAgaWYgKHBhdGhGdWxseVF1YWxpZmllZFBhdGgpIHtcbiAgICBjb25zdCBmdWxseVF1YWxpZmllZFBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBwYXRoID0gcGF0aEZyb21GdWxseVF1YWxpZmllZFBhdGgoZnVsbHlRdWFsaWZpZWRQYXRoKTtcbiAgfVxuXG4gIGlmIChtZXRyaWNzKSB7XG4gICAgY29uc3QgZW1wdHkgPSBxdWV1ZS5pc0VtcHR5KCk7XG5cbiAgICBpZiAoZW1wdHkpIHtcbiAgICAgIHN0YXJ0Q291bnRNZXRyaWMoY29udGV4dCk7XG4gICAgICBzdGFydFNlY29uZHNNZXRyaWMoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgQUREX0VWRU5UIDpcbiAgICBjYXNlIENIQU5HRV9FVkVOVCA6XG4gICAgICBhZGRPckNoYW5nZUV2ZW50SGFuZGxlcihxdWV1ZSwgcGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBVTkxJTktfRElSX0VWRU5UIDpcbiAgICAgIHVubGlua0RpckV2ZW50SGFuZGxlcihxdWV1ZSwgcGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBVTkxJTktfRVZFTlQgOlxuICAgICAgdW5saW5rRXZlbnRIYW5kbGVyKHF1ZXVlLCBwYXRoLCBjb250ZXh0KTtcblxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXVlRW1wdHlIYW5kbGVyKHF1ZXVlLCBwcmV2aW91c1Rhc2ssIGNvbnRleHQpIHtcbiAgY29uc3QgcHJldmlvdXNUYXNrQnVuZGxlRmlsZXNUYXNrID0gQnVuZGxlRmlsZXNUYXNrLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHByZXZpb3VzVGFzayk7XG5cbiAgaWYgKHByZXZpb3VzVGFza0J1bmRsZUZpbGVzVGFzaykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgd2FpdCwgbWV0cmljcyB9ID0gY29udGV4dDtcblxuICBpZiAobWV0cmljcykge1xuICAgIGNvbnN0IGNvdW50ID0gZW5kQ291bnRNZXRyaWMoY29udGV4dCksXG4gICAgICAgICAgc2Vjb25kcyA9IGVuZFNlY29uZHNNZXRyaWMoY29udGV4dCksXG4gICAgICAgICAgc09yRW1wdHkgPSAoY291bnQgPT09IDEpID8gXCJcIiA6IFwic1wiO1xuXG4gICAgY29uc29sZS5sb2coYFRyYW5zcGlsZWQgJHtjb3VudH0gZmlsZSR7c09yRW1wdHl9IGluICR7c2Vjb25kc30gc2Vjb25kcy5gKTtcbiAgfVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5ID0gcXVldWUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKGVtcHR5KSB7XG4gICAgICBjb25zdCBidW5kbGVGaWxlc1Rhc2sgPSBCdW5kbGVGaWxlc1Rhc2suZnJvbUNvbnRleHQoY29udGV4dCk7XG5cbiAgICAgIGlmIChidW5kbGVGaWxlc1Rhc2sgIT09IG51bGwpIHtcbiAgICAgICAgcXVldWUuYWRkVGFzayhidW5kbGVGaWxlc1Rhc2spO1xuICAgICAgfVxuICAgIH1cbiAgfSwgd2FpdCk7XG59XG5cbmZ1bmN0aW9uIGFkZE9yQ2hhbmdlRXZlbnRIYW5kbGVyKHF1ZXVlLCBwYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRyYW5zcGlsZUZpbGVUYXNrID0gVHJhbnNwaWxlRmlsZVRhc2suZnJvbVBhdGgocGF0aCwgY29udGV4dCk7XG5cbiAgaWYgKHRyYW5zcGlsZUZpbGVUYXNrICE9PSBudWxsKSB7XG4gICAgcXVldWUuYWRkVGFzayh0cmFuc3BpbGVGaWxlVGFzayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5saW5rRGlyRXZlbnRIYW5kbGVyKHF1ZXVlLCBwYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlbGV0ZURpcmVjdG9yeVRhc2sgPSBEZWxldGVEaXJlY3RvcnlUYXNrLmZyb21QYXRoKHBhdGgsIGNvbnRleHQpO1xuXG4gIGlmIChkZWxldGVEaXJlY3RvcnlUYXNrICE9PSBudWxsKSB7XG4gICAgcXVldWUuYWRkVGFzayhkZWxldGVEaXJlY3RvcnlUYXNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxpbmtFdmVudEhhbmRsZXIocXVldWUsIHBhdGgsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVsZXRlRmlsZVRhc2sgPSBEZWxldGVGaWxlVGFzay5mcm9tUGF0aChwYXRoLCBjb250ZXh0KTtcblxuICBpZiAoZGVsZXRlRmlsZVRhc2sgIT09IG51bGwpIHtcbiAgICBxdWV1ZS5hZGRUYXNrKGRlbGV0ZUZpbGVUYXNrKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV2ZW50SGFuZGxlciIsInF1ZXVlRW1wdHlIYW5kbGVyIiwicXVldWUiLCJldmVudCIsInBhdGgiLCJjb250ZXh0IiwibWV0cmljcyIsInBhdGhGdWxseVF1YWxpZmllZFBhdGgiLCJpc1BhdGhGdWxsUXVhbGlmaWVkUGF0aCIsImZ1bGx5UXVhbGlmaWVkUGF0aCIsInBhdGhGcm9tRnVsbHlRdWFsaWZpZWRQYXRoIiwiZW1wdHkiLCJpc0VtcHR5Iiwic3RhcnRDb3VudE1ldHJpYyIsInN0YXJ0U2Vjb25kc01ldHJpYyIsIkFERF9FVkVOVCIsIkNIQU5HRV9FVkVOVCIsImFkZE9yQ2hhbmdlRXZlbnRIYW5kbGVyIiwiVU5MSU5LX0RJUl9FVkVOVCIsInVubGlua0RpckV2ZW50SGFuZGxlciIsIlVOTElOS19FVkVOVCIsInVubGlua0V2ZW50SGFuZGxlciIsInByZXZpb3VzVGFzayIsInByZXZpb3VzVGFza0J1bmRsZUZpbGVzVGFzayIsIkJ1bmRsZUZpbGVzVGFzayIsInByb3RvdHlwZSIsImlzUHJvdG90eXBlT2YiLCJ3YWl0IiwiY291bnQiLCJlbmRDb3VudE1ldHJpYyIsInNlY29uZHMiLCJlbmRTZWNvbmRzTWV0cmljIiwic09yRW1wdHkiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImJ1bmRsZUZpbGVzVGFzayIsImZyb21Db250ZXh0IiwiYWRkVGFzayIsInRyYW5zcGlsZUZpbGVUYXNrIiwiVHJhbnNwaWxlRmlsZVRhc2siLCJmcm9tUGF0aCIsImRlbGV0ZURpcmVjdG9yeVRhc2siLCJEZWxldGVEaXJlY3RvcnlUYXNrIiwiZGVsZXRlRmlsZVRhc2siLCJEZWxldGVGaWxlVGFzayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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