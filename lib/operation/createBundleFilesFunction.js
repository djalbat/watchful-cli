"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createBundleFilesFunctionOperation;
    }
});
const _bundle = require("../utilities/bundle");
function createBundleFilesFunctionOperation(proceed, abort, context) {
    const { bundleFilePath } = context;
    if (bundleFilePath === null) {
        proceed();
        return;
    }
    const bundleFilesFunction = (0, _bundle.createBundleFilesFunction)(context);
    if (bundleFilesFunction === null) {
        abort();
        return;
    }
    Object.assign(context, {
        bundleFilesFunction
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY3JlYXRlQnVuZGxlRmlsZXNGdW5jdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlQnVuZGxlRmlsZXNGdW5jdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnVuZGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb25PcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBidW5kbGVGaWxlUGF0aCB9ID0gY29udGV4dDtcblxuICBpZiAoYnVuZGxlRmlsZVBhdGggPT09IG51bGwpIHtcbiAgICBwcm9jZWVkKCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBidW5kbGVGaWxlc0Z1bmN0aW9uID0gY3JlYXRlQnVuZGxlRmlsZXNGdW5jdGlvbihjb250ZXh0KTtcblxuICBpZiAoYnVuZGxlRmlsZXNGdW5jdGlvbiA9PT0gbnVsbCkge1xuICAgIGFib3J0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBidW5kbGVGaWxlc0Z1bmN0aW9uXG4gIH0pO1xuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVCdW5kbGVGaWxlc0Z1bmN0aW9uT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImJ1bmRsZUZpbGVQYXRoIiwiYnVuZGxlRmlsZXNGdW5jdGlvbiIsImNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7d0JBRmtCO0FBRTNCLFNBQVNBLG1DQUFtQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDaEYsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR0Q7SUFFM0IsSUFBSUMsbUJBQW1CLE1BQU07UUFDM0JIO1FBRUE7SUFDRjtJQUVBLE1BQU1JLHNCQUFzQkMsSUFBQUEsaUNBQXlCLEVBQUNIO0lBRXRELElBQUlFLHdCQUF3QixNQUFNO1FBQ2hDSDtRQUVBO0lBQ0Y7SUFFQUssT0FBT0MsTUFBTSxDQUFDTCxTQUFTO1FBQ3JCRTtJQUNGO0lBRUFKO0FBQ0YifQ==