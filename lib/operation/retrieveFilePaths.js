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
const _events = require("../events");
const _watcher = require("../utilities/watcher");
const _messages = require("../messages");
const _path = require("../utilities/path");
function retrieveFilePathsOperation(proceed, abort, context) {
    const { sourceDirectoryPath } = context, watcher = (0, _watcher.watcherFromSourceDirectoryPath)(sourceDirectoryPath), filePaths = [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcmV0cmlldmVGaWxlUGF0aHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9FVkVOVCwgUkVBRFlfRVZFTlQgfSBmcm9tIFwiLi4vZXZlbnRzXCI7XG5pbXBvcnQgeyB3YXRjaGVyRnJvbVNvdXJjZURpcmVjdG9yeVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3dhdGNoZXJcIjtcbmltcG9ydCB7IEVOVFJZX0ZJTEVfTk9UX0lOQ0xVREVEX0lOX0JVTkRMRURfRklMRVNfTUVTU0FHRSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgcGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHJpZXZlRmlsZVBhdGhzT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc291cmNlRGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dCxcbiAgICAgICAgd2F0Y2hlciA9IHdhdGNoZXJGcm9tU291cmNlRGlyZWN0b3J5UGF0aChzb3VyY2VEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgZmlsZVBhdGhzID0gW107XG5cbiAgd2F0Y2hlci5vbihBRERfRVZFTlQsIChwYXRoKSA9PiB7XG4gICAgY29uc3Qgc291cmNlRmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoV2l0aG91dERpcmVjdG9yeVBhdGhGcm9tUGF0aEFuZERpcmVjdG9yeVBhdGgoc291cmNlRmlsZVBhdGgsIHNvdXJjZURpcmVjdG9yeVBhdGgpOyAvLy9cblxuICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgfSk7XG5cbiAgd2F0Y2hlci5vbihSRUFEWV9FVkVOVCwgKCkgPT4ge1xuICAgIHdhdGNoZXIuY2xvc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgZW50cnlGaWxlUGF0aCB9ID0gY29udGV4dDtcblxuICAgICAgaWYgKGVudHJ5RmlsZVBhdGgpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhzSW5jbHVkZXNFbnRyeUZpbGVQYXRoID0gZmlsZVBhdGhzLmluY2x1ZGVzKGVudHJ5RmlsZVBhdGgpO1xuXG4gICAgICAgIGlmICghZmlsZVBhdGhzSW5jbHVkZXNFbnRyeUZpbGVQYXRoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coRU5UUllfRklMRV9OT1RfSU5DTFVERURfSU5fQlVORExFRF9GSUxFU19NRVNTQUdFKTtcblxuICAgICAgICAgIGFib3J0KCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGZpbGVQYXRoc1xuICAgICAgfSk7XG5cbiAgICAgIHByb2NlZWQoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmV0cmlldmVGaWxlUGF0aHNPcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0Iiwic291cmNlRGlyZWN0b3J5UGF0aCIsIndhdGNoZXIiLCJ3YXRjaGVyRnJvbVNvdXJjZURpcmVjdG9yeVBhdGgiLCJmaWxlUGF0aHMiLCJvbiIsIkFERF9FVkVOVCIsInBhdGgiLCJzb3VyY2VGaWxlUGF0aCIsImZpbGVQYXRoIiwicGF0aFdpdGhvdXREaXJlY3RvcnlQYXRoRnJvbVBhdGhBbmREaXJlY3RvcnlQYXRoIiwicHVzaCIsIlJFQURZX0VWRU5UIiwiY2xvc2UiLCJ0aGVuIiwiZW50cnlGaWxlUGF0aCIsImZpbGVQYXRoc0luY2x1ZGVzRW50cnlGaWxlUGF0aCIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsIkVOVFJZX0ZJTEVfTk9UX0lOQ0xVREVEX0lOX0JVTkRMRURfRklMRVNfTUVTU0FHRSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7Ozt3QkFMZTt5QkFDUTswQkFDa0I7c0JBQ0E7QUFFbEQsU0FBU0EsMkJBQTJCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUN4RSxNQUFNLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdELFNBQzFCRSxVQUFVQyxJQUFBQSx1Q0FBOEIsRUFBQ0Ysc0JBQ3pDRyxZQUFZLEVBQUU7SUFFcEJGLFFBQVFHLEVBQUUsQ0FBQ0MsaUJBQVMsRUFBRSxDQUFDQztRQUNyQixNQUFNQyxpQkFBaUJELE1BQ2pCRSxXQUFXQyxJQUFBQSxzREFBZ0QsRUFBQ0YsZ0JBQWdCUCxzQkFBc0IsR0FBRztRQUUzR0csVUFBVU8sSUFBSSxDQUFDRjtJQUNqQjtJQUVBUCxRQUFRRyxFQUFFLENBQUNPLG1CQUFXLEVBQUU7UUFDdEJWLFFBQVFXLEtBQUssR0FBR0MsSUFBSSxDQUFDO1lBQ25CLE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdmO1lBRTFCLElBQUllLGVBQWU7Z0JBQ2pCLE1BQU1DLGlDQUFpQ1osVUFBVWEsUUFBUSxDQUFDRjtnQkFFMUQsSUFBSSxDQUFDQyxnQ0FBZ0M7b0JBQ25DRSxRQUFRQyxHQUFHLENBQUNDLDBEQUFnRDtvQkFFNURyQjtvQkFFQTtnQkFDRjtZQUNGO1lBRUFzQixPQUFPQyxNQUFNLENBQUN0QixTQUFTO2dCQUNyQkk7WUFDRjtZQUVBTjtRQUNGO0lBQ0Y7QUFDRiJ9