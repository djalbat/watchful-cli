"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return action;
    }
});
var _callback = require("./utilities/callback");
function action(operations, callback, context) {
    (0, _callback.executeOperations)(operations, function(completed) {
        var success = completed; ///
        callback(success);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NhbGxiYWNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGlvbihvcGVyYXRpb25zLCBjYWxsYmFjaywgY29udGV4dCkge1xuICBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCAoY29tcGxldGVkKSA9PiB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IGNvbXBsZXRlZDsgIC8vL1xuXG4gICAgY2FsbGJhY2soc3VjY2Vzcyk7XG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImFjdGlvbiIsIm9wZXJhdGlvbnMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJleGVjdXRlT3BlcmF0aW9ucyIsImNvbXBsZXRlZCIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7d0JBRlU7QUFFbkIsU0FBU0EsT0FBT0MsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE9BQU87SUFDMURDLElBQUFBLDJCQUFpQixFQUFDSCxZQUFZLFNBQUNJO1FBQzdCLElBQU1DLFVBQVVELFdBQVksR0FBRztRQUUvQkgsU0FBU0k7SUFDWCxHQUFHSDtBQUNMIn0=