# Watchful-CLI

Incremental transpilation with bundling.

Watchful leverages existing bundlers and transpilers in order to provide a straightforward build tool that supports incremental transpilation together with bundling. It has a batch mode and a watch mode. In the latter mode it will only transpile files that have been added or changed, improving build times considerably.

Watchful works best hand in hand with [Lively-CLI](https://github.com/djalbat/lively-cli).

### Supported bundlers and transpilers

* [Browserify](http://browserify.org/)
* [ESBuild](https://esbuild.github.io/)  
* [Babel](https://babeljs.io/)
* [SWC](https://swc.rs/)

### Projects to get you started

All of the projects below utilise Watchful and can be readily adapted to make a template for your project. To see Watchful in action, clone a project, run the usual `npm install` and then `npm run watch-debug`.

* [Necessary](https://github.com/djalbat/necessary)
* [Sufficient](https://github.com/djalbat/necessary)

Both of these packages work in the browser and on Node. Necessary accomplishes this by making use of the [`browser`](https://github.com/defunctzombie/package-browser-field-spec) field alongside the usual `main` field in the `package.json` file. Sufficient accomplishes this by making use of the [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) property and otherwise only consisting of code that runs on both platforms.

* [With Style](https://github.com/djalbat/with-style)

This is also a package but has a bundled example. To see the latter in action, run `npm install` and `npm watch-debug` as before along with `npm start` to kick off a small development server. The example can be viewed at http://localhost:8888 and, since the development server utilises Lively, will live reload if you make changes to the source.

* [Muon](https://github.com/petros-ioannou1/muon)

Muon is a work in progress but nonetheless is a good example of a project that leverages both Watchful and Lively. The setup instructions are the same as for With Style.

### Comparisons

Using SWC and ESBuild in combination together with multiple processes can speed up a batch build more than fifteen times. The following metrics were gathered on a modern albeit mid-level MacBook for a project with just under four hundred files:

|                             | Transpile time | Bundle time  | Total time   |
| --------------------------- | -------------- | ------------ | ------------ |
| Babel + Browserify          | 8.5 seconds    | 2.2 seconds  | 10.7 seconds |
| SWC + ESBuild (4 processes) | 0.42 seconds   | 0.24 seconds | 0.66 seconds |

### Why aren't these tools included as dependencies?

Babel presets and plugins require [@babel/core](https://babeljs.io/docs/en/babel-core) as a peer dependency, so you would have to include it in your project anyway. Additionally, it is a large project with many dependencies itself and since it is optional, it did not seem like a good idea to include it. Similarly, since bundling is optional, there seemed little point in including either bundler as a dependency. 

Watchful is designed to run in your project directory and will load the bundlers and transpilers it finds there. This gives you complete control over their versions and configuration. Aside from the `debug`, `release` and `node` options, Watchful is agnostic to both.  

## Installation

You can install Watchful via [npm](https://www.npmjs.com/):
 
    npm install watchful-cli
    
There is no need to install it globally, the recommended approach is to run it by way of [npm sciprts](https://docs.npmjs.com/misc/scripts). If you do decide to install it globally, however, you may need to prepend [`sudo`](https://en.wikipedia.org/wiki/Sudo), depending on your setup.

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/watchful-cli.git

...then install the dependencies with npm from within the project's root directory:

    npm install
    
## Usage

Watchful has the following commands and options:

```
  watchful [<command>] [<options>]

Commands:

  help                                           Show this help
  
  version                                        Show theh version

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
  
  --bundler|-u                                   The bundler, either `browserify` or `esbuild`

  --transpiler|-r                                The transpiler, either `babel` or `swc`

  --entry-file|-b                                Entry file path
  
  --bundle-file|-b                               Bundle file path
  
  --lib-directory|-l                             Library directory path

  --temp-directory|-x                            Temporary directory path

  --source-directory|-s                          Source directory path
```

There are two main use cases, namely building a package and building a bundle.

In order to build a package, you must supply source and target directories, the latter in the guise of a lib directory:

    watchful batch --source-directory=es6/ --lib-directory=./lib
    
This will transpile all the JavaScript files in the `es6` directory and place them in the `lib` directory while honouring sub-directories. Note that Watchful is tolerant of leading and trailing delimiters. Nonetheless, it expects paths to be relative ones pointing to folders in the project directory. Relative paths outside of the project directory or any absolute paths will result in errors.

In order to build a bundle, you must supply the source directory and target directories together with an entry file for the bundler. The target directory can be either a temp directory or a lib directory:

    watchful batch --source-directory=es6/ --temp-directory=./tmp --enty-file=main.js

The path to the entry file is taken to be relative to the target directory, not the project directory. You can also optionally supply a path to the bundle file by way of the `--bundle-file` option, otherwise the output is piped to `stdout`. Either the temp or the lib directory can be given as the target directory, by the way, because there may be times when you want to both build a bundle and build a package.

Multiple processes are supported in batch mode, set the `--processes` option to a number greater than 1 to enable them. Be careful not to set this too high. On a modern MacBook the optimal number is only 4 processes. Any more and performance actually deteriorates. Remember that multiple processes are only supported in batch mode where the gains are likely to be significant. In incremental mode, the gains are likely to be in the region of a tenth of a second or even less, and therefore not worth the implementation effort. Also bear in mind that there is an overhead associated with creating more than one process and therefore you will only see gains if transpiling dozens of files rather than just a few.

As already mentioned, it is recommended that you install Watchful as a project dependency rather than globally, then run it with npm scripts.

### Examples

* In this example we build a bundle for an ES6 and [JSX](https://reactjs.org/docs/introducing-jsx.html) application using the default Babel and Browserify tools.

The developer dependencies in the `package.json` file would like something like this:

```
"devDependencies": {
  "@babel/core": "^7.8.6",
  "@babel/plugin-transform-react-jsx": "^7.8.3",
  "@babel/preset-env": "^7.8.6",
  "browserify": "^16.5.0",
  
  ...

  "watchful-cli": "^1.7.0"
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

* In this example we again build a bundle for an ES6 and [JSX](https://reactjs.org/docs/introducing-jsx.html) application but using the SWC and ESBuild tools.

The developer dependencies in the `package.json` file would like something like this:

```
"devDependencies": {
  "@swc/core": "^1.2.47",
  "esbuild": "^0.11.14",
  
  ...

  "watchful-cli": "^1.7.0"
}
```

The `.swcrc` file in the project directory would look something like this:

```
{
    "jsc": {
        "parser": {
            "syntax": "ecmascript",
            "jsx": true
        }
    },
    "module": {
        "type": "commonjs"
    }
}
```

Now for the npm scripts:

```
"scripts": {
  "clean": "rm -rf ./tmp",
  "watchful": "watchful -m -s=./es6 -x=./tmp -e=main.js -b=./public/lib/client.js"--wait=100,
  "batch": "npm run watchful batch -- --release",
  "batch-debug": "npm run watchful batch -- --debug",
  "incremental": "npm run watchful incremental -- --release",
  "incremental-debug": "npm run watchful incremental -- --debug",
  "build": "npm run clean && npm run batch && npm run clean",
  "build-debug": "npm run clean && npm run batch-debug && npm run clean",
  "watch": "npm run clean && npm run batch && npm run incremental",
  "watch-debug": "npm run clean && npm run batch-debug && npm run incremental-debug"
}
```

There are several points worth noting:

* Babel and browserify are the defaults. To make use of SWC and ESBuild, change the `watchful` script as follows:

```
  "watchful": "watchful -mp=4 -r=swc -u=esbuld -s=./es6 -t=./tmp -e=main.js -b=./public/lib/client.js",
```

The number of child processes has also been set to 4 here, but remember that this only improves things for large projects with hundreds of files, otherwise it may actually have a detrimental effect.

* The `clean` script has nothing to do with Watchful. It deletes the `tmp` directory and is used in the build scripts. Note that since the watch scripts have to be killed by the user, there is no opportunity to clean up after watching and consequently the `tmp` directory will remain. It is recommended that you add it to your `.gitignore` file, therefore, or make sure to always build before deployment.

* The `watchful` script invokes Watchful with the requisite paths for the source and temp directories together with the entry and bundle files. The options have been abbreviated. Using a dedicated `watchful` script means that these options only have to be specified once.

* The `batch`, `batch-debug`, `incremental` and `incremental-debug` scripts all make use of the aforementioned `watchful` script, passing it the requisite command plus additional options. The special `--` command tells npm to pass these options verbatim. The `incremental` command is optional and can be left out.

* For a package rather than a bundle, you could remove the call to the final `clean` script from the build scripts; remove the entry and bundle file options from the `watchful` script; and change the temp directory to a lib directory.

* The `wait` option has been set to 100 milliseconds. Usually this can be left at the default, which is 0 milliseconds. However, if you find that not all of the transformations are being completed before bundling starts, you may want to experiment with this option.
 
## Contact

- james.smith@djalbat.com
