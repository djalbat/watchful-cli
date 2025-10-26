"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return configure;
    }
});
var _defaults = require("./defaults");
var _commands = require("./commands");
function configure(command, argument, options, main) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWd1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfSEVMUCwgREVGQVVMVF9WRVJTSU9OIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IEhFTFBfQ09NTUFORCwgVkVSU0lPTl9DT01NQU5EIH0gZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zLCBtYWluKSB7XG4gIGNvbnN0IHsgaGVscCA9IERFRkFVTFRfSEVMUCwgdmVyc2lvbiA9IERFRkFVTFRfVkVSU0lPTiB9ID0gb3B0aW9ucztcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChoZWxwKSB7XG4gICAgY29tbWFuZCA9IEhFTFBfQ09NTUFORDtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uKSB7XG4gICAgY29tbWFuZCA9IFZFUlNJT05fQ09NTUFORDtcbiAgfVxuXG4gIG1haW4oY29tbWFuZCwgYXJndW1lbnQsIG9wdGlvbnMpO1xufVxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZSIsImNvbW1hbmQiLCJhcmd1bWVudCIsIm9wdGlvbnMiLCJtYWluIiwiaGVscCIsIkRFRkFVTFRfSEVMUCIsInZlcnNpb24iLCJERUZBVUxUX1ZFUlNJT04iLCJIRUxQX0NPTU1BTkQiLCJWRVJTSU9OX0NPTU1BTkQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBd0JBOzs7d0JBSHNCO3dCQUNBO0FBRS9CLFNBQVNBLFVBQVVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLElBQUk7SUFDaEUsb0JBQTJERCxRQUFuREUsTUFBQUEsa0NBQU9DLHNCQUFZLHFDQUFnQ0gsUUFBOUJJLFNBQUFBLHdDQUFVQyx5QkFBZTtJQUV0RCxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJSCxNQUFNO1FBQ2ZKLFVBQVVRLHNCQUFZO0lBQ3hCLE9BQU8sSUFBSUYsU0FBUztRQUNsQk4sVUFBVVMseUJBQWU7SUFDM0I7SUFFQU4sS0FBS0gsU0FBU0MsVUFBVUM7QUFDMUIifQ==