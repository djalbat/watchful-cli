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
var _bundle = require("../utilities/bundle");
function createBundleFilesFunctionOperation(proceed, abort, context) {
    var bundleFilePath = context.bundleFilePath;
    if (bundleFilePath === null) {
        proceed();
        return;
    }
    var bundleFilesFunction = (0, _bundle.createBundleFilesFunction)(context);
    if (bundleFilesFunction === null) {
        abort();
        return;
    }
    Object.assign(context, {
        bundleFilesFunction: bundleFilesFunction
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY3JlYXRlQnVuZGxlRmlsZXNGdW5jdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlQnVuZGxlRmlsZXNGdW5jdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnVuZGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb25PcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBidW5kbGVGaWxlUGF0aCB9ID0gY29udGV4dDtcblxuICBpZiAoYnVuZGxlRmlsZVBhdGggPT09IG51bGwpIHtcbiAgICBwcm9jZWVkKCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBidW5kbGVGaWxlc0Z1bmN0aW9uID0gY3JlYXRlQnVuZGxlRmlsZXNGdW5jdGlvbihjb250ZXh0KTtcblxuICBpZiAoYnVuZGxlRmlsZXNGdW5jdGlvbiA9PT0gbnVsbCkge1xuICAgIGFib3J0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBidW5kbGVGaWxlc0Z1bmN0aW9uXG4gIH0pO1xuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVCdW5kbGVGaWxlc0Z1bmN0aW9uT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImJ1bmRsZUZpbGVQYXRoIiwiYnVuZGxlRmlsZXNGdW5jdGlvbiIsImNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7c0JBRmtCO0FBRTNCLFNBQVNBLG1DQUFtQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDaEYsSUFBTSxBQUFFQyxpQkFBbUJELFFBQW5CQztJQUVSLElBQUlBLG1CQUFtQixNQUFNO1FBQzNCSDtRQUVBO0lBQ0Y7SUFFQSxJQUFNSSxzQkFBc0JDLElBQUFBLGlDQUF5QixFQUFDSDtJQUV0RCxJQUFJRSx3QkFBd0IsTUFBTTtRQUNoQ0g7UUFFQTtJQUNGO0lBRUFLLE9BQU9DLE1BQU0sQ0FBQ0wsU0FBUztRQUNyQkUscUJBQUFBO0lBQ0Y7SUFFQUo7QUFDRiJ9