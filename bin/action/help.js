'use strict';

function help() {
  console.log(`Usage: 
  
  watchful [<command>] [<options>]

Commands:

  help                                           Show this help
  
  batch                                          Batch build

  [incremental]                                  Watch and build incrementally
  
Options:

  --version|-v                                   Show the version

  --help|-h                                      Show this help
  
  --debug|-d                                     Debug, that is enable source maps
  
  --quietly|-q                                   Run with almost no console logging

  --entry-file|-b                                Entry file path
  
  --bundle-file|-b                               Bundle file path
  
  --lib-directory|-l                             Lib directory path

  --temp-directory|-t                            Temp directory path

  --source-directory|-s                          Source directory path
  
Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/watchful-cli
`);
}

module.exports = help;
