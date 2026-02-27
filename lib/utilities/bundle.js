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
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _path1 = require("../utilities/path");
const _constants = require("../constants");
const _paths = require("../paths");
const _fileSystem = require("../utilities/fileSystem");
const _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createBundleFilesFunction(context) {
    const { bundler } = context, bundleFilesFunction = bundler === _constants.BROWSERIFY ? createBrowserifyBundleFilesFunction(context) : createEsbuildBundleFilesFunction(context);
    return bundleFilesFunction;
}
function createEsbuildBundleFilesFunction(context) {
    let esBuildBundleFilesFunction = null;
    try {
        const esbuildPath = _path.default.resolve(_paths.ESBUILD_PATH), esbuild = require(esbuildPath);
        esBuildBundleFilesFunction = (entryFilePath, bundleFilePath, targetDirectoryPath, callback)=>{
            const { node, debug, release } = context, bundler = esbuild, targetEntryFilePath = (0, _path1.combinePaths)(targetDirectoryPath, entryFilePath), entryPoint = targetEntryFilePath, entryPoints = [
                entryPoint
            ], outfile = bundleFilePath, bundle = true, minify = release, options = {
                entryPoints,
                outfile,
                bundle,
                minify
            };
            if (debug) {
                const sourcemap = _constants.INLINE; ///
                Object.assign(options, {
                    sourcemap
                });
            }
            if (node) {
                const platform = _constants.NODE;
                Object.assign(options, {
                    platform
                });
            }
            bundler.build(options).then(()=>{
                const success = true;
                callback(success);
            }).catch((error)=>{
                const success = false;
                console.log(`${_messages.ESBUILD_FAILED_MESSAGE}
${error}`);
                callback(success);
            });
        };
    } catch (error) {
        console.log(_messages.ESBUILD_NOT_INSTALLED_MESSAGE);
    }
    return esBuildBundleFilesFunction;
}
function createBrowserifyBundleFilesFunction(context) {
    let browserifyBundleFilesFunction = null;
    try {
        const browserifyPath = _path.default.resolve(_paths.BROWSERIFY_PATH), browserify = require(browserifyPath);
        browserifyBundleFilesFunction = (entryFilePath, bundleFilePath, targetDirectoryPath, callback)=>{
            const { node, debug } = context, options = {
                debug
            };
            if (node) {
                const bare = true, browserField = false;
                Object.assign(options, {
                    bare,
                    browserField
                });
            }
            const bundler = browserify(options), targetEntryFilePath = (0, _path1.combinePaths)(targetDirectoryPath, entryFilePath);
            bundler.add(targetEntryFilePath);
            bundler.bundle((error, buffer)=>{
                if (error) {
                    const success = false, { message } = error;
                    error = message; ///
                    console.log(`${_messages.BROWSERIFY_FAILED_MESSAGE}
${error}`);
                    callback(success);
                    return;
                }
                const success = true;
                if (bundleFilePath) {
                    (0, _fileSystem.createParentDirectory)(bundleFilePath);
                    (0, _fileSystem.writeFileEx)(bundleFilePath, buffer);
                } else {
                    process.stdout.write(buffer);
                }
                callback(success);
            });
        };
    } catch (error) {
        console.log(_messages.BROWSERIFY_NOT_INSTALLED_MESSAGE);
    }
    return browserifyBundleFilesFunction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUGF0aHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IE5PREUsIElOTElORSwgQlJPV1NFUklGWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVTQlVJTERfUEFUSCwgQlJPV1NFUklGWV9QQVRIIH0gZnJvbSBcIi4uL3BhdGhzXCI7XG5pbXBvcnQgeyB3cml0ZUZpbGVFeCwgY3JlYXRlUGFyZW50RGlyZWN0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBFU0JVSUxEX0ZBSUxFRF9NRVNTQUdFLFxuICAgICAgICAgQlJPV1NFUklGWV9GQUlMRURfTUVTU0FHRSxcbiAgICAgICAgIEVTQlVJTERfTk9UX0lOU1RBTExFRF9NRVNTQUdFLFxuICAgICAgICAgQlJPV1NFUklGWV9OT1RfSU5TVEFMTEVEX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1bmRsZUZpbGVzRnVuY3Rpb24oY29udGV4dCkge1xuICBjb25zdCB7IGJ1bmRsZXIgfSA9IGNvbnRleHQsXG4gICAgICAgIGJ1bmRsZUZpbGVzRnVuY3Rpb24gPSAoYnVuZGxlciA9PT0gQlJPV1NFUklGWSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVCcm93c2VyaWZ5QnVuZGxlRmlsZXNGdW5jdGlvbihjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRXNidWlsZEJ1bmRsZUZpbGVzRnVuY3Rpb24oY29udGV4dCk7XG5cbiAgcmV0dXJuIGJ1bmRsZUZpbGVzRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVzYnVpbGRCdW5kbGVGaWxlc0Z1bmN0aW9uKGNvbnRleHQpIHtcbiAgbGV0IGVzQnVpbGRCdW5kbGVGaWxlc0Z1bmN0aW9uID0gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IGVzYnVpbGRQYXRoID0gcGF0aC5yZXNvbHZlKEVTQlVJTERfUEFUSCksXG4gICAgICAgICAgZXNidWlsZCA9IHJlcXVpcmUoZXNidWlsZFBhdGgpO1xuXG4gICAgZXNCdWlsZEJ1bmRsZUZpbGVzRnVuY3Rpb24gPSAoZW50cnlGaWxlUGF0aCwgYnVuZGxlRmlsZVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGUsIGRlYnVnLCByZWxlYXNlIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgYnVuZGxlciA9IGVzYnVpbGQsICAvLy9cbiAgICAgICAgICAgIHRhcmdldEVudHJ5RmlsZVBhdGggPSBjb21iaW5lUGF0aHModGFyZ2V0RGlyZWN0b3J5UGF0aCwgZW50cnlGaWxlUGF0aCksXG4gICAgICAgICAgICBlbnRyeVBvaW50ID0gdGFyZ2V0RW50cnlGaWxlUGF0aCwgLy8vXG4gICAgICAgICAgICBlbnRyeVBvaW50cyA9IFtcbiAgICAgICAgICAgICAgZW50cnlQb2ludFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG91dGZpbGUgPSBidW5kbGVGaWxlUGF0aCwgLy8vXG4gICAgICAgICAgICBidW5kbGUgPSB0cnVlLFxuICAgICAgICAgICAgbWluaWZ5ID0gcmVsZWFzZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGVudHJ5UG9pbnRzLFxuICAgICAgICAgICAgICBvdXRmaWxlLFxuICAgICAgICAgICAgICBidW5kbGUsXG4gICAgICAgICAgICAgIG1pbmlmeVxuICAgICAgICAgICAgfTtcblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZW1hcCA9IElOTElORTsgIC8vL1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgIHNvdXJjZW1hcFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBOT0RFO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgIHBsYXRmb3JtXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBidW5kbGVyLmJ1aWxkKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICAgIGNhbGxiYWNrKHN1Y2Nlc3MpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7RVNCVUlMRF9GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhFU0JVSUxEX05PVF9JTlNUQUxMRURfTUVTU0FHRSk7XG4gIH1cblxuICByZXR1cm4gZXNCdWlsZEJ1bmRsZUZpbGVzRnVuY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJpZnlCdW5kbGVGaWxlc0Z1bmN0aW9uKGNvbnRleHQpIHtcbiAgbGV0IGJyb3dzZXJpZnlCdW5kbGVGaWxlc0Z1bmN0aW9uID0gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IGJyb3dzZXJpZnlQYXRoID0gcGF0aC5yZXNvbHZlKEJST1dTRVJJRllfUEFUSCksXG4gICAgICAgICAgYnJvd3NlcmlmeSA9IHJlcXVpcmUoYnJvd3NlcmlmeVBhdGgpO1xuXG4gICAgYnJvd3NlcmlmeUJ1bmRsZUZpbGVzRnVuY3Rpb24gPSAoZW50cnlGaWxlUGF0aCwgYnVuZGxlRmlsZVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGUsIGRlYnVnIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgZGVidWdcbiAgICAgICAgICAgIH07XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGNvbnN0IGJhcmUgPSB0cnVlLFxuICAgICAgICAgICAgICBicm93c2VyRmllbGQgPSBmYWxzZTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICBiYXJlLFxuICAgICAgICAgIGJyb3dzZXJGaWVsZFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnVuZGxlciA9IGJyb3dzZXJpZnkob3B0aW9ucyksXG4gICAgICAgICAgICB0YXJnZXRFbnRyeUZpbGVQYXRoID0gY29tYmluZVBhdGhzKHRhcmdldERpcmVjdG9yeVBhdGgsIGVudHJ5RmlsZVBhdGgpO1xuXG4gICAgICBidW5kbGVyLmFkZCh0YXJnZXRFbnRyeUZpbGVQYXRoKTtcblxuICAgICAgYnVuZGxlci5idW5kbGUoKGVycm9yLCBidWZmZXIpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgeyBtZXNzYWdlIH0gPSBlcnJvcjtcblxuICAgICAgICAgIGVycm9yID0gbWVzc2FnZTsgIC8vL1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7QlJPV1NFUklGWV9GQUlMRURfTUVTU0FHRX1cbiR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgIGlmIChidW5kbGVGaWxlUGF0aCkge1xuICAgICAgICAgIGNyZWF0ZVBhcmVudERpcmVjdG9yeShidW5kbGVGaWxlUGF0aCk7XG5cbiAgICAgICAgICB3cml0ZUZpbGVFeChidW5kbGVGaWxlUGF0aCwgYnVmZmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShidWZmZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soc3VjY2Vzcyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKEJST1dTRVJJRllfTk9UX0lOU1RBTExFRF9NRVNTQUdFKTtcbiAgfVxuXG4gIHJldHVybiBicm93c2VyaWZ5QnVuZGxlRmlsZXNGdW5jdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVCdW5kbGVGaWxlc0Z1bmN0aW9uIiwiY29udGV4dCIsImJ1bmRsZXIiLCJidW5kbGVGaWxlc0Z1bmN0aW9uIiwiQlJPV1NFUklGWSIsImNyZWF0ZUJyb3dzZXJpZnlCdW5kbGVGaWxlc0Z1bmN0aW9uIiwiY3JlYXRlRXNidWlsZEJ1bmRsZUZpbGVzRnVuY3Rpb24iLCJlc0J1aWxkQnVuZGxlRmlsZXNGdW5jdGlvbiIsImVzYnVpbGRQYXRoIiwicGF0aCIsInJlc29sdmUiLCJFU0JVSUxEX1BBVEgiLCJlc2J1aWxkIiwicmVxdWlyZSIsImVudHJ5RmlsZVBhdGgiLCJidW5kbGVGaWxlUGF0aCIsInRhcmdldERpcmVjdG9yeVBhdGgiLCJjYWxsYmFjayIsIm5vZGUiLCJkZWJ1ZyIsInJlbGVhc2UiLCJ0YXJnZXRFbnRyeUZpbGVQYXRoIiwiY29tYmluZVBhdGhzIiwiZW50cnlQb2ludCIsImVudHJ5UG9pbnRzIiwib3V0ZmlsZSIsImJ1bmRsZSIsIm1pbmlmeSIsIm9wdGlvbnMiLCJzb3VyY2VtYXAiLCJJTkxJTkUiLCJPYmplY3QiLCJhc3NpZ24iLCJwbGF0Zm9ybSIsIk5PREUiLCJidWlsZCIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFU0JVSUxEX0ZBSUxFRF9NRVNTQUdFIiwiRVNCVUlMRF9OT1RfSU5TVEFMTEVEX01FU1NBR0UiLCJicm93c2VyaWZ5QnVuZGxlRmlsZXNGdW5jdGlvbiIsImJyb3dzZXJpZnlQYXRoIiwiQlJPV1NFUklGWV9QQVRIIiwiYnJvd3NlcmlmeSIsImJhcmUiLCJicm93c2VyRmllbGQiLCJhZGQiLCJidWZmZXIiLCJtZXNzYWdlIiwiQlJPV1NFUklGWV9GQUlMRURfTUVTU0FHRSIsImNyZWF0ZVBhcmVudERpcmVjdG9yeSIsIndyaXRlRmlsZUV4IiwicHJvY2VzcyIsInN0ZG91dCIsIndyaXRlIiwiQlJPV1NFUklGWV9OT1RfSU5TVEFMTEVEX01FU1NBR0UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFnQkE7OztlQUFBQTs7OzZEQVhDO3VCQUVZOzJCQUNZO3VCQUNLOzRCQUNLOzBCQUlGOzs7Ozs7QUFFMUMsU0FBU0EsMEJBQTBCQyxPQUFPO0lBQy9DLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdELFNBQ2RFLHNCQUFzQixBQUFDRCxZQUFZRSxxQkFBVSxHQUNyQkMsb0NBQW9DSixXQUNsQ0ssaUNBQWlDTDtJQUVqRSxPQUFPRTtBQUNUO0FBRUEsU0FBU0csaUNBQWlDTCxPQUFPO0lBQy9DLElBQUlNLDZCQUE2QjtJQUVqQyxJQUFJO1FBQ0YsTUFBTUMsY0FBY0MsYUFBSSxDQUFDQyxPQUFPLENBQUNDLG1CQUFZLEdBQ3ZDQyxVQUFVQyxRQUFRTDtRQUV4QkQsNkJBQTZCLENBQUNPLGVBQWVDLGdCQUFnQkMscUJBQXFCQztZQUNoRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBR25CLFNBQzNCQyxVQUFVVSxTQUNWUyxzQkFBc0JDLElBQUFBLG1CQUFZLEVBQUNOLHFCQUFxQkYsZ0JBQ3hEUyxhQUFhRixxQkFDYkcsY0FBYztnQkFDWkQ7YUFDRCxFQUNERSxVQUFVVixnQkFDVlcsU0FBUyxNQUNUQyxTQUFTUCxTQUNUUSxVQUFVO2dCQUNSSjtnQkFDQUM7Z0JBQ0FDO2dCQUNBQztZQUNGO1lBRU4sSUFBSVIsT0FBTztnQkFDVCxNQUFNVSxZQUFZQyxpQkFBTSxFQUFHLEdBQUc7Z0JBRTlCQyxPQUFPQyxNQUFNLENBQUNKLFNBQVM7b0JBQ3JCQztnQkFDRjtZQUNGO1lBRUEsSUFBSVgsTUFBTTtnQkFDUixNQUFNZSxXQUFXQyxlQUFJO2dCQUVyQkgsT0FBT0MsTUFBTSxDQUFDSixTQUFTO29CQUNyQks7Z0JBQ0Y7WUFDRjtZQUVBL0IsUUFBUWlDLEtBQUssQ0FBQ1AsU0FDWFEsSUFBSSxDQUFDO2dCQUNKLE1BQU1DLFVBQVU7Z0JBRWhCcEIsU0FBU29CO1lBQ1gsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO2dCQUNOLE1BQU1GLFVBQVU7Z0JBRWhCRyxRQUFRQyxHQUFHLENBQUMsR0FBR0MsZ0NBQXNCLENBQUM7QUFDaEQsRUFBRUgsT0FBTztnQkFFQ3RCLFNBQVNvQjtZQUNYO1FBQ0o7SUFDRixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRSx1Q0FBNkI7SUFDM0M7SUFFQSxPQUFPcEM7QUFDVDtBQUVBLFNBQVNGLG9DQUFvQ0osT0FBTztJQUNsRCxJQUFJMkMsZ0NBQWdDO0lBRXBDLElBQUk7UUFDRixNQUFNQyxpQkFBaUJwQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ29DLHNCQUFlLEdBQzdDQyxhQUFhbEMsUUFBUWdDO1FBRTNCRCxnQ0FBZ0MsQ0FBQzlCLGVBQWVDLGdCQUFnQkMscUJBQXFCQztZQUNuRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdsQixTQUNsQjJCLFVBQVU7Z0JBQ1JUO1lBQ0Y7WUFFTixJQUFJRCxNQUFNO2dCQUNSLE1BQU04QixPQUFPLE1BQ1BDLGVBQWU7Z0JBRXJCbEIsT0FBT0MsTUFBTSxDQUFDSixTQUFTO29CQUNyQm9CO29CQUNBQztnQkFDRjtZQUNGO1lBRUEsTUFBTS9DLFVBQVU2QyxXQUFXbkIsVUFDckJQLHNCQUFzQkMsSUFBQUEsbUJBQVksRUFBQ04scUJBQXFCRjtZQUU5RFosUUFBUWdELEdBQUcsQ0FBQzdCO1lBRVpuQixRQUFRd0IsTUFBTSxDQUFDLENBQUNhLE9BQU9ZO2dCQUNyQixJQUFJWixPQUFPO29CQUNULE1BQU1GLFVBQVUsT0FDWCxFQUFFZSxPQUFPLEVBQUUsR0FBR2I7b0JBRW5CQSxRQUFRYSxTQUFVLEdBQUc7b0JBRXJCWixRQUFRQyxHQUFHLENBQUMsR0FBR1ksbUNBQXlCLENBQUM7QUFDbkQsRUFBRWQsT0FBTztvQkFFQ3RCLFNBQVNvQjtvQkFFVDtnQkFDRjtnQkFFQSxNQUFNQSxVQUFVO2dCQUVoQixJQUFJdEIsZ0JBQWdCO29CQUNsQnVDLElBQUFBLGlDQUFxQixFQUFDdkM7b0JBRXRCd0MsSUFBQUEsdUJBQVcsRUFBQ3hDLGdCQUFnQm9DO2dCQUM5QixPQUFPO29CQUNMSyxRQUFRQyxNQUFNLENBQUNDLEtBQUssQ0FBQ1A7Z0JBQ3ZCO2dCQUVBbEMsU0FBU29CO1lBQ1g7UUFDRjtJQUNGLEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNrQiwwQ0FBZ0M7SUFDOUM7SUFFQSxPQUFPZjtBQUNUIn0=