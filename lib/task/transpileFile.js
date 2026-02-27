"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TranspileFileTask;
    }
});
const _task = /*#__PURE__*/ _interop_require_default(require("../task"));
const _transpileFile = /*#__PURE__*/ _interop_require_default(require("../transpileFile"));
const _metrics = require("../utilities/metrics");
const _path = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TranspileFileTask extends _task.default {
    static fromPath(path, context) {
        let transpileFileTask = null;
        const { sourceDirectoryPath } = context, sourceFilePath = path, filePath = (0, _path.pathWithoutDirectoryPathFromPathAndDirectoryPath)(sourceFilePath, sourceDirectoryPath); ///
        transpileFileTask = new TranspileFileTask(_transpileFile.default, filePath, context, (success)=>{
            if (success) {
                const { metrics } = context;
                if (metrics) {
                    (0, _metrics.updateCountMetric)(context);
                }
            }
        });
        return transpileFileTask;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL3RyYW5zcGlsZUZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrXCI7XG5pbXBvcnQgdHJhbnNwaWxlRmlsZSBmcm9tICcuLi90cmFuc3BpbGVGaWxlJztcblxuaW1wb3J0IHsgdXBkYXRlQ291bnRNZXRyaWMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21ldHJpY3NcIjtcbmltcG9ydCB7IHBhdGhXaXRob3V0RGlyZWN0b3J5UGF0aEZyb21QYXRoQW5kRGlyZWN0b3J5UGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc3BpbGVGaWxlVGFzayBleHRlbmRzIFRhc2sge1xuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgY29udGV4dCkge1xuICAgIGxldCB0cmFuc3BpbGVGaWxlVGFzayA9IG51bGw7XG5cbiAgICBjb25zdCB7IHNvdXJjZURpcmVjdG9yeVBhdGggfSA9IGNvbnRleHQsXG4gICAgICAgICAgc291cmNlRmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGgoc291cmNlRmlsZVBhdGgsIHNvdXJjZURpcmVjdG9yeVBhdGgpOyAvLy9cblxuICAgIHRyYW5zcGlsZUZpbGVUYXNrID0gbmV3IFRyYW5zcGlsZUZpbGVUYXNrKHRyYW5zcGlsZUZpbGUsIGZpbGVQYXRoLCBjb250ZXh0LCAoc3VjY2VzcykgPT4ge1xuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb250ZXh0O1xuXG4gICAgICAgIGlmIChtZXRyaWNzKSB7XG4gICAgICAgICAgdXBkYXRlQ291bnRNZXRyaWMoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc3BpbGVGaWxlVGFzaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRyYW5zcGlsZUZpbGVUYXNrIiwiVGFzayIsImZyb21QYXRoIiwicGF0aCIsImNvbnRleHQiLCJ0cmFuc3BpbGVGaWxlVGFzayIsInNvdXJjZURpcmVjdG9yeVBhdGgiLCJzb3VyY2VGaWxlUGF0aCIsImZpbGVQYXRoIiwicGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoIiwidHJhbnNwaWxlRmlsZSIsInN1Y2Nlc3MiLCJtZXRyaWNzIiwidXBkYXRlQ291bnRNZXRyaWMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7NkRBTko7c0VBQ1M7eUJBRVE7c0JBQytCOzs7Ozs7QUFFbEQsTUFBTUEsMEJBQTBCQyxhQUFJO0lBQ2pELE9BQU9DLFNBQVNDLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBQzdCLElBQUlDLG9CQUFvQjtRQUV4QixNQUFNLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdGLFNBQzFCRyxpQkFBaUJKLE1BQ2pCSyxXQUFXQyxJQUFBQSxzREFBZ0QsRUFBQ0YsZ0JBQWdCRCxzQkFBc0IsR0FBRztRQUUzR0Qsb0JBQW9CLElBQUlMLGtCQUFrQlUsc0JBQWEsRUFBRUYsVUFBVUosU0FBUyxDQUFDTztZQUMzRSxJQUFJQSxTQUFTO2dCQUNYLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdSO2dCQUVwQixJQUFJUSxTQUFTO29CQUNYQyxJQUFBQSwwQkFBaUIsRUFBQ1Q7Z0JBQ3BCO1lBQ0Y7UUFDRjtRQUVBLE9BQU9DO0lBQ1Q7QUFDRiJ9