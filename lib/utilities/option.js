"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathFromOption", {
    enumerable: true,
    get: function() {
        return pathFromOption;
    }
});
var _constants = require("../constants");
function pathFromOption(option) {
    var path = null;
    var optionAbsolutePath = /^\/.*/.test(option), optionAllowedRelativePath = /^\.\/.*/.test(option), optionForbiddenRelativePath = /^\.\.\/.*/.test(option);
    if (false) {
    ///
    } else if (optionAbsolutePath) {
    ///
    } else if (optionAllowedRelativePath) {
        path = option.replace(/^\.\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
    } else if (optionForbiddenRelativePath) {
        path = null;
    } else {
        path = option; ///
    }
    return path;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb3B0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoRnJvbU9wdGlvbihvcHRpb24pIHtcbiAgbGV0IHBhdGggPSBudWxsO1xuXG4gIGNvbnN0IG9wdGlvbkFic29sdXRlUGF0aCA9IC9eXFwvLiovLnRlc3Qob3B0aW9uKSxcbiAgICAgICAgb3B0aW9uQWxsb3dlZFJlbGF0aXZlUGF0aCA9IC9eXFwuXFwvLiovLnRlc3Qob3B0aW9uKSxcbiAgICAgICAgb3B0aW9uRm9yYmlkZGVuUmVsYXRpdmVQYXRoID0gL15cXC5cXC5cXC8uKi8udGVzdChvcHRpb24pO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKG9wdGlvbkFic29sdXRlUGF0aCkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKG9wdGlvbkFsbG93ZWRSZWxhdGl2ZVBhdGgpIHtcbiAgICBwYXRoID0gb3B0aW9uLnJlcGxhY2UoL15cXC5cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpO1xuICB9IGVsc2UgaWYgKG9wdGlvbkZvcmJpZGRlblJlbGF0aXZlUGF0aCkge1xuICAgIHBhdGggPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHBhdGggPSBvcHRpb247ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufVxuIl0sIm5hbWVzIjpbInBhdGhGcm9tT3B0aW9uIiwib3B0aW9uIiwicGF0aCIsIm9wdGlvbkFic29sdXRlUGF0aCIsInRlc3QiLCJvcHRpb25BbGxvd2VkUmVsYXRpdmVQYXRoIiwib3B0aW9uRm9yYmlkZGVuUmVsYXRpdmVQYXRoIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRmE7QUFFdEIsU0FBU0EsZUFBZUMsTUFBTTtJQUNuQyxJQUFJQyxPQUFPO0lBRVgsSUFBTUMscUJBQXFCLFFBQVFDLElBQUksQ0FBQ0gsU0FDbENJLDRCQUE0QixVQUFVRCxJQUFJLENBQUNILFNBQzNDSyw4QkFBOEIsWUFBWUYsSUFBSSxDQUFDSDtJQUVyRCxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJRSxvQkFBb0I7SUFDN0IsR0FBRztJQUNMLE9BQU8sSUFBSUUsMkJBQTJCO1FBQ3BDSCxPQUFPRCxPQUFPTSxPQUFPLENBQUMsU0FBU0MsdUJBQVksRUFBRUQsT0FBTyxDQUFDLE9BQU9DLHVCQUFZO0lBQzFFLE9BQU8sSUFBSUYsNkJBQTZCO1FBQ3RDSixPQUFPO0lBQ1QsT0FBTztRQUNMQSxPQUFPRCxRQUFTLEdBQUc7SUFDckI7SUFFQSxPQUFPQztBQUNUIn0=