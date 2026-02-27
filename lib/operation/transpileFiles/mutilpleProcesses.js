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
const _transpileFile = /*#__PURE__*/ _interop_require_default(require("../../wrapper/transpileFile"));
const _metrics = require("../../utilities/metrics");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function multipleProcessesTranspileFilesOperation(done, context) {
    const { filePaths, processesLength } = context, filePathsLength = filePaths.length, transpileFileWrappers = [], length = Math.min(filePathsLength, processesLength);
    for(let count = 0; count < length; count++){
        const transpileFileWrapper = _transpileFile.default.fromCallback(callback, context);
        transpileFileWrappers.push(transpileFileWrapper);
    }
    Object.assign(context, {
        transpileFileWrappers
    });
    let index = 0;
    function next() {
        if (index === filePathsLength) {
            const transpileFileWrappersLength = transpileFileWrappers.length;
            if (transpileFileWrappersLength === length) {
                done();
            }
            return;
        }
        const filePath = filePaths[index++], transpileFileWrapper = transpileFileWrappers.pop();
        transpileFileWrapper.send(filePath);
    }
    function callback(transpileFileWrapper, success) {
        if (success) {
            (0, _metrics.updateCountMetric)(context);
        }
        transpileFileWrappers.push(transpileFileWrapper);
        next();
    }
    for(let count = 0; count < length; count++){
        next();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vdHJhbnNwaWxlRmlsZXMvbXV0aWxwbGVQcm9jZXNzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUcmFuc3BpbGVGaWxlV3JhcHBlciBmcm9tIFwiLi4vLi4vd3JhcHBlci90cmFuc3BpbGVGaWxlXCI7XG5cbmltcG9ydCB7IHVwZGF0ZUNvdW50TWV0cmljIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tZXRyaWNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG11bHRpcGxlUHJvY2Vzc2VzVHJhbnNwaWxlRmlsZXNPcGVyYXRpb24oZG9uZSwgY29udGV4dCkge1xuICBjb25zdCB7IGZpbGVQYXRocywgcHJvY2Vzc2VzTGVuZ3RoIH0gPSBjb250ZXh0LFxuICAgICAgICBmaWxlUGF0aHNMZW5ndGggPSBmaWxlUGF0aHMubGVuZ3RoLFxuICAgICAgICB0cmFuc3BpbGVGaWxlV3JhcHBlcnMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5taW4oZmlsZVBhdGhzTGVuZ3RoLCBwcm9jZXNzZXNMZW5ndGgpO1xuXG4gIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBsZW5ndGg7IGNvdW50KyspIHtcbiAgICBjb25zdCB0cmFuc3BpbGVGaWxlV3JhcHBlciA9IFRyYW5zcGlsZUZpbGVXcmFwcGVyLmZyb21DYWxsYmFjayhjYWxsYmFjaywgY29udGV4dCk7XG5cbiAgICB0cmFuc3BpbGVGaWxlV3JhcHBlcnMucHVzaCh0cmFuc3BpbGVGaWxlV3JhcHBlcik7XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICB0cmFuc3BpbGVGaWxlV3JhcHBlcnNcbiAgfSk7XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpbmRleCA9PT0gZmlsZVBhdGhzTGVuZ3RoKSB7XG4gICAgICBjb25zdCB0cmFuc3BpbGVGaWxlV3JhcHBlcnNMZW5ndGggPSB0cmFuc3BpbGVGaWxlV3JhcHBlcnMubGVuZ3RoO1xuXG4gICAgICBpZiAodHJhbnNwaWxlRmlsZVdyYXBwZXJzTGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlUGF0aHNbaW5kZXgrK10sXG4gICAgICAgICAgdHJhbnNwaWxlRmlsZVdyYXBwZXIgPSB0cmFuc3BpbGVGaWxlV3JhcHBlcnMucG9wKCk7XG5cbiAgICB0cmFuc3BpbGVGaWxlV3JhcHBlci5zZW5kKGZpbGVQYXRoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKHRyYW5zcGlsZUZpbGVXcmFwcGVyLCBzdWNjZXNzKSB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHVwZGF0ZUNvdW50TWV0cmljKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHRyYW5zcGlsZUZpbGVXcmFwcGVycy5wdXNoKHRyYW5zcGlsZUZpbGVXcmFwcGVyKTtcblxuICAgIG5leHQoKTtcbiAgfVxuXG4gIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBsZW5ndGg7IGNvdW50KyspIHtcbiAgICBuZXh0KCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtdWx0aXBsZVByb2Nlc3Nlc1RyYW5zcGlsZUZpbGVzT3BlcmF0aW9uIiwiZG9uZSIsImNvbnRleHQiLCJmaWxlUGF0aHMiLCJwcm9jZXNzZXNMZW5ndGgiLCJmaWxlUGF0aHNMZW5ndGgiLCJsZW5ndGgiLCJ0cmFuc3BpbGVGaWxlV3JhcHBlcnMiLCJNYXRoIiwibWluIiwiY291bnQiLCJ0cmFuc3BpbGVGaWxlV3JhcHBlciIsIlRyYW5zcGlsZUZpbGVXcmFwcGVyIiwiZnJvbUNhbGxiYWNrIiwiY2FsbGJhY2siLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJuZXh0IiwidHJhbnNwaWxlRmlsZVdyYXBwZXJzTGVuZ3RoIiwiZmlsZVBhdGgiLCJwb3AiLCJzZW5kIiwic3VjY2VzcyIsInVwZGF0ZUNvdW50TWV0cmljIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7O3NFQUpTO3lCQUVDOzs7Ozs7QUFFbkIsU0FBU0EseUNBQXlDQyxJQUFJLEVBQUVDLE9BQU87SUFDNUUsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGVBQWUsRUFBRSxHQUFHRixTQUNqQ0csa0JBQWtCRixVQUFVRyxNQUFNLEVBQ2xDQyx3QkFBd0IsRUFBRSxFQUMxQkQsU0FBU0UsS0FBS0MsR0FBRyxDQUFDSixpQkFBaUJEO0lBRXpDLElBQUssSUFBSU0sUUFBUSxHQUFHQSxRQUFRSixRQUFRSSxRQUFTO1FBQzNDLE1BQU1DLHVCQUF1QkMsc0JBQW9CLENBQUNDLFlBQVksQ0FBQ0MsVUFBVVo7UUFFekVLLHNCQUFzQlEsSUFBSSxDQUFDSjtJQUM3QjtJQUVBSyxPQUFPQyxNQUFNLENBQUNmLFNBQVM7UUFDckJLO0lBQ0Y7SUFFQSxJQUFJVyxRQUFRO0lBRVosU0FBU0M7UUFDUCxJQUFJRCxVQUFVYixpQkFBaUI7WUFDN0IsTUFBTWUsOEJBQThCYixzQkFBc0JELE1BQU07WUFFaEUsSUFBSWMsZ0NBQWdDZCxRQUFRO2dCQUMxQ0w7WUFDRjtZQUVBO1FBQ0Y7UUFFQSxNQUFNb0IsV0FBV2xCLFNBQVMsQ0FBQ2UsUUFBUSxFQUM3QlAsdUJBQXVCSixzQkFBc0JlLEdBQUc7UUFFdERYLHFCQUFxQlksSUFBSSxDQUFDRjtJQUM1QjtJQUVBLFNBQVNQLFNBQVNILG9CQUFvQixFQUFFYSxPQUFPO1FBQzdDLElBQUlBLFNBQVM7WUFDWEMsSUFBQUEsMEJBQWlCLEVBQUN2QjtRQUNwQjtRQUVBSyxzQkFBc0JRLElBQUksQ0FBQ0o7UUFFM0JRO0lBQ0Y7SUFFQSxJQUFLLElBQUlULFFBQVEsR0FBR0EsUUFBUUosUUFBUUksUUFBUztRQUMzQ1M7SUFDRjtBQUNGIn0=