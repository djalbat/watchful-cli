"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return prepare;
    }
});
const _defaults = require("./defaults");
const _commands = require("./commands");
function prepare(command, argument, options, main) {
    const { help = _defaults.DEFAULT_HELP, version = _defaults.DEFAULT_VERSION } = options;
    if (false) {
    ///
    } else if (help) {
        command = _commands.HELP_COMMAND;
    } else if (version) {
        command = _commands.VERSION_COMMAND;
    }
    main(command, argument, options);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVwYXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0hFTFAsIERFRkFVTFRfVkVSU0lPTiB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBIRUxQX0NPTU1BTkQsIFZFUlNJT05fQ09NTUFORCB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmUoY29tbWFuZCwgYXJndW1lbnQsIG9wdGlvbnMsIG1haW4pIHtcbiAgY29uc3QgeyBoZWxwID0gREVGQVVMVF9IRUxQLCB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OIH0gPSBvcHRpb25zO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKGhlbHApIHtcbiAgICBjb21tYW5kID0gSEVMUF9DT01NQU5EO1xuICB9IGVsc2UgaWYgKHZlcnNpb24pIHtcbiAgICBjb21tYW5kID0gVkVSU0lPTl9DT01NQU5EO1xuICB9XG5cbiAgbWFpbihjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsicHJlcGFyZSIsImNvbW1hbmQiLCJhcmd1bWVudCIsIm9wdGlvbnMiLCJtYWluIiwiaGVscCIsIkRFRkFVTFRfSEVMUCIsInZlcnNpb24iLCJERUZBVUxUX1ZFUlNJT04iLCJIRUxQX0NPTU1BTkQiLCJWRVJTSU9OX0NPTU1BTkQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBd0JBOzs7MEJBSHNCOzBCQUNBO0FBRS9CLFNBQVNBLFFBQVFDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLElBQUk7SUFDOUQsTUFBTSxFQUFFQyxPQUFPQyxzQkFBWSxFQUFFQyxVQUFVQyx5QkFBZSxFQUFFLEdBQUdMO0lBRTNELElBQUksT0FBTztJQUNULEdBQUc7SUFDTCxPQUFPLElBQUlFLE1BQU07UUFDZkosVUFBVVEsc0JBQVk7SUFDeEIsT0FBTyxJQUFJRixTQUFTO1FBQ2xCTixVQUFVUyx5QkFBZTtJQUMzQjtJQUVBTixLQUFLSCxTQUFTQyxVQUFVQztBQUMxQiJ9