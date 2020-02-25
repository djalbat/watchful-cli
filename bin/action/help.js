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
  
  --debug|d                                      Debug, that is enable source maps
  

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/watchful-cli
`);
}

module.exports = help;
