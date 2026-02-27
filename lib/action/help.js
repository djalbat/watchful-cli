"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return helpAction;
    }
});
function helpAction() {
    console.log(`Usage: 
  
  watchful [<options>] [<command>] [<argument>] 

Commands:

  help                                           Show this help

  version                                        Show the version
  
  batch                                          Batch build

  [incremental]                                  Watch and build incrementally
  
Options:

  --version|-v                                   Show the version

  --help|-h                                      Show this help
  
  --wait|-w                                      Wait before building incrementally

  --node|-n                                      Bundle for Node rather than the browser

  --debug|-d                                     Debug, that is enable source maps
  
  --release|-r                                   Release, that is enable minification
  
  --metrics|-m                                   Show metrics, that is file counts and times

  --quietly|-q                                   Run with almost no console logging

  --processes|-p                                 The number of processes
  
  --bundler|-u                                   The bundler, either \`browserify\` or \`esbuild\`

  --transpiler|-r                                The transpiler, either \`babel\` or \`swc\`

  --entry-file|-b                                Entry file path
  
  --bundle-file|-b                               Bundle file path
  
  --lib-directory|-l                             Library directory path

  --temp-directory|-x                            Temporary directory path

  --source-directory|-s                          Source directory path

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/watchful-cli
`);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vaGVscC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVscEFjdGlvbigpIHtcbiAgY29uc29sZS5sb2coYFVzYWdlOiBcbiAgXG4gIHdhdGNoZnVsIFs8b3B0aW9ucz5dIFs8Y29tbWFuZD5dIFs8YXJndW1lbnQ+XSBcblxuQ29tbWFuZHM6XG5cbiAgaGVscCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IHRoaXMgaGVscFxuXG4gIHZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGUgdmVyc2lvblxuICBcbiAgYmF0Y2ggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXRjaCBidWlsZFxuXG4gIFtpbmNyZW1lbnRhbF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2F0Y2ggYW5kIGJ1aWxkIGluY3JlbWVudGFsbHlcbiAgXG5PcHRpb25zOlxuXG4gIC0tdmVyc2lvbnwtdiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGUgdmVyc2lvblxuXG4gIC0taGVscHwtaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGlzIGhlbHBcbiAgXG4gIC0td2FpdHwtdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FpdCBiZWZvcmUgYnVpbGRpbmcgaW5jcmVtZW50YWxseVxuXG4gIC0tbm9kZXwtbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVuZGxlIGZvciBOb2RlIHJhdGhlciB0aGFuIHRoZSBicm93c2VyXG5cbiAgLS1kZWJ1Z3wtZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWJ1ZywgdGhhdCBpcyBlbmFibGUgc291cmNlIG1hcHNcbiAgXG4gIC0tcmVsZWFzZXwtciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZSwgdGhhdCBpcyBlbmFibGUgbWluaWZpY2F0aW9uXG4gIFxuICAtLW1ldHJpY3N8LW0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgbWV0cmljcywgdGhhdCBpcyBmaWxlIGNvdW50cyBhbmQgdGltZXNcblxuICAtLXF1aWV0bHl8LXEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJ1biB3aXRoIGFsbW9zdCBubyBjb25zb2xlIGxvZ2dpbmdcblxuICAtLXByb2Nlc3Nlc3wtcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBudW1iZXIgb2YgcHJvY2Vzc2VzXG4gIFxuICAtLWJ1bmRsZXJ8LXUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBidW5kbGVyLCBlaXRoZXIgXFxgYnJvd3NlcmlmeVxcYCBvciBcXGBlc2J1aWxkXFxgXG5cbiAgLS10cmFuc3BpbGVyfC1yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgdHJhbnNwaWxlciwgZWl0aGVyIFxcYGJhYmVsXFxgIG9yIFxcYHN3Y1xcYFxuXG4gIC0tZW50cnktZmlsZXwtYiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50cnkgZmlsZSBwYXRoXG4gIFxuICAtLWJ1bmRsZS1maWxlfC1iICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1bmRsZSBmaWxlIHBhdGhcbiAgXG4gIC0tbGliLWRpcmVjdG9yeXwtbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlicmFyeSBkaXJlY3RvcnkgcGF0aFxuXG4gIC0tdGVtcC1kaXJlY3Rvcnl8LXggICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcG9yYXJ5IGRpcmVjdG9yeSBwYXRoXG5cbiAgLS1zb3VyY2UtZGlyZWN0b3J5fC1zICAgICAgICAgICAgICAgICAgICAgICAgICBTb3VyY2UgZGlyZWN0b3J5IHBhdGhcblxuRnVydGhlciBpbmZvcm1hdGlvbjpcblxuUGxlYXNlIHNlZSB0aGUgcmVhZG1lIGZpbGUgb24gR2l0SHViOlxuXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L3dhdGNoZnVsLWNsaVxuYCk7XG59XG4iXSwibmFtZXMiOlsiaGVscEFjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQTtJQUN0QkMsUUFBUUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURmLENBQUM7QUFDRCJ9