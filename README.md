# Watchful-CLI

Incremental transpilation with bundling.

Watchful leverages [Babel](https://babeljs.io/) and [Browserify](http://browserify.org/) to provide a straightforward build tool that supports incremental transpilation together with bundling. It has a batch mode and a default watch mode. In the latter mode it will only transpile files that have been added or changed, which can improve build times considerably.

### Why aren't Babel and Browserify included as dependencies?

Babel presets and plugins require [@babel/core](https://babeljs.io/docs/en/babel-core) as a peer dependency, so you would have to include it in your project anyway. And since bundling is optional, there also seemed little point in including Browserify as a dependency. Watchful is designed to run in your project directory and will load the versions of Babel and Browserify it finds in there. This gives you complete control over versions and configuration. Aside from a `debug` option, Watchful is agnostic to both.  

## Installation

You can install Watchful via [npm](https://www.npmjs.com/):
 
    npm install watchful-cli
    
There is no need to install it globally, the recommended approach is to run it by way of [npm sciprts](https://docs.npmjs.com/misc/scripts). If you do decide to install it globally, however, you may need to prepend [`sudo`](https://en.wikipedia.org/wiki/Sudo), depending on your setup.

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/watchful-cli.git

...then install the necessary modules with npm from within the project's root directory:

    npm install
    
## Usage

For a list of commands and options, run the following command:

    watchful help
        
There are two main use cases, namely building a package and building a bundle. In order to build a package, you must supply the source and lib directories:

    watchful batch --source-directory=es6/ --lib-directory=./lib
    
This will transpile all the JavaScript files in the `es6` directory and place them in the `lib` director while honouring sub-directories. Note that Watchful is tolerant of leading and trailing delimiters. Nonetheless, it expects paths to be relative ones pointing to folders in the project directory. Relative paths outside of the project directory or any absolute paths will result in errors.

In order to build a bundle, you must supply the source and temp directories together with an entry file for the bundler:

    watchful batch --source-directory=es6/ --temp-directory=./tmp --enty-file=main.js

The path to the entry file is taken to be relative to the source directory, not the project directory. You can also optionally supply a path to the bundle file by way of the `--bundle-file` option, otherwise the output is piped to `stdout`.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
