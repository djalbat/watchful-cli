"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return retrieveFilePathsOperation;
    }
});
const _chokidar = /*#__PURE__*/ _interop_require_default(require("chokidar"));
const _events = require("../events");
const _messages = require("../messages");
const _path = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function retrieveFilePathsOperation(proceed, abort, context) {
    const { sourceDirectoryPath } = context, globPattern = `${sourceDirectoryPath}/**/*.js`, filePaths = [], watcher = _chokidar.default.watch(globPattern);
    watcher.on(_events.ADD_EVENT, (path)=>{
        const sourceFilePath = path, filePath = (0, _path.pathWithoutDirectoryPathFromPathAndDirectoryPath)(sourceFilePath, sourceDirectoryPath); ///
        filePaths.push(filePath);
    });
    watcher.on(_events.READY_EVENT, ()=>{
        watcher.close().then(()=>{
            const { entryFilePath } = context;
            if (entryFilePath) {
                const filePathsIncludesEntryFilePath = filePaths.includes(entryFilePath);
                if (!filePathsIncludesEntryFilePath) {
                    console.log(_messages.ENTRY_FILE_NOT_INCLUDED_IN_BUNDLED_FILES_MESSAGE);
                    abort();
                    return;
                }
            }
            Object.assign(context, {
                filePaths
            });
            proceed();
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcmV0cmlldmVGaWxlUGF0aHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjaG9raWRhciBmcm9tIFwiY2hva2lkYXJcIjtcblxuaW1wb3J0IHsgQUREX0VWRU5ULCBSRUFEWV9FVkVOVCB9IGZyb20gXCIuLi9ldmVudHNcIjtcbmltcG9ydCB7IEVOVFJZX0ZJTEVfTk9UX0lOQ0xVREVEX0lOX0JVTkRMRURfRklMRVNfTUVTU0FHRSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgcGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHJpZXZlRmlsZVBhdGhzT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc291cmNlRGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dCxcbiAgICAgICAgZ2xvYlBhdHRlcm4gPSBgJHtzb3VyY2VEaXJlY3RvcnlQYXRofS8qKi8qLmpzYCxcbiAgICAgICAgZmlsZVBhdGhzID0gW10sXG4gICAgICAgIHdhdGNoZXIgPSBjaG9raWRhci53YXRjaChnbG9iUGF0dGVybik7XG5cbiAgd2F0Y2hlci5vbihBRERfRVZFTlQsIChwYXRoKSA9PiB7XG4gICAgY29uc3Qgc291cmNlRmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGgoc291cmNlRmlsZVBhdGgsIHNvdXJjZURpcmVjdG9yeVBhdGgpOyAvLy9cblxuICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgfSk7XG5cbiAgd2F0Y2hlci5vbihSRUFEWV9FVkVOVCwgKCkgPT4ge1xuICAgIHdhdGNoZXIuY2xvc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgZW50cnlGaWxlUGF0aCB9ID0gY29udGV4dDtcblxuICAgICAgaWYgKGVudHJ5RmlsZVBhdGgpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhzSW5jbHVkZXNFbnRyeUZpbGVQYXRoID0gZmlsZVBhdGhzLmluY2x1ZGVzKGVudHJ5RmlsZVBhdGgpO1xuXG4gICAgICAgIGlmICghZmlsZVBhdGhzSW5jbHVkZXNFbnRyeUZpbGVQYXRoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coRU5UUllfRklMRV9OT1RfSU5DTFVERURfSU5fQlVORExFRF9GSUxFU19NRVNTQUdFKTtcblxuICAgICAgICAgIGFib3J0KCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGZpbGVQYXRoc1xuICAgICAgfSk7XG5cbiAgICAgIHByb2NlZWQoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmV0cmlldmVGaWxlUGF0aHNPcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0Iiwic291cmNlRGlyZWN0b3J5UGF0aCIsImdsb2JQYXR0ZXJuIiwiZmlsZVBhdGhzIiwid2F0Y2hlciIsImNob2tpZGFyIiwid2F0Y2giLCJvbiIsIkFERF9FVkVOVCIsInBhdGgiLCJzb3VyY2VGaWxlUGF0aCIsImZpbGVQYXRoIiwicGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoIiwicHVzaCIsIlJFQURZX0VWRU5UIiwiY2xvc2UiLCJ0aGVuIiwiZW50cnlGaWxlUGF0aCIsImZpbGVQYXRoc0luY2x1ZGVzRW50cnlGaWxlUGF0aCIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsIkVOVFJZX0ZJTEVfTk9UX0lOQ0xVREVEX0lOX0JVTkRMRURfRklMRVNfTUVTU0FHRSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztpRUFOSDt3QkFFa0I7MEJBQzBCO3NCQUNBOzs7Ozs7QUFFbEQsU0FBU0EsMkJBQTJCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUN4RSxNQUFNLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdELFNBQzFCRSxjQUFjLEdBQUdELG9CQUFvQixRQUFRLENBQUMsRUFDOUNFLFlBQVksRUFBRSxFQUNkQyxVQUFVQyxpQkFBUSxDQUFDQyxLQUFLLENBQUNKO0lBRS9CRSxRQUFRRyxFQUFFLENBQUNDLGlCQUFTLEVBQUUsQ0FBQ0M7UUFDckIsTUFBTUMsaUJBQWlCRCxNQUNqQkUsV0FBV0MsSUFBQUEsc0RBQWdELEVBQUNGLGdCQUFnQlQsc0JBQXNCLEdBQUc7UUFFM0dFLFVBQVVVLElBQUksQ0FBQ0Y7SUFDakI7SUFFQVAsUUFBUUcsRUFBRSxDQUFDTyxtQkFBVyxFQUFFO1FBQ3RCVixRQUFRVyxLQUFLLEdBQUdDLElBQUksQ0FBQztZQUNuQixNQUFNLEVBQUVDLGFBQWEsRUFBRSxHQUFHakI7WUFFMUIsSUFBSWlCLGVBQWU7Z0JBQ2pCLE1BQU1DLGlDQUFpQ2YsVUFBVWdCLFFBQVEsQ0FBQ0Y7Z0JBRTFELElBQUksQ0FBQ0MsZ0NBQWdDO29CQUNuQ0UsUUFBUUMsR0FBRyxDQUFDQywwREFBZ0Q7b0JBRTVEdkI7b0JBRUE7Z0JBQ0Y7WUFDRjtZQUVBd0IsT0FBT0MsTUFBTSxDQUFDeEIsU0FBUztnQkFDckJHO1lBQ0Y7WUFFQUw7UUFDRjtJQUNGO0FBQ0YifQ==