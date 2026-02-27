"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BundleFilesTask;
    }
});
const _task = /*#__PURE__*/ _interop_require_default(require("../task"));
const _bundleFiles = /*#__PURE__*/ _interop_require_default(require("../bundleFiles"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BundleFilesTask extends _task.default {
    static fromContext(context) {
        let bundleFilesTask = null;
        const { bundleFilePath } = context;
        if (bundleFilePath) {
            bundleFilesTask = new BundleFilesTask(_bundleFiles.default, context, ()=>{
            ///
            });
        }
        return bundleFilesTask;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL2J1bmRsZUZpbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vdGFza1wiO1xuaW1wb3J0IGJ1bmRsZUZpbGVzIGZyb20gXCIuLi9idW5kbGVGaWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdW5kbGVGaWxlc1Rhc2sgZXh0ZW5kcyBUYXNrIHtcbiAgc3RhdGljIGZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgYnVuZGxlRmlsZXNUYXNrID0gbnVsbDtcblxuICAgIGNvbnN0IHsgYnVuZGxlRmlsZVBhdGggfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoYnVuZGxlRmlsZVBhdGgpIHtcbiAgICAgIGJ1bmRsZUZpbGVzVGFzayA9IG5ldyBCdW5kbGVGaWxlc1Rhc2soYnVuZGxlRmlsZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgLy8vXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVuZGxlRmlsZXNUYXNrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQnVuZGxlRmlsZXNUYXNrIiwiVGFzayIsImZyb21Db250ZXh0IiwiY29udGV4dCIsImJ1bmRsZUZpbGVzVGFzayIsImJ1bmRsZUZpbGVQYXRoIiwiYnVuZGxlRmlsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7NkRBSEo7b0VBQ087Ozs7OztBQUVULE1BQU1BLHdCQUF3QkMsYUFBSTtJQUMvQyxPQUFPQyxZQUFZQyxPQUFPLEVBQUU7UUFDMUIsSUFBSUMsa0JBQWtCO1FBRXRCLE1BQU0sRUFBRUMsY0FBYyxFQUFFLEdBQUdGO1FBRTNCLElBQUlFLGdCQUFnQjtZQUNsQkQsa0JBQWtCLElBQUlKLGdCQUFnQk0sb0JBQVcsRUFBRUgsU0FBUztZQUMxRCxHQUFHO1lBQ0w7UUFDRjtRQUVBLE9BQU9DO0lBQ1Q7QUFDRiJ9