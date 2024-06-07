"use strict";

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

module.exports = helpAction;
