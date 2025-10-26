"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return multipleProcessesTranspileFilesOperation;
    }
});
var _transpileFile = /*#__PURE__*/ _interop_require_default(require("../../wrapper/transpileFile"));
var _metrics = require("../../utilities/metrics");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function multipleProcessesTranspileFilesOperation(done, context) {
    var filePaths = context.filePaths, processesLength = context.processesLength, filePathsLength = filePaths.length, transpileFileWrappers = [], length = Math.min(filePathsLength, processesLength);
    for(var count = 0; count < length; count++){
        var transpileFileWrapper = _transpileFile.default.fromCallback(callback, context);
        transpileFileWrappers.push(transpileFileWrapper);
    }
    Object.assign(context, {
        transpileFileWrappers: transpileFileWrappers
    });
    var index = 0;
    function next() {
        if (index === filePathsLength) {
            var transpileFileWrappersLength = transpileFileWrappers.length;
            if (transpileFileWrappersLength === length) {
                done();
            }
            return;
        }
        var filePath = filePaths[index++], transpileFileWrapper = transpileFileWrappers.pop();
        transpileFileWrapper.send(filePath);
    }
    function callback(transpileFileWrapper, success) {
        if (success) {
            (0, _metrics.updateCountMetric)(context);
        }
        transpileFileWrappers.push(transpileFileWrapper);
        next();
    }
    for(var count1 = 0; count1 < length; count1++){
        next();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vdHJhbnNwaWxlRmlsZXMvbXV0aWxwbGVQcm9jZXNzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUcmFuc3BpbGVGaWxlV3JhcHBlciBmcm9tIFwiLi4vLi4vd3JhcHBlci90cmFuc3BpbGVGaWxlXCI7XG5cbmltcG9ydCB7IHVwZGF0ZUNvdW50TWV0cmljIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tZXRyaWNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG11bHRpcGxlUHJvY2Vzc2VzVHJhbnNwaWxlRmlsZXNPcGVyYXRpb24oZG9uZSwgY29udGV4dCkge1xuICBjb25zdCB7IGZpbGVQYXRocywgcHJvY2Vzc2VzTGVuZ3RoIH0gPSBjb250ZXh0LFxuICAgICAgICBmaWxlUGF0aHNMZW5ndGggPSBmaWxlUGF0aHMubGVuZ3RoLFxuICAgICAgICB0cmFuc3BpbGVGaWxlV3JhcHBlcnMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5taW4oZmlsZVBhdGhzTGVuZ3RoLCBwcm9jZXNzZXNMZW5ndGgpO1xuXG4gIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBsZW5ndGg7IGNvdW50KyspIHtcbiAgICBjb25zdCB0cmFuc3BpbGVGaWxlV3JhcHBlciA9IFRyYW5zcGlsZUZpbGVXcmFwcGVyLmZyb21DYWxsYmFjayhjYWxsYmFjaywgY29udGV4dCk7XG5cbiAgICB0cmFuc3BpbGVGaWxlV3JhcHBlcnMucHVzaCh0cmFuc3BpbGVGaWxlV3JhcHBlcik7XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICB0cmFuc3BpbGVGaWxlV3JhcHBlcnNcbiAgfSk7XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpbmRleCA9PT0gZmlsZVBhdGhzTGVuZ3RoKSB7XG4gICAgICBjb25zdCB0cmFuc3BpbGVGaWxlV3JhcHBlcnNMZW5ndGggPSB0cmFuc3BpbGVGaWxlV3JhcHBlcnMubGVuZ3RoO1xuXG4gICAgICBpZiAodHJhbnNwaWxlRmlsZVdyYXBwZXJzTGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlUGF0aHNbaW5kZXgrK10sXG4gICAgICAgICAgdHJhbnNwaWxlRmlsZVdyYXBwZXIgPSB0cmFuc3BpbGVGaWxlV3JhcHBlcnMucG9wKCk7XG5cbiAgICB0cmFuc3BpbGVGaWxlV3JhcHBlci5zZW5kKGZpbGVQYXRoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKHRyYW5zcGlsZUZpbGVXcmFwcGVyLCBzdWNjZXNzKSB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHVwZGF0ZUNvdW50TWV0cmljKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHRyYW5zcGlsZUZpbGVXcmFwcGVycy5wdXNoKHRyYW5zcGlsZUZpbGVXcmFwcGVyKTtcblxuICAgIG5leHQoKTtcbiAgfVxuXG4gIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBsZW5ndGg7IGNvdW50KyspIHtcbiAgICBuZXh0KCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtdWx0aXBsZVByb2Nlc3Nlc1RyYW5zcGlsZUZpbGVzT3BlcmF0aW9uIiwiZG9uZSIsImNvbnRleHQiLCJmaWxlUGF0aHMiLCJwcm9jZXNzZXNMZW5ndGgiLCJmaWxlUGF0aHNMZW5ndGgiLCJsZW5ndGgiLCJ0cmFuc3BpbGVGaWxlV3JhcHBlcnMiLCJNYXRoIiwibWluIiwiY291bnQiLCJ0cmFuc3BpbGVGaWxlV3JhcHBlciIsIlRyYW5zcGlsZUZpbGVXcmFwcGVyIiwiZnJvbUNhbGxiYWNrIiwiY2FsbGJhY2siLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJuZXh0IiwidHJhbnNwaWxlRmlsZVdyYXBwZXJzTGVuZ3RoIiwiZmlsZVBhdGgiLCJwb3AiLCJzZW5kIiwic3VjY2VzcyIsInVwZGF0ZUNvdW50TWV0cmljIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7O29FQUpTO3VCQUVDOzs7Ozs7QUFFbkIsU0FBU0EseUNBQXlDQyxJQUFJLEVBQUVDLE9BQU87SUFDNUUsSUFBUUMsWUFBK0JELFFBQS9CQyxXQUFXQyxrQkFBb0JGLFFBQXBCRSxpQkFDYkMsa0JBQWtCRixVQUFVRyxNQUFNLEVBQ2xDQyx3QkFBd0IsRUFBRSxFQUMxQkQsU0FBU0UsS0FBS0MsR0FBRyxDQUFDSixpQkFBaUJEO0lBRXpDLElBQUssSUFBSU0sUUFBUSxHQUFHQSxRQUFRSixRQUFRSSxRQUFTO1FBQzNDLElBQU1DLHVCQUF1QkMsc0JBQW9CLENBQUNDLFlBQVksQ0FBQ0MsVUFBVVo7UUFFekVLLHNCQUFzQlEsSUFBSSxDQUFDSjtJQUM3QjtJQUVBSyxPQUFPQyxNQUFNLENBQUNmLFNBQVM7UUFDckJLLHVCQUFBQTtJQUNGO0lBRUEsSUFBSVcsUUFBUTtJQUVaLFNBQVNDO1FBQ1AsSUFBSUQsVUFBVWIsaUJBQWlCO1lBQzdCLElBQU1lLDhCQUE4QmIsc0JBQXNCRCxNQUFNO1lBRWhFLElBQUljLGdDQUFnQ2QsUUFBUTtnQkFDMUNMO1lBQ0Y7WUFFQTtRQUNGO1FBRUEsSUFBTW9CLFdBQVdsQixTQUFTLENBQUNlLFFBQVEsRUFDN0JQLHVCQUF1Qkosc0JBQXNCZSxHQUFHO1FBRXREWCxxQkFBcUJZLElBQUksQ0FBQ0Y7SUFDNUI7SUFFQSxTQUFTUCxTQUFTSCxvQkFBb0IsRUFBRWEsT0FBTztRQUM3QyxJQUFJQSxTQUFTO1lBQ1hDLElBQUFBLDBCQUFpQixFQUFDdkI7UUFDcEI7UUFFQUssc0JBQXNCUSxJQUFJLENBQUNKO1FBRTNCUTtJQUNGO0lBRUEsSUFBSyxJQUFJVCxTQUFRLEdBQUdBLFNBQVFKLFFBQVFJLFNBQVM7UUFDM0NTO0lBQ0Y7QUFDRiJ9