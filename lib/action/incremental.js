"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return incrementalAction;
    }
});
const _watch = /*#__PURE__*/ _interop_require_default(require("../watch"));
const _action = /*#__PURE__*/ _interop_require_default(require("../action"));
const _initialise = /*#__PURE__*/ _interop_require_default(require("../operation/initialise"));
const _retrieveFilePaths = /*#__PURE__*/ _interop_require_default(require("../operation/retrieveFilePaths"));
const _createBundleFilesFunction = /*#__PURE__*/ _interop_require_default(require("../operation/createBundleFilesFunction"));
const _createTranspileFileFunction = /*#__PURE__*/ _interop_require_default(require("../operation/createTranspileFileFunction"));
const _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function incrementalAction(wait, node, debug, release, bundler, quietly, metrics, processes, entryFile, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory) {
    const operations = [
        _initialise.default,
        _createTranspileFileFunction.default,
        _createBundleFilesFunction.default,
        _retrieveFilePaths.default
    ], context = {
        wait,
        node,
        debug,
        release,
        bundler,
        quietly,
        metrics,
        processes,
        entryFile,
        transpiler,
        bundleFile,
        libDirectory,
        tempDirectory,
        sourceDirectory
    };
    (0, _action.default)(operations, (success)=>{
        if (!success) {
            console.log(_messages.INCREMENTAL_BUILD_FAILED_MESSAGE);
            return;
        }
        (0, _watch.default)(context);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vaW5jcmVtZW50YWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3YXRjaCBmcm9tIFwiLi4vd2F0Y2hcIjtcbmltcG9ydCBhY3Rpb24gZnJvbSBcIi4uL2FjdGlvblwiO1xuaW1wb3J0IGluaXRpYWxpc2VPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9pbml0aWFsaXNlXCI7XG5pbXBvcnQgcmV0cmlldmVGaWxlUGF0aHNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9yZXRyaWV2ZUZpbGVQYXRoc1wiO1xuaW1wb3J0IGNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb25PcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jcmVhdGVCdW5kbGVGaWxlc0Z1bmN0aW9uXCI7XG5pbXBvcnQgY3JlYXRlVHJhbnNwaWxlRmlsZUZ1bmN0aW9uT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vY3JlYXRlVHJhbnNwaWxlRmlsZUZ1bmN0aW9uXCI7XG5cbmltcG9ydCB7IElOQ1JFTUVOVEFMX0JVSUxEX0ZBSUxFRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluY3JlbWVudGFsQWN0aW9uKHdhaXQsIG5vZGUsIGRlYnVnLCByZWxlYXNlLCBidW5kbGVyLCBxdWlldGx5LCBtZXRyaWNzLCBwcm9jZXNzZXMsIGVudHJ5RmlsZSwgdHJhbnNwaWxlciwgYnVuZGxlRmlsZSwgbGliRGlyZWN0b3J5LCB0ZW1wRGlyZWN0b3J5LCBzb3VyY2VEaXJlY3RvcnkpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBpbml0aWFsaXNlT3BlcmF0aW9uLFxuICAgICAgICAgIGNyZWF0ZVRyYW5zcGlsZUZpbGVGdW5jdGlvbk9wZXJhdGlvbixcbiAgICAgICAgICBjcmVhdGVCdW5kbGVGaWxlc0Z1bmN0aW9uT3BlcmF0aW9uLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzT3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgd2FpdCxcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIGRlYnVnLFxuICAgICAgICAgIHJlbGVhc2UsXG4gICAgICAgICAgYnVuZGxlcixcbiAgICAgICAgICBxdWlldGx5LFxuICAgICAgICAgIG1ldHJpY3MsXG4gICAgICAgICAgcHJvY2Vzc2VzLFxuICAgICAgICAgIGVudHJ5RmlsZSxcbiAgICAgICAgICB0cmFuc3BpbGVyLFxuICAgICAgICAgIGJ1bmRsZUZpbGUsXG4gICAgICAgICAgbGliRGlyZWN0b3J5LFxuICAgICAgICAgIHRlbXBEaXJlY3RvcnksXG4gICAgICAgICAgc291cmNlRGlyZWN0b3J5XG4gICAgICAgIH07XG5cbiAgYWN0aW9uKG9wZXJhdGlvbnMsIChzdWNjZXNzKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zb2xlLmxvZyhJTkNSRU1FTlRBTF9CVUlMRF9GQUlMRURfTUVTU0FHRSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXRjaChjb250ZXh0KTtcbiAgfSwgY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiaW5jcmVtZW50YWxBY3Rpb24iLCJ3YWl0Iiwibm9kZSIsImRlYnVnIiwicmVsZWFzZSIsImJ1bmRsZXIiLCJxdWlldGx5IiwibWV0cmljcyIsInByb2Nlc3NlcyIsImVudHJ5RmlsZSIsInRyYW5zcGlsZXIiLCJidW5kbGVGaWxlIiwibGliRGlyZWN0b3J5IiwidGVtcERpcmVjdG9yeSIsInNvdXJjZURpcmVjdG9yeSIsIm9wZXJhdGlvbnMiLCJpbml0aWFsaXNlT3BlcmF0aW9uIiwiY3JlYXRlVHJhbnNwaWxlRmlsZUZ1bmN0aW9uT3BlcmF0aW9uIiwiY3JlYXRlQnVuZGxlRmlsZXNGdW5jdGlvbk9wZXJhdGlvbiIsInJldHJpZXZlRmlsZVBhdGhzT3BlcmF0aW9uIiwiY29udGV4dCIsImFjdGlvbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiSU5DUkVNRU5UQUxfQlVJTERfRkFJTEVEX01FU1NBR0UiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozs4REFUTjsrREFDQzttRUFDYTswRUFDTztrRkFDUTtvRkFDRTswQkFFQTs7Ozs7O0FBRWxDLFNBQVNBLGtCQUFrQkMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxlQUFlO0lBQ3pMLE1BQU1DLGFBQWE7UUFDWEMsbUJBQW1CO1FBQ25CQyxvQ0FBb0M7UUFDcENDLGtDQUFrQztRQUNsQ0MsMEJBQTBCO0tBQzNCLEVBQ0RDLFVBQVU7UUFDUm5CO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFFTk8sSUFBQUEsZUFBTSxFQUFDTixZQUFZLENBQUNPO1FBQ2xCLElBQUksQ0FBQ0EsU0FBUztZQUNaQyxRQUFRQyxHQUFHLENBQUNDLDBDQUFnQztZQUU1QztRQUNGO1FBRUFDLElBQUFBLGNBQUssRUFBQ047SUFDUixHQUFHQTtBQUNMIn0=