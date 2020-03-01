# Watchful-CLI

Incremental builds with bundling.

Watchful leverages [Babel](https://babeljs.io/) and [Browserify](http://browserify.org/) to provide a straightforward build tool that supports incremental transpilation together with bundling. It has a batch mode and a default watch mode. In the latter mode it will only transpile files that have been added or changed, which can improve build times considerably.

### Why aren't Babel and Browserify included as dependencies?

Babel presets and plugins require [@babel/core](https://babeljs.io/docs/en/babel-core) as a peer dependency, so you would have to include it in your project anyway. And since Browserify is optional, there seemed little point in including it as a dependency either. Watchful is designed to run in your project directory and will load the versions of Babel and Browserify it finds in there. This gives you complete freedom over versioning and configuration, Watchful is completely agnostic to both. 

## Contact

- james.smith@djalbat.com
- http://djalbat.com
