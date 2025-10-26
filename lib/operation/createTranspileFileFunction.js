"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createTranspileFileFunctionOperation;
    }
});
var _transpile = require("../utilities/transpile");
function createTranspileFileFunctionOperation(proceed, abort, context) {
    var transpileFileFunction = (0, _transpile.createTranspileFileFunction)(context);
    if (transpileFileFunction === null) {
        abort();
        return;
    }
    Object.assign(context, {
        transpileFileFunction: transpileFileFunction
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY3JlYXRlVHJhbnNwaWxlRmlsZUZ1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVUcmFuc3BpbGVGaWxlRnVuY3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zcGlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUcmFuc3BpbGVGaWxlRnVuY3Rpb25PcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgdHJhbnNwaWxlRmlsZUZ1bmN0aW9uID0gY3JlYXRlVHJhbnNwaWxlRmlsZUZ1bmN0aW9uKGNvbnRleHQpO1xuXG4gIGlmICh0cmFuc3BpbGVGaWxlRnVuY3Rpb24gPT09IG51bGwpIHtcbiAgICBhYm9ydCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgdHJhbnNwaWxlRmlsZUZ1bmN0aW9uXG4gIH0pO1xuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVUcmFuc3BpbGVGaWxlRnVuY3Rpb25PcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwidHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiY3JlYXRlVHJhbnNwaWxlRmlsZUZ1bmN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3lCQUZvQjtBQUU3QixTQUFTQSxxQ0FBcUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ2xGLElBQU1DLHdCQUF3QkMsSUFBQUEsc0NBQTJCLEVBQUNGO0lBRTFELElBQUlDLDBCQUEwQixNQUFNO1FBQ2xDRjtRQUVBO0lBQ0Y7SUFFQUksT0FBT0MsTUFBTSxDQUFDSixTQUFTO1FBQ3JCQyx1QkFBQUE7SUFDRjtJQUVBSDtBQUNGIn0=