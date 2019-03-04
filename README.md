### Getting Started

This project currently requires Node.js version 8, because Gulp, which is used to compile SCSS to CSS, breaks with Node 10.
It is not simply enough to use Node 8 for this step while building the project with another node version, because some of the binaries will break.

Thus, it is recommended to use Node for all steps, until the project is fully migrated from Gulp to Webpack.

To build project:
```
// install dependencies and build webpack bundle
$ npm install 
// compile SCSS
$ npm run gulp
```

Notes on dev server: 
javascript changes will automatically rebuild and show changes in browser, but SCSS 
changes will only automatically rebuild, but require browser refresh
To run dev server, run these commands in separate terminals:
```
$ npm run dev
$ npm run watch
```