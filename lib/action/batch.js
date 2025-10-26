"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return batchAction;
    }
});
var _action = /*#__PURE__*/ _interop_require_default(require("../action"));
var _initialise = /*#__PURE__*/ _interop_require_default(require("../operation/initialise"));
var _bundleFiles = /*#__PURE__*/ _interop_require_default(require("../operation/bundleFiles"));
var _transpileFiles = /*#__PURE__*/ _interop_require_default(require("../operation/transpileFiles"));
var _retrieveFilePaths = /*#__PURE__*/ _interop_require_default(require("../operation/retrieveFilePaths"));
var _createBundleFilesFunction = /*#__PURE__*/ _interop_require_default(require("../operation/createBundleFilesFunction"));
var _createTranspileFileFunction = /*#__PURE__*/ _interop_require_default(require("../operation/createTranspileFileFunction"));
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function batchAction(wait, node, debug, release, bundler, quietly, metrics, processes, entryFile, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory) {
    var operations = [
        _initialise.default,
        _createTranspileFileFunction.default,
        _createBundleFilesFunction.default,
        _retrieveFilePaths.default,
        _transpileFiles.default,
        _bundleFiles.default
    ], context = {
        wait: wait,
        node: node,
        debug: debug,
        release: release,
        bundler: bundler,
        quietly: quietly,
        metrics: metrics,
        processes: processes,
        entryFile: entryFile,
        transpiler: transpiler,
        bundleFile: bundleFile,
        libDirectory: libDirectory,
        tempDirectory: tempDirectory,
        sourceDirectory: sourceDirectory
    };
    (0, _action.default)(operations, function(success) {
        if (!success) {
            console.log(_messages.BATCH_BUILD_FAILED_MESSAGE);
        }
        process.exit(); ///
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vYmF0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBhY3Rpb24gZnJvbSBcIi4uL2FjdGlvblwiO1xuaW1wb3J0IGluaXRpYWxpc2VPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9pbml0aWFsaXNlXCI7XG5pbXBvcnQgYnVuZGxlRmlsZXNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9idW5kbGVGaWxlc1wiO1xuaW1wb3J0IHRyYW5zcGlsZUZpbGVzT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vdHJhbnNwaWxlRmlsZXNcIjtcbmltcG9ydCByZXRyaWV2ZUZpbGVQYXRoc09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3JldHJpZXZlRmlsZVBhdGhzXCI7XG5pbXBvcnQgY3JlYXRlQnVuZGxlRmlsZXNGdW5jdGlvbk9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb25cIjtcbmltcG9ydCBjcmVhdGVUcmFuc3BpbGVGaWxlRnVuY3Rpb25PcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jcmVhdGVUcmFuc3BpbGVGaWxlRnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgQkFUQ0hfQlVJTERfRkFJTEVEX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmF0Y2hBY3Rpb24od2FpdCwgbm9kZSwgZGVidWcsIHJlbGVhc2UsIGJ1bmRsZXIsIHF1aWV0bHksIG1ldHJpY3MsIHByb2Nlc3NlcywgZW50cnlGaWxlLCB0cmFuc3BpbGVyLCBidW5kbGVGaWxlLCBsaWJEaXJlY3RvcnksIHRlbXBEaXJlY3RvcnksIHNvdXJjZURpcmVjdG9yeSkge1xuICBjb25zdCBvcGVyYXRpb25zID0gW1xuICAgICAgICAgIGluaXRpYWxpc2VPcGVyYXRpb24sXG4gICAgICAgICAgY3JlYXRlVHJhbnNwaWxlRmlsZUZ1bmN0aW9uT3BlcmF0aW9uLFxuICAgICAgICAgIGNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb25PcGVyYXRpb24sXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHNPcGVyYXRpb24sXG4gICAgICAgICAgdHJhbnNwaWxlRmlsZXNPcGVyYXRpb24sXG4gICAgICAgICAgYnVuZGxlRmlsZXNPcGVyYXRpb25cbiAgICAgICAgXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICB3YWl0LFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgZGVidWcsXG4gICAgICAgICAgcmVsZWFzZSxcbiAgICAgICAgICBidW5kbGVyLFxuICAgICAgICAgIHF1aWV0bHksXG4gICAgICAgICAgbWV0cmljcyxcbiAgICAgICAgICBwcm9jZXNzZXMsXG4gICAgICAgICAgZW50cnlGaWxlLFxuICAgICAgICAgIHRyYW5zcGlsZXIsXG4gICAgICAgICAgYnVuZGxlRmlsZSxcbiAgICAgICAgICBsaWJEaXJlY3RvcnksXG4gICAgICAgICAgdGVtcERpcmVjdG9yeSxcbiAgICAgICAgICBzb3VyY2VEaXJlY3RvcnlcbiAgICAgICAgfTtcblxuICBhY3Rpb24ob3BlcmF0aW9ucywgKHN1Y2Nlc3MpID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKEJBVENIX0JVSUxEX0ZBSUxFRF9NRVNTQUdFKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzLmV4aXQoKTsgLy8vXG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImJhdGNoQWN0aW9uIiwid2FpdCIsIm5vZGUiLCJkZWJ1ZyIsInJlbGVhc2UiLCJidW5kbGVyIiwicXVpZXRseSIsIm1ldHJpY3MiLCJwcm9jZXNzZXMiLCJlbnRyeUZpbGUiLCJ0cmFuc3BpbGVyIiwiYnVuZGxlRmlsZSIsImxpYkRpcmVjdG9yeSIsInRlbXBEaXJlY3RvcnkiLCJzb3VyY2VEaXJlY3RvcnkiLCJvcGVyYXRpb25zIiwiaW5pdGlhbGlzZU9wZXJhdGlvbiIsImNyZWF0ZVRyYW5zcGlsZUZpbGVGdW5jdGlvbk9wZXJhdGlvbiIsImNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb25PcGVyYXRpb24iLCJyZXRyaWV2ZUZpbGVQYXRoc09wZXJhdGlvbiIsInRyYW5zcGlsZUZpbGVzT3BlcmF0aW9uIiwiYnVuZGxlRmlsZXNPcGVyYXRpb24iLCJjb250ZXh0IiwiYWN0aW9uIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJCQVRDSF9CVUlMRF9GQUlMRURfTUVTU0FHRSIsInByb2Nlc3MiLCJleGl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzZEQVZMO2lFQUNhO2tFQUNDO3FFQUNHO3dFQUNHO2dGQUNRO2tGQUNFO3dCQUVOOzs7Ozs7QUFFNUIsU0FBU0EsWUFBWUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxlQUFlO0lBQ25MLElBQU1DLGFBQWE7UUFDWEMsbUJBQW1CO1FBQ25CQyxvQ0FBb0M7UUFDcENDLGtDQUFrQztRQUNsQ0MsMEJBQTBCO1FBQzFCQyx1QkFBdUI7UUFDdkJDLG9CQUFvQjtLQUNyQixFQUNEQyxVQUFVO1FBQ1JyQixNQUFBQTtRQUNBQyxNQUFBQTtRQUNBQyxPQUFBQTtRQUNBQyxTQUFBQTtRQUNBQyxTQUFBQTtRQUNBQyxTQUFBQTtRQUNBQyxTQUFBQTtRQUNBQyxXQUFBQTtRQUNBQyxXQUFBQTtRQUNBQyxZQUFBQTtRQUNBQyxZQUFBQTtRQUNBQyxjQUFBQTtRQUNBQyxlQUFBQTtRQUNBQyxpQkFBQUE7SUFDRjtJQUVOUyxJQUFBQSxlQUFNLEVBQUNSLFlBQVksU0FBQ1M7UUFDbEIsSUFBSSxDQUFDQSxTQUFTO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Msb0NBQTBCO1FBQ3hDO1FBRUFDLFFBQVFDLElBQUksSUFBSSxHQUFHO0lBQ3JCLEdBQUdQO0FBQ0wifQ==