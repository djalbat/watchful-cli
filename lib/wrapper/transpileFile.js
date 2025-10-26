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
var _child_process = /*#__PURE__*/ _interop_require_default(require("child_process"));
var _constants = require("../constants");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TranspileFileWrapper = /*#__PURE__*/ function() {
    function TranspileFileWrapper(process, callback, parameters) {
        _class_call_check(this, TranspileFileWrapper);
        this.process = process;
        this.callback = callback;
        this.parameters = parameters;
    }
    _create_class(TranspileFileWrapper, [
        {
            key: "getProcess",
            value: function getProcess() {
                return this.process;
            }
        },
        {
            key: "getCallback",
            value: function getCallback() {
                return this.callback;
            }
        },
        {
            key: "setParameters",
            value: function setParameters(parameters) {
                this.parameters = parameters;
            }
        },
        {
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "send",
            value: function send(filePath) {
                this.process.send(filePath);
            }
        },
        {
            key: "messageHandler",
            value: function messageHandler(success) {
                var transpileFileWrapper = this; ///
                this.callback(transpileFileWrapper, success);
            }
        }
    ], [
        {
            key: "fromCallback",
            value: function fromCallback(callback, context) {
                var debug = context.debug, quietly = context.quietly, transpiler = context.transpiler, sourceDirectoryPath = context.sourceDirectoryPath, targetDirectoryPath = context.targetDirectoryPath;
                context = {
                    debug: debug,
                    quietly: quietly,
                    transpiler: transpiler,
                    sourceDirectoryPath: sourceDirectoryPath,
                    targetDirectoryPath: targetDirectoryPath
                };
                var contextString = JSON.stringify(context), args = [
                    contextString
                ], process = _child_process.default.fork(require.resolve(_constants.PROCESS_TRANSPILE_FILE), args), parameters = null, transpileFileWrapper = new TranspileFileWrapper(process, callback, parameters);
                process.on(_constants.MESSAGE, function(message) {
                    return transpileFileWrapper.messageHandler(message);
                });
                return transpileFileWrapper;
            }
        }
    ]);
    return TranspileFileWrapper;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93cmFwcGVyL3RyYW5zcGlsZUZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjaGlsZF9wcm9jZXNzIGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5cbmltcG9ydCB7IE1FU1NBR0UsIFBST0NFU1NfVFJBTlNQSUxFX0ZJTEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcGlsZUZpbGVXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IocHJvY2VzcywgY2FsbGJhY2ssIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnByb2Nlc3MgPSBwcm9jZXNzO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UHJvY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XG4gIH1cblxuICBzZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgc2VuZChmaWxlUGF0aCkge1xuICAgIHRoaXMucHJvY2Vzcy5zZW5kKGZpbGVQYXRoKTtcbiAgfVxuXG4gIG1lc3NhZ2VIYW5kbGVyKHN1Y2Nlc3MpIHtcbiAgICBjb25zdCB0cmFuc3BpbGVGaWxlV3JhcHBlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMuY2FsbGJhY2sodHJhbnNwaWxlRmlsZVdyYXBwZXIsIHN1Y2Nlc3MpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DYWxsYmFjayhjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGNvbnN0IHsgZGVidWcsIHF1aWV0bHksIHRyYW5zcGlsZXIsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGggfSA9IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0geyAvLy9cbiAgICAgIGRlYnVnLFxuICAgICAgcXVpZXRseSxcbiAgICAgIHRyYW5zcGlsZXIsXG4gICAgICBzb3VyY2VEaXJlY3RvcnlQYXRoLFxuICAgICAgdGFyZ2V0RGlyZWN0b3J5UGF0aFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjb250ZXh0KSxcbiAgICAgICAgICBhcmdzID0gW1xuICAgICAgICAgICAgY29udGV4dFN0cmluZ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJvY2VzcyA9IGNoaWxkX3Byb2Nlc3MuZm9yayhyZXF1aXJlLnJlc29sdmUoUFJPQ0VTU19UUkFOU1BJTEVfRklMRSksIGFyZ3MpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBudWxsLFxuICAgICAgICAgIHRyYW5zcGlsZUZpbGVXcmFwcGVyID0gbmV3IFRyYW5zcGlsZUZpbGVXcmFwcGVyKHByb2Nlc3MsIGNhbGxiYWNrLCBwYXJhbWV0ZXJzKTtcblxuICAgIHByb2Nlc3Mub24oTUVTU0FHRSwgKG1lc3NhZ2UpID0+IHRyYW5zcGlsZUZpbGVXcmFwcGVyLm1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpKTtcblxuICAgIHJldHVybiB0cmFuc3BpbGVGaWxlV3JhcHBlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRyYW5zcGlsZUZpbGVXcmFwcGVyIiwicHJvY2VzcyIsImNhbGxiYWNrIiwicGFyYW1ldGVycyIsImdldFByb2Nlc3MiLCJnZXRDYWxsYmFjayIsInNldFBhcmFtZXRlcnMiLCJnZXRQYXJhbWV0ZXJzIiwic2VuZCIsImZpbGVQYXRoIiwibWVzc2FnZUhhbmRsZXIiLCJzdWNjZXNzIiwidHJhbnNwaWxlRmlsZVdyYXBwZXIiLCJmcm9tQ2FsbGJhY2siLCJjb250ZXh0IiwiZGVidWciLCJxdWlldGx5IiwidHJhbnNwaWxlciIsInNvdXJjZURpcmVjdG9yeVBhdGgiLCJ0YXJnZXREaXJlY3RvcnlQYXRoIiwiY29udGV4dFN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcmdzIiwiY2hpbGRfcHJvY2VzcyIsImZvcmsiLCJyZXF1aXJlIiwicmVzb2x2ZSIsIlBST0NFU1NfVFJBTlNQSUxFX0ZJTEUiLCJvbiIsIk1FU1NBR0UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztvRUFKSzt5QkFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBQSxBQUFNQSxxQ0FBTjthQUFNQSxxQkFDUEMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7Z0NBRHRCSDtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFKREg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0gsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDUixPQUFPLENBQUNPLElBQUksQ0FBQ0M7WUFDcEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsT0FBTztnQkFDcEIsSUFBTUMsdUJBQXVCLElBQUksRUFBRyxHQUFHO2dCQUV2QyxJQUFJLENBQUNWLFFBQVEsQ0FBQ1Usc0JBQXNCRDtZQUN0Qzs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhWCxRQUFRLEVBQUVZLE9BQU87Z0JBQ25DLElBQVFDLFFBQXlFRCxRQUF6RUMsT0FBT0MsVUFBa0VGLFFBQWxFRSxTQUFTQyxhQUF5REgsUUFBekRHLFlBQVlDLHNCQUE2Q0osUUFBN0NJLHFCQUFxQkMsc0JBQXdCTCxRQUF4Qks7Z0JBRXpETCxVQUFVO29CQUNSQyxPQUFBQTtvQkFDQUMsU0FBQUE7b0JBQ0FDLFlBQUFBO29CQUNBQyxxQkFBQUE7b0JBQ0FDLHFCQUFBQTtnQkFDRjtnQkFFQSxJQUFNQyxnQkFBZ0JDLEtBQUtDLFNBQVMsQ0FBQ1IsVUFDL0JTLE9BQU87b0JBQ0xIO2lCQUNELEVBQ0RuQixVQUFVdUIsc0JBQWEsQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRQyxPQUFPLENBQUNDLGlDQUFzQixHQUFHTCxPQUN0RXBCLGFBQWEsTUFDYlMsdUJBQXVCLElBbERaWixxQkFrRHFDQyxTQUFTQyxVQUFVQztnQkFFekVGLFFBQVE0QixFQUFFLENBQUNDLGtCQUFPLEVBQUUsU0FBQ0M7MkJBQVluQixxQkFBcUJGLGNBQWMsQ0FBQ3FCOztnQkFFckUsT0FBT25CO1lBQ1Q7OztXQXZEbUJaIn0=