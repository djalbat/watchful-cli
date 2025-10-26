"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return transpileFilesOperation;
    }
});
var _singleProcess = /*#__PURE__*/ _interop_require_default(require(".//transpileFiles/singleProcess"));
var _mutilpleProcesses = /*#__PURE__*/ _interop_require_default(require(".//transpileFiles/mutilpleProcesses"));
var _constants = require("../constants");
var _metrics = require("../utilities/metrics");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function transpileFilesOperation(proceed, abort, context) {
    var metrics = context.metrics, processesLength = context.processesLength;
    if (metrics) {
        (0, _metrics.startCountMetric)(context);
        (0, _metrics.startSecondsMetric)(context);
    }
    processesLength < 2 ? (0, _singleProcess.default)(done, context) : (0, _mutilpleProcesses.default)(done, context);
    function done() {
        if (metrics) {
            var count = (0, _metrics.endCountMetric)(context), seconds = (0, _metrics.endSecondsMetric)(context), sOrEmpty = count === 1 ? _constants.EMPTY_STRING : _constants.S;
            console.log("Transpiled ".concat(count, " file").concat(sOrEmpty, " in ").concat(seconds, " seconds."));
        }
        proceed();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vdHJhbnNwaWxlRmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaW5nbGVQcm9jZXNzVHJhbnNwaWxlRmlsZXNDYWxsYmFjayBmcm9tIFwiLi8vdHJhbnNwaWxlRmlsZXMvc2luZ2xlUHJvY2Vzc1wiO1xuaW1wb3J0IG11bHRpcGxlUHJvY2Vzc2VzVHJhbnNwaWxlRmlsZXNDYWxsYmFjayBmcm9tIFwiLi8vdHJhbnNwaWxlRmlsZXMvbXV0aWxwbGVQcm9jZXNzZXNcIjtcblxuaW1wb3J0IHsgUywgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc3RhcnRDb3VudE1ldHJpYywgZW5kQ291bnRNZXRyaWMsIHN0YXJ0U2Vjb25kc01ldHJpYywgZW5kU2Vjb25kc01ldHJpYyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWV0cmljc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc3BpbGVGaWxlc09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IG1ldHJpY3MsIHByb2Nlc3Nlc0xlbmd0aCB9ID0gY29udGV4dDtcblxuICBpZiAobWV0cmljcykge1xuICAgIHN0YXJ0Q291bnRNZXRyaWMoY29udGV4dCk7XG5cbiAgICBzdGFydFNlY29uZHNNZXRyaWMoY29udGV4dCk7XG4gIH1cblxuICAocHJvY2Vzc2VzTGVuZ3RoIDwgMikgP1xuICAgIHNpbmdsZVByb2Nlc3NUcmFuc3BpbGVGaWxlc0NhbGxiYWNrKGRvbmUsIGNvbnRleHQpIDpcbiAgICAgIG11bHRpcGxlUHJvY2Vzc2VzVHJhbnNwaWxlRmlsZXNDYWxsYmFjayhkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmIChtZXRyaWNzKSB7XG4gICAgICBjb25zdCBjb3VudCA9IGVuZENvdW50TWV0cmljKGNvbnRleHQpLFxuICAgICAgICAgICAgc2Vjb25kcyA9IGVuZFNlY29uZHNNZXRyaWMoY29udGV4dCksXG4gICAgICAgICAgICBzT3JFbXB0eSA9IChjb3VudCA9PT0gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTO1xuXG4gICAgICBjb25zb2xlLmxvZyhgVHJhbnNwaWxlZCAke2NvdW50fSBmaWxlJHtzT3JFbXB0eX0gaW4gJHtzZWNvbmRzfSBzZWNvbmRzLmApO1xuICAgIH1cblxuICAgIHByb2NlZWQoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRyYW5zcGlsZUZpbGVzT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsIm1ldHJpY3MiLCJwcm9jZXNzZXNMZW5ndGgiLCJzdGFydENvdW50TWV0cmljIiwic3RhcnRTZWNvbmRzTWV0cmljIiwic2luZ2xlUHJvY2Vzc1RyYW5zcGlsZUZpbGVzQ2FsbGJhY2siLCJkb25lIiwibXVsdGlwbGVQcm9jZXNzZXNUcmFuc3BpbGVGaWxlc0NhbGxiYWNrIiwiY291bnQiLCJlbmRDb3VudE1ldHJpYyIsInNlY29uZHMiLCJlbmRTZWNvbmRzTWV0cmljIiwic09yRW1wdHkiLCJFTVBUWV9TVFJJTkciLCJTIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztvRUFOd0I7d0VBQ0k7eUJBRXBCO3VCQUN1RDs7Ozs7O0FBRXhFLFNBQVNBLHdCQUF3QkMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDckUsSUFBUUMsVUFBNkJELFFBQTdCQyxTQUFTQyxrQkFBb0JGLFFBQXBCRTtJQUVqQixJQUFJRCxTQUFTO1FBQ1hFLElBQUFBLHlCQUFnQixFQUFDSDtRQUVqQkksSUFBQUEsMkJBQWtCLEVBQUNKO0lBQ3JCO0lBRUNFLGtCQUFrQixJQUNqQkcsSUFBQUEsc0JBQW1DLEVBQUNDLE1BQU1OLFdBQ3hDTyxJQUFBQSwwQkFBdUMsRUFBQ0QsTUFBTU47SUFFbEQsU0FBU007UUFDUCxJQUFJTCxTQUFTO1lBQ1gsSUFBTU8sUUFBUUMsSUFBQUEsdUJBQWMsRUFBQ1QsVUFDdkJVLFVBQVVDLElBQUFBLHlCQUFnQixFQUFDWCxVQUMzQlksV0FBVyxBQUFDSixVQUFVLElBQ1RLLHVCQUFZLEdBQ1ZDLFlBQUM7WUFFdEJDLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLGNBQTBCSixPQUFiSixPQUFNLFNBQXNCRSxPQUFmRSxVQUFTLFFBQWMsT0FBUkYsU0FBUTtRQUNoRTtRQUVBWjtJQUNGO0FBQ0YifQ==