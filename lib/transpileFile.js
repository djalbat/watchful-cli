"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return transpileFile;
    }
});
const _path = require("./utilities/path");
function transpileFile(filePath, context, callback) {
    const { transpileFileFunction, sourceDirectoryPath, targetDirectoryPath } = context;
    transpileFileFunction(filePath, sourceDirectoryPath, targetDirectoryPath, (success)=>{
        const { quietly } = context;
        if (!quietly) {
            const sourceFilePath = (0, _path.combinePaths)(sourceDirectoryPath, filePath);
            console.log(`Transpiled '${sourceFilePath}'.`);
        }
        callback(success);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3BpbGVGaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUGF0aHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc3BpbGVGaWxlKGZpbGVQYXRoLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBjb25zdCB7IHRyYW5zcGlsZUZpbGVGdW5jdGlvbiwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dDtcblxuICB0cmFuc3BpbGVGaWxlRnVuY3Rpb24oZmlsZVBhdGgsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgsIChzdWNjZXNzKSA9PiB7XG4gICAgY29uc3QgeyBxdWlldGx5IH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKCFxdWlldGx5KSB7XG4gICAgICBjb25zdCBzb3VyY2VGaWxlUGF0aCA9IGNvbWJpbmVQYXRocyhzb3VyY2VEaXJlY3RvcnlQYXRoLCBmaWxlUGF0aCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBUcmFuc3BpbGVkICcke3NvdXJjZUZpbGVQYXRofScuYCk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2soc3VjY2Vzcyk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInRyYW5zcGlsZUZpbGUiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJjYWxsYmFjayIsInRyYW5zcGlsZUZpbGVGdW5jdGlvbiIsInNvdXJjZURpcmVjdG9yeVBhdGgiLCJ0YXJnZXREaXJlY3RvcnlQYXRoIiwic3VjY2VzcyIsInF1aWV0bHkiLCJzb3VyY2VGaWxlUGF0aCIsImNvbWJpbmVQYXRocyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7c0JBRks7QUFFZCxTQUFTQSxjQUFjQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtJQUMvRCxNQUFNLEVBQUVDLHFCQUFxQixFQUFFQyxtQkFBbUIsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0o7SUFFNUVFLHNCQUFzQkgsVUFBVUkscUJBQXFCQyxxQkFBcUIsQ0FBQ0M7UUFDekUsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR047UUFFcEIsSUFBSSxDQUFDTSxTQUFTO1lBQ1osTUFBTUMsaUJBQWlCQyxJQUFBQSxrQkFBWSxFQUFDTCxxQkFBcUJKO1lBRXpEVSxRQUFRQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUVILGVBQWUsRUFBRSxDQUFDO1FBQy9DO1FBRUFOLFNBQVNJO0lBQ1g7QUFDRiJ9