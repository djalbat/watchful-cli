"use strict";

function help() {
  console.log(`Usage: 
  
  watchful [<command>] [<options>]

Commands:

  version                                        Show theh version

  help                                           Show this help
  
  batch                                          Batch build

  [incremental]                                  Watch and build incrementally
  
Options:

  --version|-v                                   Show the version

  --help|-h                                      Show this help
  
  --wait|-w                                      Wait before building incrementally

  --debug|-d                                     Debug, that is enable source maps
  
  --metrics|-m                                   Show metrics, that is file counts and times

  --quietly|-q                                   Run with almost no console logging

  --entry-file|-b                                Entry file path
  
  --bundle-file|-b                               Bundle file path
  
  --lib-directory|-l                             Lib directory path

  --temp-directory|-t                            Temp directory path

  --source-directory|-s                          Source directory path

  --child-processes|-c                           Create so many child processes
  
Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/watchful-cli
`);
}

module.exports = help;
