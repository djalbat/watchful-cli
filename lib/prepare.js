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
var _defaults = require("./defaults");
var _commands = require("./commands");
function prepare(command, argument, options, main) {
    var _options_help = options.help, help = _options_help === void 0 ? _defaults.DEFAULT_HELP : _options_help, _options_version = options.version, version = _options_version === void 0 ? _defaults.DEFAULT_VERSION : _options_version;
    if (false) {
    ///
    } else if (help) {
        command = _commands.HELP_COMMAND;
    } else if (version) {
        command = _commands.VERSION_COMMAND;
    }
    main(command, argument, options);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVwYXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0hFTFAsIERFRkFVTFRfVkVSU0lPTiB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBIRUxQX0NPTU1BTkQsIFZFUlNJT05fQ09NTUFORCB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmUoY29tbWFuZCwgYXJndW1lbnQsIG9wdGlvbnMsIG1haW4pIHtcbiAgY29uc3QgeyBoZWxwID0gREVGQVVMVF9IRUxQLCB2ZXJzaW9uID0gREVGQVVMVF9WRVJTSU9OIH0gPSBvcHRpb25zO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKGhlbHApIHtcbiAgICBjb21tYW5kID0gSEVMUF9DT01NQU5EO1xuICB9IGVsc2UgaWYgKHZlcnNpb24pIHtcbiAgICBjb21tYW5kID0gVkVSU0lPTl9DT01NQU5EO1xuICB9XG5cbiAgbWFpbihjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsicHJlcGFyZSIsImNvbW1hbmQiLCJhcmd1bWVudCIsIm9wdGlvbnMiLCJtYWluIiwiaGVscCIsIkRFRkFVTFRfSEVMUCIsInZlcnNpb24iLCJERUZBVUxUX1ZFUlNJT04iLCJIRUxQX0NPTU1BTkQiLCJWRVJTSU9OX0NPTU1BTkQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBd0JBOzs7d0JBSHNCO3dCQUNBO0FBRS9CLFNBQVNBLFFBQVFDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLElBQUk7SUFDOUQsb0JBQTJERCxRQUFuREUsTUFBQUEsa0NBQU9DLHNCQUFZLHFDQUFnQ0gsUUFBOUJJLFNBQUFBLHdDQUFVQyx5QkFBZTtJQUV0RCxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJSCxNQUFNO1FBQ2ZKLFVBQVVRLHNCQUFZO0lBQ3hCLE9BQU8sSUFBSUYsU0FBUztRQUNsQk4sVUFBVVMseUJBQWU7SUFDM0I7SUFFQU4sS0FBS0gsU0FBU0MsVUFBVUM7QUFDMUIifQ==