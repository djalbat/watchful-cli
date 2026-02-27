"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return singleProcessTranspileFilesOperation;
    }
});
const _necessary = require("necessary");
const _transpileFile = /*#__PURE__*/ _interop_require_default(require("../../transpileFile"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { updateCountMetric } = require("../../utilities/metrics");
const { forEach } = _necessary.asynchronousUtilities;
function singleProcessTranspileFilesOperation(done, context) {
    const { filePaths } = context;
    forEach(filePaths, transpileFileOperation, done, context);
}
function transpileFileOperation(filePath, next, done, context) {
    (0, _transpileFile.default)(filePath, context, (success)=>{
        if (success) {
            updateCountMetric(context);
        }
        next();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vdHJhbnNwaWxlRmlsZXMvc2luZ2xlUHJvY2Vzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgdHJhbnNwaWxlRmlsZSBmcm9tIFwiLi4vLi4vdHJhbnNwaWxlRmlsZVwiO1xuXG5jb25zdCB7IHVwZGF0ZUNvdW50TWV0cmljIH0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL21ldHJpY3NcIik7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW5nbGVQcm9jZXNzVHJhbnNwaWxlRmlsZXNPcGVyYXRpb24oZG9uZSwgY29udGV4dCkge1xuICBjb25zdCB7IGZpbGVQYXRocyB9ID0gY29udGV4dDtcblxuICBmb3JFYWNoKGZpbGVQYXRocywgdHJhbnNwaWxlRmlsZU9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zcGlsZUZpbGVPcGVyYXRpb24oZmlsZVBhdGgsIG5leHQsIGRvbmUsIGNvbnRleHQpIHtcbiAgdHJhbnNwaWxlRmlsZShmaWxlUGF0aCwgY29udGV4dCwgKHN1Y2Nlc3MpID0+IHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgdXBkYXRlQ291bnRNZXRyaWMoY29udGV4dCk7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJzaW5nbGVQcm9jZXNzVHJhbnNwaWxlRmlsZXNPcGVyYXRpb24iLCJ1cGRhdGVDb3VudE1ldHJpYyIsInJlcXVpcmUiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZG9uZSIsImNvbnRleHQiLCJmaWxlUGF0aHMiLCJ0cmFuc3BpbGVGaWxlT3BlcmF0aW9uIiwiZmlsZVBhdGgiLCJuZXh0IiwidHJhbnNwaWxlRmlsZSIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkJBUmM7c0VBRVo7Ozs7OztBQUUxQixNQUFNLEVBQUVDLGlCQUFpQixFQUFFLEdBQUdDLFFBQVE7QUFFdEMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0MsZ0NBQXFCO0FBRTFCLFNBQVNKLHFDQUFxQ0ssSUFBSSxFQUFFQyxPQUFPO0lBQ3hFLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdEO0lBRXRCSCxRQUFRSSxXQUFXQyx3QkFBd0JILE1BQU1DO0FBQ25EO0FBRUEsU0FBU0UsdUJBQXVCQyxRQUFRLEVBQUVDLElBQUksRUFBRUwsSUFBSSxFQUFFQyxPQUFPO0lBQzNESyxJQUFBQSxzQkFBYSxFQUFDRixVQUFVSCxTQUFTLENBQUNNO1FBQ2hDLElBQUlBLFNBQVM7WUFDWFgsa0JBQWtCSztRQUNwQjtRQUVBSTtJQUNGO0FBQ0YifQ==