"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return main;
    }
});
var _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
var _batch = /*#__PURE__*/ _interop_require_default(require("./action/batch"));
var _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
var _incremental = /*#__PURE__*/ _interop_require_default(require("./action/incremental"));
var _messages = require("./messages");
var _commands = require("./commands");
var _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main(command, argument, options) {
    var _options_wait = options.wait, wait = _options_wait === void 0 ? _defaults.DEFAULT_WAIT : _options_wait, _options_node = options.node, node = _options_node === void 0 ? _defaults.DEFAULT_NODE : _options_node, _options_debug = options.debug, debug = _options_debug === void 0 ? _defaults.DEFAULT_DEBUG : _options_debug, _options_release = options.release, release = _options_release === void 0 ? _defaults.DEFAULT_RELEASE : _options_release, _options_bundler = options.bundler, bundler = _options_bundler === void 0 ? _defaults.DEFAULT_BUNDLER : _options_bundler, _options_quietly = options.quietly, quietly = _options_quietly === void 0 ? _defaults.DEFAULT_QUIETLY : _options_quietly, _options_metrics = options.metrics, metrics = _options_metrics === void 0 ? _defaults.DEFAULT_METRICS : _options_metrics, _options_processes = options.processes, processes = _options_processes === void 0 ? _defaults.DEFAULT_PROCESSES : _options_processes, _options_entryFile = options.entryFile, entryFile = _options_entryFile === void 0 ? _defaults.DEFAULT_ENTRY_FILE : _options_entryFile, _options_transpiler = options.transpiler, transpiler = _options_transpiler === void 0 ? _defaults.DEFAULT_TRANSPILER : _options_transpiler, _options_bundleFile = options.bundleFile, bundleFile = _options_bundleFile === void 0 ? _defaults.DEFAULT_BUNDLE_FILE : _options_bundleFile, _options_libDirectory = options.libDirectory, libDirectory = _options_libDirectory === void 0 ? _defaults.DEFAULT_LIB_DIRECTORY : _options_libDirectory, _options_tempDirectory = options.tempDirectory, tempDirectory = _options_tempDirectory === void 0 ? _defaults.DEFAULT_TEMP_DIRECTORY : _options_tempDirectory, _options_sourceDirectory = options.sourceDirectory, sourceDirectory = _options_sourceDirectory === void 0 ? _defaults.DEFAULT_SOURCE_DIRECTORY : _options_sourceDirectory;
    switch(command){
        case null:
            {
                console.log(_messages.NO_COMMAND_GIVEN_MESSAGE);
                break;
            }
        case _commands.HELP_COMMAND:
            {
                (0, _help.default)();
                break;
            }
        case _commands.BATCH_COMMAND:
            {
                (0, _batch.default)(wait, node, debug, release, bundler, quietly, metrics, processes, entryFile, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory);
                break;
            }
        case _commands.VERSION_COMMAND:
            {
                (0, _version.default)();
                break;
            }
        case _commands.INCREMENTAL_COMMAND:
            {
                (0, _incremental.default)(wait, node, debug, release, bundler, quietly, metrics, processes, entryFile, transpiler, bundleFile, libDirectory, tempDirectory, sourceDirectory);
                break;
            }
        default:
            {
                console.log(_messages.COMMAND_NOT_RECOGNISED_MESSAGE);
                break;
            }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaGVscEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaGVscFwiO1xuaW1wb3J0IGJhdGNoQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9iYXRjaFwiO1xuaW1wb3J0IHZlcnNpb25BY3Rpb24gZnJvbSBcIi4vYWN0aW9uL3ZlcnNpb25cIjtcbmltcG9ydCBpbmNyZW1lbnRhbEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaW5jcmVtZW50YWxcIjtcblxuaW1wb3J0IHsgTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFLCBDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgSEVMUF9DT01NQU5ELCBCQVRDSF9DT01NQU5ELCBWRVJTSU9OX0NPTU1BTkQsIElOQ1JFTUVOVEFMX0NPTU1BTkQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9XQUlULFxuICAgICAgICAgREVGQVVMVF9OT0RFLFxuICAgICAgICAgREVGQVVMVF9ERUJVRyxcbiAgICAgICAgIERFRkFVTFRfUkVMRUFTRSxcbiAgICAgICAgIERFRkFVTFRfQlVORExFUixcbiAgICAgICAgIERFRkFVTFRfUVVJRVRMWSxcbiAgICAgICAgIERFRkFVTFRfTUVUUklDUyxcbiAgICAgICAgIERFRkFVTFRfRU5UUllfRklMRSxcbiAgICAgICAgIERFRkFVTFRfUFJPQ0VTU0VTLFxuICAgICAgICAgREVGQVVMVF9UUkFOU1BJTEVSLFxuICAgICAgICAgREVGQVVMVF9CVU5ETEVfRklMRSxcbiAgICAgICAgIERFRkFVTFRfTElCX0RJUkVDVE9SWSxcbiAgICAgICAgIERFRkFVTFRfVEVNUF9ESVJFQ1RPUlksXG4gICAgICAgICBERUZBVUxUX1NPVVJDRV9ESVJFQ1RPUlkgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgd2FpdCA9IERFRkFVTFRfV0FJVCxcbiAgICAgICAgICBub2RlID0gREVGQVVMVF9OT0RFLFxuICAgICAgICAgIGRlYnVnID0gREVGQVVMVF9ERUJVRyxcbiAgICAgICAgICByZWxlYXNlID0gREVGQVVMVF9SRUxFQVNFLFxuICAgICAgICAgIGJ1bmRsZXIgPSBERUZBVUxUX0JVTkRMRVIsXG4gICAgICAgICAgcXVpZXRseSA9IERFRkFVTFRfUVVJRVRMWSxcbiAgICAgICAgICBtZXRyaWNzID0gREVGQVVMVF9NRVRSSUNTLFxuICAgICAgICAgIHByb2Nlc3NlcyA9IERFRkFVTFRfUFJPQ0VTU0VTLFxuICAgICAgICAgIGVudHJ5RmlsZSA9IERFRkFVTFRfRU5UUllfRklMRSxcbiAgICAgICAgICB0cmFuc3BpbGVyID0gREVGQVVMVF9UUkFOU1BJTEVSLFxuICAgICAgICAgIGJ1bmRsZUZpbGUgPSBERUZBVUxUX0JVTkRMRV9GSUxFLFxuICAgICAgICAgIGxpYkRpcmVjdG9yeSA9IERFRkFVTFRfTElCX0RJUkVDVE9SWSxcbiAgICAgICAgICB0ZW1wRGlyZWN0b3J5ID0gREVGQVVMVF9URU1QX0RJUkVDVE9SWSxcbiAgICAgICAgICBzb3VyY2VEaXJlY3RvcnkgPSBERUZBVUxUX1NPVVJDRV9ESVJFQ1RPUlkgfSA9IG9wdGlvbnM7XG5cbiAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgY2FzZSBudWxsOiB7XG4gICAgICBjb25zb2xlLmxvZyhOT19DT01NQU5EX0dJVkVOX01FU1NBR0UpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEhFTFBfQ09NTUFORDoge1xuICAgICAgaGVscEFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEJBVENIX0NPTU1BTkQ6IHtcbiAgICAgIGJhdGNoQWN0aW9uKHdhaXQsIG5vZGUsIGRlYnVnLCByZWxlYXNlLCBidW5kbGVyLCBxdWlldGx5LCBtZXRyaWNzLCBwcm9jZXNzZXMsIGVudHJ5RmlsZSwgdHJhbnNwaWxlciwgYnVuZGxlRmlsZSwgbGliRGlyZWN0b3J5LCB0ZW1wRGlyZWN0b3J5LCBzb3VyY2VEaXJlY3RvcnkpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFZFUlNJT05fQ09NTUFORDoge1xuICAgICAgdmVyc2lvbkFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIElOQ1JFTUVOVEFMX0NPTU1BTkQ6IHtcbiAgICAgIGluY3JlbWVudGFsQWN0aW9uKHdhaXQsIG5vZGUsIGRlYnVnLCByZWxlYXNlLCBidW5kbGVyLCBxdWlldGx5LCBtZXRyaWNzLCBwcm9jZXNzZXMsIGVudHJ5RmlsZSwgdHJhbnNwaWxlciwgYnVuZGxlRmlsZSwgbGliRGlyZWN0b3J5LCB0ZW1wRGlyZWN0b3J5LCBzb3VyY2VEaXJlY3RvcnkpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zb2xlLmxvZyhDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYWluIiwiY29tbWFuZCIsImFyZ3VtZW50Iiwib3B0aW9ucyIsIndhaXQiLCJERUZBVUxUX1dBSVQiLCJub2RlIiwiREVGQVVMVF9OT0RFIiwiZGVidWciLCJERUZBVUxUX0RFQlVHIiwicmVsZWFzZSIsIkRFRkFVTFRfUkVMRUFTRSIsImJ1bmRsZXIiLCJERUZBVUxUX0JVTkRMRVIiLCJxdWlldGx5IiwiREVGQVVMVF9RVUlFVExZIiwibWV0cmljcyIsIkRFRkFVTFRfTUVUUklDUyIsInByb2Nlc3NlcyIsIkRFRkFVTFRfUFJPQ0VTU0VTIiwiZW50cnlGaWxlIiwiREVGQVVMVF9FTlRSWV9GSUxFIiwidHJhbnNwaWxlciIsIkRFRkFVTFRfVFJBTlNQSUxFUiIsImJ1bmRsZUZpbGUiLCJERUZBVUxUX0JVTkRMRV9GSUxFIiwibGliRGlyZWN0b3J5IiwiREVGQVVMVF9MSUJfRElSRUNUT1JZIiwidGVtcERpcmVjdG9yeSIsIkRFRkFVTFRfVEVNUF9ESVJFQ1RPUlkiLCJzb3VyY2VEaXJlY3RvcnkiLCJERUZBVUxUX1NPVVJDRV9ESVJFQ1RPUlkiLCJjb25zb2xlIiwibG9nIiwiTk9fQ09NTUFORF9HSVZFTl9NRVNTQUdFIiwiSEVMUF9DT01NQU5EIiwiaGVscEFjdGlvbiIsIkJBVENIX0NPTU1BTkQiLCJiYXRjaEFjdGlvbiIsIlZFUlNJT05fQ09NTUFORCIsInZlcnNpb25BY3Rpb24iLCJJTkNSRU1FTlRBTF9DT01NQU5EIiwiaW5jcmVtZW50YWxBY3Rpb24iLCJDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdCQTs7O2VBQXdCQTs7OzJEQXRCRDs0REFDQzs4REFDRTtrRUFDSTt3QkFFMkM7d0JBQ1M7d0JBY3pDOzs7Ozs7QUFFMUIsU0FBU0EsS0FBS0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE9BQU87SUFDckQsb0JBYXVEQSxRQWIvQ0MsTUFBQUEsa0NBQU9DLHNCQUFZLGtDQWE0QkYsUUFaL0NHLE1BQUFBLGtDQUFPQyxzQkFBWSxtQ0FZNEJKLFFBWC9DSyxPQUFBQSxvQ0FBUUMsdUJBQWEsc0NBVzBCTixRQVYvQ08sU0FBQUEsd0NBQVVDLHlCQUFlLHdDQVVzQlIsUUFUL0NTLFNBQUFBLHdDQUFVQyx5QkFBZSx3Q0FTc0JWLFFBUi9DVyxTQUFBQSx3Q0FBVUMseUJBQWUsd0NBUXNCWixRQVAvQ2EsU0FBQUEsd0NBQVVDLHlCQUFlLDBDQU9zQmQsUUFOL0NlLFdBQUFBLDRDQUFZQywyQkFBaUIsNENBTWtCaEIsUUFML0NpQixXQUFBQSw0Q0FBWUMsNEJBQWtCLDZDQUtpQmxCLFFBSi9DbUIsWUFBQUEsOENBQWFDLDRCQUFrQiw4Q0FJZ0JwQixRQUgvQ3FCLFlBQUFBLDhDQUFhQyw2QkFBbUIsZ0RBR2V0QixRQUYvQ3VCLGNBQUFBLGtEQUFlQywrQkFBcUIsbURBRVd4QixRQUQvQ3lCLGVBQUFBLG9EQUFnQkMsZ0NBQXNCLHNEQUNTMUIsUUFBL0MyQixpQkFBQUEsd0RBQWtCQyxrQ0FBd0I7SUFFbEQsT0FBUTlCO1FBQ04sS0FBSztZQUFNO2dCQUNUK0IsUUFBUUMsR0FBRyxDQUFDQyxrQ0FBd0I7Z0JBRXBDO1lBQ0Y7UUFFQSxLQUFLQyxzQkFBWTtZQUFFO2dCQUNqQkMsSUFBQUEsYUFBVTtnQkFFVjtZQUNGO1FBRUEsS0FBS0MsdUJBQWE7WUFBRTtnQkFDbEJDLElBQUFBLGNBQVcsRUFBQ2xDLE1BQU1FLE1BQU1FLE9BQU9FLFNBQVNFLFNBQVNFLFNBQVNFLFNBQVNFLFdBQVdFLFdBQVdFLFlBQVlFLFlBQVlFLGNBQWNFLGVBQWVFO2dCQUU5STtZQUNGO1FBRUEsS0FBS1MseUJBQWU7WUFBRTtnQkFDcEJDLElBQUFBLGdCQUFhO2dCQUViO1lBQ0Y7UUFFQSxLQUFLQyw2QkFBbUI7WUFBRTtnQkFDeEJDLElBQUFBLG9CQUFpQixFQUFDdEMsTUFBTUUsTUFBTUUsT0FBT0UsU0FBU0UsU0FBU0UsU0FBU0UsU0FBU0UsV0FBV0UsV0FBV0UsWUFBWUUsWUFBWUUsY0FBY0UsZUFBZUU7Z0JBRXBKO1lBQ0Y7UUFFQTtZQUFTO2dCQUNQRSxRQUFRQyxHQUFHLENBQUNVLHdDQUE4QjtnQkFFMUM7WUFDRjtJQUNGO0FBQ0YifQ==