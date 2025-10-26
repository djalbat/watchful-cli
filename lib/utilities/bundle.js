"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createBundleFilesFunction", {
    enumerable: true,
    get: function() {
        return createBundleFilesFunction;
    }
});
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _path1 = require("../utilities/path");
var _constants = require("../constants");
var _paths = require("../paths");
var _fileSystem = require("../utilities/fileSystem");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createBundleFilesFunction(context) {
    var bundler = context.bundler, bundleFilesFunction = bundler === _constants.BROWSERIFY ? createBrowserifyBundleFilesFunction(context) : createEsbuildBundleFilesFunction(context);
    return bundleFilesFunction;
}
function createEsbuildBundleFilesFunction(context) {
    var esBuildBundleFilesFunction = null;
    try {
        var esbuildPath = _path.default.resolve(_paths.ESBUILD_PATH), esbuild = require(esbuildPath);
        esBuildBundleFilesFunction = function(entryFilePath, bundleFilePath, targetDirectoryPath, callback) {
            var node = context.node, debug = context.debug, release = context.release, bundler = esbuild, targetEntryFilePath = (0, _path1.combinePaths)(targetDirectoryPath, entryFilePath), entryPoint = targetEntryFilePath, entryPoints = [
                entryPoint
            ], outfile = bundleFilePath, bundle = true, minify = release, options = {
                entryPoints: entryPoints,
                outfile: outfile,
                bundle: bundle,
                minify: minify
            };
            if (debug) {
                var sourcemap = _constants.INLINE; ///
                Object.assign(options, {
                    sourcemap: sourcemap
                });
            }
            if (node) {
                var platform = _constants.NODE;
                Object.assign(options, {
                    platform: platform
                });
            }
            bundler.build(options).then(function() {
                var success = true;
                callback(success);
            }).catch(function(error) {
                var success = false;
                console.log("".concat(_messages.ESBUILD_FAILED_MESSAGE, "\n").concat(error));
                callback(success);
            });
        };
    } catch (error) {
        console.log(_messages.ESBUILD_NOT_INSTALLED_MESSAGE);
    }
    return esBuildBundleFilesFunction;
}
function createBrowserifyBundleFilesFunction(context) {
    var browserifyBundleFilesFunction = null;
    try {
        var browserifyPath = _path.default.resolve(_paths.BROWSERIFY_PATH), browserify = require(browserifyPath);
        browserifyBundleFilesFunction = function(entryFilePath, bundleFilePath, targetDirectoryPath, callback) {
            var node = context.node, debug = context.debug, options = {
                debug: debug
            };
            if (node) {
                var bare = true, browserField = false;
                Object.assign(options, {
                    bare: bare,
                    browserField: browserField
                });
            }
            var bundler = browserify(options), targetEntryFilePath = (0, _path1.combinePaths)(targetDirectoryPath, entryFilePath);
            bundler.add(targetEntryFilePath);
            bundler.bundle(function(error, buffer) {
                if (error) {
                    var success = false, message = error.message;
                    error = message; ///
                    console.log("".concat(_messages.BROWSERIFY_FAILED_MESSAGE, "\n").concat(error));
                    callback(success);
                    return;
                }
                var success1 = true;
                if (bundleFilePath) {
                    (0, _fileSystem.createParentDirectory)(bundleFilePath);
                    (0, _fileSystem.writeFileEx)(bundleFilePath, buffer);
                } else {
                    process.stdout.write(buffer);
                }
                callback(success1);
            });
        };
    } catch (error) {
        console.log(_messages.BROWSERIFY_NOT_INSTALLED_MESSAGE);
    }
    return browserifyBundleFilesFunction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUGF0aHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IE5PREUsIElOTElORSwgQlJPV1NFUklGWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVTQlVJTERfUEFUSCwgQlJPV1NFUklGWV9QQVRIIH0gZnJvbSBcIi4uL3BhdGhzXCI7XG5pbXBvcnQgeyB3cml0ZUZpbGVFeCwgY3JlYXRlUGFyZW50RGlyZWN0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBFU0JVSUxEX0ZBSUxFRF9NRVNTQUdFLFxuICAgICAgICAgQlJPV1NFUklGWV9GQUlMRURfTUVTU0FHRSxcbiAgICAgICAgIEVTQlVJTERfTk9UX0lOU1RBTExFRF9NRVNTQUdFLFxuICAgICAgICAgQlJPV1NFUklGWV9OT1RfSU5TVEFMTEVEX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb24oY29udGV4dCkge1xuICBjb25zdCB7IGJ1bmRsZXIgfSA9IGNvbnRleHQsXG4gICAgICAgIGJ1bmRsZUZpbGVzRnVuY3Rpb24gPSAoYnVuZGxlciA9PT0gQlJPV1NFUklGWSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVCcm93c2VyaWZ5QnVuZGxlRmlsZXNGdW5jdGlvbihjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRXNidWlsZEJ1bmRsZUZpbGVzRnVuY3Rpb24oY29udGV4dCk7XG5cbiAgcmV0dXJuIGJ1bmRsZUZpbGVzRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVzYnVpbGRCdW5kbGVGaWxlc0Z1bmN0aW9uKGNvbnRleHQpIHtcbiAgbGV0IGVzQnVpbGRCdW5kbGVGaWxlc0Z1bmN0aW9uID0gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IGVzYnVpbGRQYXRoID0gcGF0aC5yZXNvbHZlKEVTQlVJTERfUEFUSCksXG4gICAgICAgICAgZXNidWlsZCA9IHJlcXVpcmUoZXNidWlsZFBhdGgpO1xuXG4gICAgZXNCdWlsZEJ1bmRsZUZpbGVzRnVuY3Rpb24gPSAoZW50cnlGaWxlUGF0aCwgYnVuZGxlRmlsZVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGUsIGRlYnVnLCByZWxlYXNlIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgYnVuZGxlciA9IGVzYnVpbGQsICAvLy9cbiAgICAgICAgICAgIHRhcmdldEVudHJ5RmlsZVBhdGggPSBjb21iaW5lUGF0aHModGFyZ2V0RGlyZWN0b3J5UGF0aCwgZW50cnlGaWxlUGF0aCksXG4gICAgICAgICAgICBlbnRyeVBvaW50ID0gdGFyZ2V0RW50cnlGaWxlUGF0aCwgLy8vXG4gICAgICAgICAgICBlbnRyeVBvaW50cyA9IFtcbiAgICAgICAgICAgICAgZW50cnlQb2ludFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG91dGZpbGUgPSBidW5kbGVGaWxlUGF0aCwgLy8vXG4gICAgICAgICAgICBidW5kbGUgPSB0cnVlLFxuICAgICAgICAgICAgbWluaWZ5ID0gcmVsZWFzZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGVudHJ5UG9pbnRzLFxuICAgICAgICAgICAgICBvdXRmaWxlLFxuICAgICAgICAgICAgICBidW5kbGUsXG4gICAgICAgICAgICAgIG1pbmlmeVxuICAgICAgICAgICAgfTtcblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZW1hcCA9IElOTElORTsgIC8vL1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgIHNvdXJjZW1hcFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBOT0RFO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgIHBsYXRmb3JtXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBidW5kbGVyLmJ1aWxkKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7RVNCVUlMRF9GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhFU0JVSUxEX05PVF9JTlNUQUxMRURfTUVTU0FHRSk7XG4gIH1cblxuICByZXR1cm4gZXNCdWlsZEJ1bmRsZUZpbGVzRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJpZnlCdW5kbGVGaWxlc0Z1bmN0aW9uKGNvbnRleHQpIHtcbiAgbGV0IGJyb3dzZXJpZnlCdW5kbGVGaWxlc0Z1bmN0aW9uID0gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IGJyb3dzZXJpZnlQYXRoID0gcGF0aC5yZXNvbHZlKEJST1dTRVJJRllfUEFUSCksXG4gICAgICAgICAgYnJvd3NlcmlmeSA9IHJlcXVpcmUoYnJvd3NlcmlmeVBhdGgpO1xuXG4gICAgYnJvd3NlcmlmeUJ1bmRsZUZpbGVzRnVuY3Rpb24gPSAoZW50cnlGaWxlUGF0aCwgYnVuZGxlRmlsZVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGUsIGRlYnVnIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgZGVidWdcbiAgICAgICAgICAgIH07XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGNvbnN0IGJhcmUgPSB0cnVlLFxuICAgICAgICAgICAgICBicm93c2VyRmllbGQgPSBmYWxzZTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICBiYXJlLFxuICAgICAgICAgIGJyb3dzZXJGaWVsZFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnVuZGxlciA9IGJyb3dzZXJpZnkob3B0aW9ucyksXG4gICAgICAgICAgICB0YXJnZXRFbnRyeUZpbGVQYXRoID0gY29tYmluZVBhdGhzKHRhcmdldERpcmVjdG9yeVBhdGgsIGVudHJ5RmlsZVBhdGgpO1xuXG4gICAgICBidW5kbGVyLmFkZCh0YXJnZXRFbnRyeUZpbGVQYXRoKTtcblxuICAgICAgYnVuZGxlci5idW5kbGUoKGVycm9yLCBidWZmZXIpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgeyBtZXNzYWdlIH0gPSBlcnJvcjtcblxuICAgICAgICAgIGVycm9yID0gbWVzc2FnZTsgIC8vL1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7QlJPV1NFUklGWV9GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgIGlmIChidW5kbGVGaWxlUGF0aCkge1xuICAgICAgICAgIGNyZWF0ZVBhcmVudERpcmVjdG9yeShidW5kbGVGaWxlUGF0aCk7XG5cbiAgICAgICAgICB3cml0ZUZpbGVFeChidW5kbGVGaWxlUGF0aCwgYnVmZmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShidWZmZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soc3VjY2Vzcyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKEJST1dTRVJJRllfTk9UX0lOU1RBTExFRF9NRVNTQUdFKTtcbiAgfVxuXG4gIHJldHVybiBicm93c2VyaWZ5QnVuZGxlRmlsZXNGdW5jdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVCdW5kbGVGaWxlc0Z1bmN0aW9uIiwiY29udGV4dCIsImJ1bmRsZXIiLCJidW5kbGVGaWxlc0Z1bmN0aW9uIiwiQlJPV1NFUklGWSIsImNyZWF0ZUJyb3dzZXJpZnlCdW5kbGVGaWxlc0Z1bmN0aW9uIiwiY3JlYXRlRXNidWlsZEJ1bmRsZUZpbGVzRnVuY3Rpb24iLCJlc0J1aWxkQnVuZGxlRmlsZXNGdW5jdGlvbiIsImVzYnVpbGRQYXRoIiwicGF0aCIsInJlc29sdmUiLCJFU0JVSUxEX1BBVEgiLCJlc2J1aWxkIiwicmVxdWlyZSIsImVudHJ5RmlsZVBhdGgiLCJidW5kbGVGaWxlUGF0aCIsInRhcmdldERpcmVjdG9yeVBhdGgiLCJjYWxsYmFjayIsIm5vZGUiLCJkZWJ1ZyIsInJlbGVhc2UiLCJ0YXJnZXRFbnRyeUZpbGVQYXRoIiwiY29tYmluZVBhdGhzIiwiZW50cnlQb2ludCIsImVudHJ5UG9pbnRzIiwib3V0ZmlsZSIsImJ1bmRsZSIsIm1pbmlmeSIsIm9wdGlvbnMiLCJzb3VyY2VtYXAiLCJJTkxJTkUiLCJPYmplY3QiLCJhc3NpZ24iLCJwbGF0Zm9ybSIsIk5PREUiLCJidWlsZCIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFU0JVSUxEX0ZBSUxFRF9NRVNTQUdFIiwiRVNCVUlMRF9OT1RfSU5TVEFMTEVEX01FU1NBR0UiLCJicm93c2VyaWZ5QnVuZGxlRmlsZXNGdW5jdGlvbiIsImJyb3dzZXJpZnlQYXRoIiwiQlJPV1NFUklGWV9QQVRIIiwiYnJvd3NlcmlmeSIsImJhcmUiLCJicm93c2VyRmllbGQiLCJhZGQiLCJidWZmZXIiLCJtZXNzYWdlIiwiQlJPV1NFUklGWV9GQUlMRURfTUVTU0FHRSIsImNyZWF0ZVBhcmVudERpcmVjdG9yeSIsIndyaXRlRmlsZUV4IiwicHJvY2VzcyIsInN0ZG91dCIsIndyaXRlIiwiQlJPV1NFUklGWV9OT1RfSU5TVEFMTEVEX01FU1NBR0UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFnQkE7OztlQUFBQTs7OzJEQVhDO3FCQUVZO3lCQUNZO3FCQUNLOzBCQUNLO3dCQUlGOzs7Ozs7QUFFMUMsU0FBU0EsMEJBQTBCQyxPQUFPO0lBQy9DLElBQU0sQUFBRUMsVUFBWUQsUUFBWkMsU0FDRkMsc0JBQXNCLEFBQUNELFlBQVlFLHFCQUFVLEdBQ3JCQyxvQ0FBb0NKLFdBQ2xDSyxpQ0FBaUNMO0lBRWpFLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTRyxpQ0FBaUNMLE9BQU87SUFDL0MsSUFBSU0sNkJBQTZCO0lBRWpDLElBQUk7UUFDRixJQUFNQyxjQUFjQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ0MsbUJBQVksR0FDdkNDLFVBQVVDLFFBQVFMO1FBRXhCRCw2QkFBNkIsU0FBQ08sZUFBZUMsZ0JBQWdCQyxxQkFBcUJDO1lBQ2hGLElBQVFDLE9BQXlCakIsUUFBekJpQixNQUFNQyxRQUFtQmxCLFFBQW5Ca0IsT0FBT0MsVUFBWW5CLFFBQVptQixTQUNmbEIsVUFBVVUsU0FDVlMsc0JBQXNCQyxJQUFBQSxtQkFBWSxFQUFDTixxQkFBcUJGLGdCQUN4RFMsYUFBYUYscUJBQ2JHLGNBQWM7Z0JBQ1pEO2FBQ0QsRUFDREUsVUFBVVYsZ0JBQ1ZXLFNBQVMsTUFDVEMsU0FBU1AsU0FDVFEsVUFBVTtnQkFDUkosYUFBQUE7Z0JBQ0FDLFNBQUFBO2dCQUNBQyxRQUFBQTtnQkFDQUMsUUFBQUE7WUFDRjtZQUVOLElBQUlSLE9BQU87Z0JBQ1QsSUFBTVUsWUFBWUMsaUJBQU0sRUFBRyxHQUFHO2dCQUU5QkMsT0FBT0MsTUFBTSxDQUFDSixTQUFTO29CQUNyQkMsV0FBQUE7Z0JBQ0Y7WUFDRjtZQUVBLElBQUlYLE1BQU07Z0JBQ1IsSUFBTWUsV0FBV0MsZUFBSTtnQkFFckJILE9BQU9DLE1BQU0sQ0FBQ0osU0FBUztvQkFDckJLLFVBQUFBO2dCQUNGO1lBQ0Y7WUFFQS9CLFFBQVFpQyxLQUFLLENBQUNQLFNBQ1hRLElBQUksQ0FBQztnQkFDSixJQUFNQyxVQUFVO2dCQUVoQnBCLFNBQVNvQjtZQUNYLEdBQ0NDLEtBQUssQ0FBQyxTQUFDQztnQkFDTixJQUFNRixVQUFVO2dCQUVoQkcsUUFBUUMsR0FBRyxDQUFDLEFBQUMsR0FDckJGLE9BRHVCRyxnQ0FBc0IsRUFBQyxNQUN4QyxPQUFOSDtnQkFFUXRCLFNBQVNvQjtZQUNYO1FBQ0o7SUFDRixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRSx1Q0FBNkI7SUFDM0M7SUFFQSxPQUFPcEM7QUFDVDtBQUVBLFNBQVNGLG9DQUFvQ0osT0FBTztJQUNsRCxJQUFJMkMsZ0NBQWdDO0lBRXBDLElBQUk7UUFDRixJQUFNQyxpQkFBaUJwQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ29DLHNCQUFlLEdBQzdDQyxhQUFhbEMsUUFBUWdDO1FBRTNCRCxnQ0FBZ0MsU0FBQzlCLGVBQWVDLGdCQUFnQkMscUJBQXFCQztZQUNuRixJQUFRQyxPQUFnQmpCLFFBQWhCaUIsTUFBTUMsUUFBVWxCLFFBQVZrQixPQUNSUyxVQUFVO2dCQUNSVCxPQUFBQTtZQUNGO1lBRU4sSUFBSUQsTUFBTTtnQkFDUixJQUFNOEIsT0FBTyxNQUNQQyxlQUFlO2dCQUVyQmxCLE9BQU9DLE1BQU0sQ0FBQ0osU0FBUztvQkFDckJvQixNQUFBQTtvQkFDQUMsY0FBQUE7Z0JBQ0Y7WUFDRjtZQUVBLElBQU0vQyxVQUFVNkMsV0FBV25CLFVBQ3JCUCxzQkFBc0JDLElBQUFBLG1CQUFZLEVBQUNOLHFCQUFxQkY7WUFFOURaLFFBQVFnRCxHQUFHLENBQUM3QjtZQUVabkIsUUFBUXdCLE1BQU0sQ0FBQyxTQUFDYSxPQUFPWTtnQkFDckIsSUFBSVosT0FBTztvQkFDVCxJQUFNRixVQUFVLE9BQ1gsQUFBRWUsVUFBWWIsTUFBWmE7b0JBRVBiLFFBQVFhLFNBQVUsR0FBRztvQkFFckJaLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLEdBQ3JCRixPQUR1QmMsbUNBQXlCLEVBQUMsTUFDM0MsT0FBTmQ7b0JBRVF0QixTQUFTb0I7b0JBRVQ7Z0JBQ0Y7Z0JBRUEsSUFBTUEsV0FBVTtnQkFFaEIsSUFBSXRCLGdCQUFnQjtvQkFDbEJ1QyxJQUFBQSxpQ0FBcUIsRUFBQ3ZDO29CQUV0QndDLElBQUFBLHVCQUFXLEVBQUN4QyxnQkFBZ0JvQztnQkFDOUIsT0FBTztvQkFDTEssUUFBUUMsTUFBTSxDQUFDQyxLQUFLLENBQUNQO2dCQUN2QjtnQkFFQWxDLFNBQVNvQjtZQUNYO1FBQ0Y7SUFDRixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDa0IsMENBQWdDO0lBQzlDO0lBRUEsT0FBT2Y7QUFDVCJ9