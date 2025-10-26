"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return bundleFilesOperation;
    }
});
var _bundleFiles = /*#__PURE__*/ _interop_require_default(require("../bundleFiles"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function bundleFilesOperation(proceed, abort, context) {
    var entryFilePath = context.entryFilePath;
    if (!entryFilePath) {
        proceed();
        return;
    }
    (0, _bundleFiles.default)(context, function() {
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vYnVuZGxlRmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBidW5kbGVGaWxlcyBmcm9tIFwiLi4vYnVuZGxlRmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVuZGxlRmlsZXNPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBlbnRyeUZpbGVQYXRoIH0gPSBjb250ZXh0O1xuXG4gIGlmICghZW50cnlGaWxlUGF0aCkge1xuICAgIHByb2NlZWQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGJ1bmRsZUZpbGVzKGNvbnRleHQsICgpID0+IHtcbiAgICBwcm9jZWVkKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImJ1bmRsZUZpbGVzT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImVudHJ5RmlsZVBhdGgiLCJidW5kbGVGaWxlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OztrRUFGQTs7Ozs7O0FBRVQsU0FBU0EscUJBQXFCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNsRSxJQUFNLEFBQUVDLGdCQUFrQkQsUUFBbEJDO0lBRVIsSUFBSSxDQUFDQSxlQUFlO1FBQ2xCSDtRQUVBO0lBQ0Y7SUFFQUksSUFBQUEsb0JBQVcsRUFBQ0YsU0FBUztRQUNuQkY7SUFDRjtBQUNGIn0=