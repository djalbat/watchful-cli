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
        const json = context, jsonString = JSON.stringify(json), contextString = jsonString, args = [
            contextString
        ], process = _child_process.default.fork(require.resolve(_constants.PROCESS_TRANSPILE_FILE), args), parameters = null, transpileFileWrapper = new TranspileFileWrapper(process, callback, parameters);
        process.on(_constants.MESSAGE, (message)=>{
            transpileFileWrapper.messageHandler(message);
        });
        return transpileFileWrapper;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93cmFwcGVyL3RyYW5zcGlsZUZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjaGlsZF9wcm9jZXNzIGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5cbmltcG9ydCB7IE1FU1NBR0UsIFBST0NFU1NfVFJBTlNQSUxFX0ZJTEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcGlsZUZpbGVXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IocHJvY2VzcywgY2FsbGJhY2ssIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnByb2Nlc3MgPSBwcm9jZXNzO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UHJvY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XG4gIH1cblxuICBzZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgc2VuZChmaWxlUGF0aCkge1xuICAgIHRoaXMucHJvY2Vzcy5zZW5kKGZpbGVQYXRoKTtcbiAgfVxuXG4gIG1lc3NhZ2VIYW5kbGVyKHN1Y2Nlc3MpIHtcbiAgICBjb25zdCB0cmFuc3BpbGVGaWxlV3JhcHBlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMuY2FsbGJhY2sodHJhbnNwaWxlRmlsZVdyYXBwZXIsIHN1Y2Nlc3MpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DYWxsYmFjayhjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGNvbnN0IHsgZGVidWcsIHF1aWV0bHksIHRyYW5zcGlsZXIsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGggfSA9IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0geyAvLy9cbiAgICAgIGRlYnVnLFxuICAgICAgcXVpZXRseSxcbiAgICAgIHRyYW5zcGlsZXIsXG4gICAgICBzb3VyY2VEaXJlY3RvcnlQYXRoLFxuICAgICAgdGFyZ2V0RGlyZWN0b3J5UGF0aFxuICAgIH1cblxuICAgIGNvbnN0IGpzb24gPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGV4dFN0cmluZyA9IGpzb25TdHJpbmcsIC8vL1xuICAgICAgICAgIGFyZ3MgPSBbXG4gICAgICAgICAgICBjb250ZXh0U3RyaW5nXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcm9jZXNzID0gY2hpbGRfcHJvY2Vzcy5mb3JrKHJlcXVpcmUucmVzb2x2ZShQUk9DRVNTX1RSQU5TUElMRV9GSUxFKSwgYXJncyksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG51bGwsXG4gICAgICAgICAgdHJhbnNwaWxlRmlsZVdyYXBwZXIgPSBuZXcgVHJhbnNwaWxlRmlsZVdyYXBwZXIocHJvY2VzcywgY2FsbGJhY2ssIHBhcmFtZXRlcnMpO1xuXG4gICAgcHJvY2Vzcy5vbihNRVNTQUdFLCAobWVzc2FnZSkgPT4ge1xuICAgICAgdHJhbnNwaWxlRmlsZVdyYXBwZXIubWVzc2FnZUhhbmRsZXIobWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJhbnNwaWxlRmlsZVdyYXBwZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUcmFuc3BpbGVGaWxlV3JhcHBlciIsInByb2Nlc3MiLCJjYWxsYmFjayIsInBhcmFtZXRlcnMiLCJnZXRQcm9jZXNzIiwiZ2V0Q2FsbGJhY2siLCJzZXRQYXJhbWV0ZXJzIiwiZ2V0UGFyYW1ldGVycyIsInNlbmQiLCJmaWxlUGF0aCIsIm1lc3NhZ2VIYW5kbGVyIiwic3VjY2VzcyIsInRyYW5zcGlsZUZpbGVXcmFwcGVyIiwiZnJvbUNhbGxiYWNrIiwiY29udGV4dCIsImRlYnVnIiwicXVpZXRseSIsInRyYW5zcGlsZXIiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwidGFyZ2V0RGlyZWN0b3J5UGF0aCIsImpzb24iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRleHRTdHJpbmciLCJhcmdzIiwiY2hpbGRfcHJvY2VzcyIsImZvcmsiLCJyZXF1aXJlIiwicmVzb2x2ZSIsIlBST0NFU1NfVFJBTlNQSUxFX0ZJTEUiLCJvbiIsIk1FU1NBR0UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3NFQUpLOzJCQUVzQjs7Ozs7O0FBRWpDLE1BQU1BO0lBQ25CLFlBQVlDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLENBQUU7UUFDekMsSUFBSSxDQUFDRixPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNILE9BQU87SUFDckI7SUFFQUksY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO0lBQ3RCO0lBRUFJLGNBQWNILFVBQVUsRUFBRTtRQUN4QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssS0FBS0MsUUFBUSxFQUFFO1FBQ2IsSUFBSSxDQUFDUixPQUFPLENBQUNPLElBQUksQ0FBQ0M7SUFDcEI7SUFFQUMsZUFBZUMsT0FBTyxFQUFFO1FBQ3RCLE1BQU1DLHVCQUF1QixJQUFJLEVBQUcsR0FBRztRQUV2QyxJQUFJLENBQUNWLFFBQVEsQ0FBQ1Usc0JBQXNCRDtJQUN0QztJQUVBLE9BQU9FLGFBQWFYLFFBQVEsRUFBRVksT0FBTyxFQUFFO1FBQ3JDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsbUJBQW1CLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdMO1FBRWpGQSxVQUFVO1lBQ1JDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPTixTQUNQTyxhQUFhQyxLQUFLQyxTQUFTLENBQUNILE9BQzVCSSxnQkFBZ0JILFlBQ2hCSSxPQUFPO1lBQ0xEO1NBQ0QsRUFDRHZCLFVBQVV5QixzQkFBYSxDQUFDQyxJQUFJLENBQUNDLFFBQVFDLE9BQU8sQ0FBQ0MsaUNBQXNCLEdBQUdMLE9BQ3RFdEIsYUFBYSxNQUNiUyx1QkFBdUIsSUFBSVoscUJBQXFCQyxTQUFTQyxVQUFVQztRQUV6RUYsUUFBUThCLEVBQUUsQ0FBQ0Msa0JBQU8sRUFBRSxDQUFDQztZQUNuQnJCLHFCQUFxQkYsY0FBYyxDQUFDdUI7UUFDdEM7UUFFQSxPQUFPckI7SUFDVDtBQUNGIn0=