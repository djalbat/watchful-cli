"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TranspileFileWrapper;
    }
});
const _child_process = /*#__PURE__*/ _interop_require_default(require("child_process"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TranspileFileWrapper {
    constructor(process, callback, parameters){
        this.process = process;
        this.callback = callback;
        this.parameters = parameters;
    }
    getProcess() {
        return this.process;
    }
    getCallback() {
        return this.callback;
    }
    setParameters(parameters) {
        this.parameters = parameters;
    }
    getParameters() {
        return this.parameters;
    }
    send(filePath) {
        this.process.send(filePath);
    }
    messageHandler(success) {
        const transpileFileWrapper = this; ///
        this.callback(transpileFileWrapper, success);
    }
    static fromCallback(callback, context) {
        const { debug, quietly, transpiler, sourceDirectoryPath, targetDirectoryPath } = context;
        context = {
            debug,
            quietly,
            transpiler,
            sourceDirectoryPath,
            targetDirectoryPath
        };
        const contextString = JSON.stringify(context), args = [
            contextString
        ], process = _child_process.default.fork(require.resolve(_constants.PROCESS_TRANSPILE_FILE), args), parameters = null, transpileFileWrapper = new TranspileFileWrapper(process, callback, parameters);
        process.on(_constants.MESSAGE, (message)=>{
            transpileFileWrapper.messageHandler(message);
        });
        return transpileFileWrapper;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93cmFwcGVyL3RyYW5zcGlsZUZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjaGlsZF9wcm9jZXNzIGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5cbmltcG9ydCB7IE1FU1NBR0UsIFBST0NFU1NfVFJBTlNQSUxFX0ZJTEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcGlsZUZpbGVXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IocHJvY2VzcywgY2FsbGJhY2ssIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnByb2Nlc3MgPSBwcm9jZXNzO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UHJvY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XG4gIH1cblxuICBzZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgc2VuZChmaWxlUGF0aCkge1xuICAgIHRoaXMucHJvY2Vzcy5zZW5kKGZpbGVQYXRoKTtcbiAgfVxuXG4gIG1lc3NhZ2VIYW5kbGVyKHN1Y2Nlc3MpIHtcbiAgICBjb25zdCB0cmFuc3BpbGVGaWxlV3JhcHBlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMuY2FsbGJhY2sodHJhbnNwaWxlRmlsZVdyYXBwZXIsIHN1Y2Nlc3MpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DYWxsYmFjayhjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGNvbnN0IHsgZGVidWcsIHF1aWV0bHksIHRyYW5zcGlsZXIsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGggfSA9IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0geyAvLy9cbiAgICAgIGRlYnVnLFxuICAgICAgcXVpZXRseSxcbiAgICAgIHRyYW5zcGlsZXIsXG4gICAgICBzb3VyY2VEaXJlY3RvcnlQYXRoLFxuICAgICAgdGFyZ2V0RGlyZWN0b3J5UGF0aFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjb250ZXh0KSxcbiAgICAgICAgICBhcmdzID0gW1xuICAgICAgICAgICAgY29udGV4dFN0cmluZ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJvY2VzcyA9IGNoaWxkX3Byb2Nlc3MuZm9yayhyZXF1aXJlLnJlc29sdmUoUFJPQ0VTU19UUkFOU1BJTEVfRklMRSksIGFyZ3MpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBudWxsLFxuICAgICAgICAgIHRyYW5zcGlsZUZpbGVXcmFwcGVyID0gbmV3IFRyYW5zcGlsZUZpbGVXcmFwcGVyKHByb2Nlc3MsIGNhbGxiYWNrLCBwYXJhbWV0ZXJzKTtcblxuICAgIHByb2Nlc3Mub24oTUVTU0FHRSwgKG1lc3NhZ2UpID0+IHtcbiAgICAgIHRyYW5zcGlsZUZpbGVXcmFwcGVyLm1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyYW5zcGlsZUZpbGVXcmFwcGVyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVHJhbnNwaWxlRmlsZVdyYXBwZXIiLCJwcm9jZXNzIiwiY2FsbGJhY2siLCJwYXJhbWV0ZXJzIiwiZ2V0UHJvY2VzcyIsImdldENhbGxiYWNrIiwic2V0UGFyYW1ldGVycyIsImdldFBhcmFtZXRlcnMiLCJzZW5kIiwiZmlsZVBhdGgiLCJtZXNzYWdlSGFuZGxlciIsInN1Y2Nlc3MiLCJ0cmFuc3BpbGVGaWxlV3JhcHBlciIsImZyb21DYWxsYmFjayIsImNvbnRleHQiLCJkZWJ1ZyIsInF1aWV0bHkiLCJ0cmFuc3BpbGVyIiwic291cmNlRGlyZWN0b3J5UGF0aCIsInRhcmdldERpcmVjdG9yeVBhdGgiLCJjb250ZXh0U3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImFyZ3MiLCJjaGlsZF9wcm9jZXNzIiwiZm9yayIsInJlcXVpcmUiLCJyZXNvbHZlIiwiUFJPQ0VTU19UUkFOU1BJTEVfRklMRSIsIm9uIiwiTUVTU0FHRSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7c0VBSks7MkJBRXNCOzs7Ozs7QUFFakMsTUFBTUE7SUFDbkIsWUFBWUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsQ0FBRTtRQUN6QyxJQUFJLENBQUNGLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0gsT0FBTztJQUNyQjtJQUVBSSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksY0FBY0gsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtJQUNwQjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0osVUFBVTtJQUN4QjtJQUVBSyxLQUFLQyxRQUFRLEVBQUU7UUFDYixJQUFJLENBQUNSLE9BQU8sQ0FBQ08sSUFBSSxDQUFDQztJQUNwQjtJQUVBQyxlQUFlQyxPQUFPLEVBQUU7UUFDdEIsTUFBTUMsdUJBQXVCLElBQUksRUFBRyxHQUFHO1FBRXZDLElBQUksQ0FBQ1YsUUFBUSxDQUFDVSxzQkFBc0JEO0lBQ3RDO0lBRUEsT0FBT0UsYUFBYVgsUUFBUSxFQUFFWSxPQUFPLEVBQUU7UUFDckMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxtQkFBbUIsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0w7UUFFakZBLFVBQVU7WUFDUkM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtRQUVBLE1BQU1DLGdCQUFnQkMsS0FBS0MsU0FBUyxDQUFDUixVQUMvQlMsT0FBTztZQUNMSDtTQUNELEVBQ0RuQixVQUFVdUIsc0JBQWEsQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRQyxPQUFPLENBQUNDLGlDQUFzQixHQUFHTCxPQUN0RXBCLGFBQWEsTUFDYlMsdUJBQXVCLElBQUlaLHFCQUFxQkMsU0FBU0MsVUFBVUM7UUFFekVGLFFBQVE0QixFQUFFLENBQUNDLGtCQUFPLEVBQUUsQ0FBQ0M7WUFDbkJuQixxQkFBcUJGLGNBQWMsQ0FBQ3FCO1FBQ3RDO1FBRUEsT0FBT25CO0lBQ1Q7QUFDRiJ9