"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return bundleFiles;
    }
});
var _metrics = require("./utilities/metrics");
function bundleFiles(context, done) {
    var metrics = context.metrics, entryFilePath = context.entryFilePath, bundleFilePath = context.bundleFilePath, targetDirectoryPath = context.targetDirectoryPath, bundleFilesFunction = context.bundleFilesFunction;
    if (metrics) {
        (0, _metrics.startSecondsMetric)(context);
    }
    bundleFilesFunction(entryFilePath, bundleFilePath, targetDirectoryPath, function(success) {
        var metrics = context.metrics, quietly = context.quietly, bundleFilePath = context.bundleFilePath;
        if (metrics) {
            var seconds = (0, _metrics.endSecondsMetric)(context);
            if (success) {
                console.log("Bundled all files in ".concat(seconds, " seconds."));
            }
        }
        if (success) {
            if (!quietly) {
                if (bundleFilePath) {
                    console.log("Written bundle to '".concat(bundleFilePath, "'."));
                }
            }
        }
        done();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idW5kbGVGaWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RhcnRTZWNvbmRzTWV0cmljLCBlbmRTZWNvbmRzTWV0cmljIH0gZnJvbSBcIi4vdXRpbGl0aWVzL21ldHJpY3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVuZGxlRmlsZXMoY29udGV4dCwgZG9uZSkge1xuICBjb25zdCB7IG1ldHJpY3MsIGVudHJ5RmlsZVBhdGgsIGJ1bmRsZUZpbGVQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoLCBidW5kbGVGaWxlc0Z1bmN0aW9uIH0gPSBjb250ZXh0O1xuXG4gIGlmIChtZXRyaWNzKSB7XG4gICAgc3RhcnRTZWNvbmRzTWV0cmljKGNvbnRleHQpO1xuICB9XG5cbiAgYnVuZGxlRmlsZXNGdW5jdGlvbihlbnRyeUZpbGVQYXRoLCBidW5kbGVGaWxlUGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCwgKHN1Y2Nlc3MpID0+IHtcbiAgICBjb25zdCB7IG1ldHJpY3MsIHF1aWV0bHksIGJ1bmRsZUZpbGVQYXRoIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKG1ldHJpY3MpIHtcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBlbmRTZWNvbmRzTWV0cmljKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICBjb25zb2xlLmxvZyhgQnVuZGxlZCBhbGwgZmlsZXMgaW4gJHtzZWNvbmRzfSBzZWNvbmRzLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgICAgaWYgKGJ1bmRsZUZpbGVQYXRoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFdyaXR0ZW4gYnVuZGxlIHRvICcke2J1bmRsZUZpbGVQYXRofScuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb25lKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImJ1bmRsZUZpbGVzIiwiY29udGV4dCIsImRvbmUiLCJtZXRyaWNzIiwiZW50cnlGaWxlUGF0aCIsImJ1bmRsZUZpbGVQYXRoIiwidGFyZ2V0RGlyZWN0b3J5UGF0aCIsImJ1bmRsZUZpbGVzRnVuY3Rpb24iLCJzdGFydFNlY29uZHNNZXRyaWMiLCJzdWNjZXNzIiwicXVpZXRseSIsInNlY29uZHMiLCJlbmRTZWNvbmRzTWV0cmljIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7Ozt1QkFGNkI7QUFFdEMsU0FBU0EsWUFBWUMsT0FBTyxFQUFFQyxJQUFJO0lBQy9DLElBQVFDLFVBQXFGRixRQUFyRkUsU0FBU0MsZ0JBQTRFSCxRQUE1RUcsZUFBZUMsaUJBQTZESixRQUE3REksZ0JBQWdCQyxzQkFBNkNMLFFBQTdDSyxxQkFBcUJDLHNCQUF3Qk4sUUFBeEJNO0lBRXJFLElBQUlKLFNBQVM7UUFDWEssSUFBQUEsMkJBQWtCLEVBQUNQO0lBQ3JCO0lBRUFNLG9CQUFvQkgsZUFBZUMsZ0JBQWdCQyxxQkFBcUIsU0FBQ0c7UUFDdkUsSUFBUU4sVUFBcUNGLFFBQXJDRSxTQUFTTyxVQUE0QlQsUUFBNUJTLFNBQVNMLGlCQUFtQkosUUFBbkJJO1FBRTFCLElBQUlGLFNBQVM7WUFDWCxJQUFNUSxVQUFVQyxJQUFBQSx5QkFBZ0IsRUFBQ1g7WUFFakMsSUFBSVEsU0FBUztnQkFDWEksUUFBUUMsR0FBRyxDQUFDLEFBQUMsd0JBQStCLE9BQVJILFNBQVE7WUFDOUM7UUFDRjtRQUVBLElBQUlGLFNBQVM7WUFDWCxJQUFJLENBQUNDLFNBQVM7Z0JBQ1osSUFBSUwsZ0JBQWdCO29CQUNsQlEsUUFBUUMsR0FBRyxDQUFDLEFBQUMsc0JBQW9DLE9BQWZULGdCQUFlO2dCQUNuRDtZQUNGO1FBQ0Y7UUFFQUg7SUFDRjtBQUNGIn0=