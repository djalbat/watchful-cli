# Watchful-CLI

Incremental transpilation with bundling.

Watchful leverages [Babel](https://babeljs.io/) and [Browserify](http://browserify.org/) to provide a straightforward build tool that supports incremental transpilation together with bundling. It has a batch mode and a default watch mode. In the latter mode it will only transpile files that have been added or changed, which can improve build times considerably.

### Why aren't Babel and Browserify included as dependencies?

Babel presets and plugins require [@babel/core](https://babeljs.io/docs/en/babel-core) as a peer dependency, so you would have to include it in your project anyway. And since bundling is optional, there also seemed little point in including Browserify as a dependency. Watchful is designed to run in your project directory and will load the versions of Babel and Browserify it finds in there. This gives you complete control over versions and configuration. Aside from a `debug` option, Watchful is agnostic to both.  

Watchful works best hand in hand with [Lively](https://github.com/djalbat/lively-cli). 

## Installation

You can install Watchful via [npm](https://www.npmjs.com/):
 
    npm install watchful-cli
    
There is no need to install it globally, the recommended approach is to run it by way of [npm sciprts](https://docs.npmjs.com/misc/scripts). If you do decide to install it globally, however, you may need to prepend [`sudo`](https://en.wikipedia.org/wiki/Sudo), depending on your setup.

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/watchful-cli.git

...then install the dependencies with npm from within the project's root directory:

    npm install
    
## Usage

```
  watchful [<command>] [<options>]

Commands:

  version                                        Show theh version

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
```

There are two main use cases, namely building a package and building a bundle. In order to build a package, you must supply the source and lib directories:

    watchful batch --source-directory=es6/ --lib-directory=./lib
    
This will transpile all the JavaScript files in the `es6` directory and place them in the `lib` director while honouring sub-directories. Note that Watchful is tolerant of leading and trailing delimiters. Nonetheless, it expects paths to be relative ones pointing to folders in the project directory. Relative paths outside of the project directory or any absolute paths will result in errors.

In order to build a bundle, you must supply the source and temp directories together with an entry file for the bundler:

    watchful batch --source-directory=es6/ --temp-directory=./tmp --enty-file=main.js

The path to the entry file is taken to be relative to the temp directory, not the project directory. You can also optionally supply a path to the bundle file by way of the `--bundle-file` option, otherwise the output is piped to `stdout`.

### Running by way of npm scripts

As already mentioned, it is recommended that you install Watchful as a project dependency rather than globally, then run it with npm scripts. In this example we build a bundle for an application using ES6 and [JSX](https://reactjs.org/docs/introducing-jsx.html).

The developer dependencies in the `package.json` file would like something like this:

```
"devDependencies": {
  "@babel/core": "^7.8.6",
  "@babel/plugin-transform-react-jsx": "^7.8.3",
  "@babel/preset-env": "^7.8.6",
  "browserify": "^16.5.0",
  
  ...

  "watchful-cli": "^1.0.3"
}
```

The `babel.config.json` file in the project directory would look something like this:

```
{
  "presets": [
    [
      "@babel/env"
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-react-jsx"
  ]
}
```

Now for the npm scripts:

```
"scripts": {
  "clean": "rm -rf ./tmp",
  "watchful": "watchful -s=./es6 -t=./tmp -e=main.js -b=./public/lib/client.js",
  "batch": "npm run watchful batch --",
  "batch-debug": "npm run watchful batch -- --debug",
  "incremental": "npm run watchful incremental -- --quietly",
  "incremental-debug": "npm run watchful incremental -- --debug --quietly",
  "build": "npm run clean && npm run batch && npm run clean",
  "build-debug": "npm run clean && npm run batch-debug && npm run clean",
  "watch": "npm run clean && npm run batch && npm run incremental",
  "watch-debug": "npm run clean && npm run batch-debug && npm run incremental-debug"
}
```

There are several points worth noting:

* The `clean` script has nothing to do with Watchful. It deletes the `tmp` directory and is used in the build scripts. Note that since the watch scripts have to be killed by the user, there is no opportunity to clean up after watching and consequently the `tmp` directory will remain. It is recommended that you add it to your `.gitignore` file, therefore, or make sure to always build before deployment.

* The `watchful` script invokes Watchful with the requisite paths for the source and temp directories together with the entry and bundle files. The options have been abbreviated. Using a dedicated `watchful` script means that these options only have to be specified once.

* The `batch`, `batch-debug`, `incremental` and `incremental-debug` scripts all make use of the aforementioned `watchful` script, passing it the requisite command plus additional options. The special `--` command tells npm to pass these options verbatim. The `incremental` command is optional and can be left out.

For a package rather than a bundle, you could remove the call to the final `clean` script from the build scripts; remove the entry and bundle file options from the `watchful` script; and change the temp directory to a lib directory.
 
## Contact

- james.smith@djalbat.com
- http://djalbat.com
