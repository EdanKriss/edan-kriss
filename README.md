# Getting Started

This project represents the evolution of my first real web development project: my own personal portfolio.
Starting with some scaffold code back in 2017, I decided to self-teach by doing.
The first incarnations were a standard javascript series of webpages composed with javascript/html/scss, with GULP as the build tool for bundling the javascript and transpiling the SCSS to CSS. A manual deployment process was used, where I took the built files, and uploaded them to a managed cloud provider so I didnt have to worry about the details of serving web content (which I did not grasp at the time).

Over time, the project undergone changes:
- migrated to Webpack build/development process
- removed cumbersome native dependencies, allowing me to more easily develop on MacOS/Linux as well as Windows
- migrated the front end code to use React/Redux
- added optional scripts to build server component as a Docker container for easy deployment


## To build project:
```
// install dependencies, and build webpack bundle with postinstall
$ npm install
```
