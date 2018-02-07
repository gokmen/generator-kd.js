# kd.js project generator

[![Build Status](https://secure.travis-ci.org/gokmen/generator-kd.js.svg?branch=master)](http://travis-ci.org/gokmen/generator-kd.js)
[![NPM version](https://img.shields.io/npm/v/generator-kd.js.svg?style=flat-square)](https://www.npmjs.com/package/generator-kd.js)

[Yeoman](http://yeoman.io) generator that scaffolds out a kd.js web project for [kd.js](http://kd.io) framework that we built [Koding](https://koding.com) with it.

<img width="842" alt="kd.js generator for Yeoman" src="https://cloud.githubusercontent.com/assets/42368/26320965/bda98c9c-3ed9-11e7-8a8d-dcdf87bd0824.png">

<img width="1642" alt="A generated kd.js project in action" src="https://cloud.githubusercontent.com/assets/42368/26320923/95ad285c-3ed9-11e7-9a52-33d29aad7158.png">

## Features

* **(new)** Auto created tests with Mocha and Puppeteer 
* **(new)** Serving kd.js with vendoring from a separate file
* **(new)** File watcher for coffee, stylus and test suite changes
* **(new)** Support for re-create generated files w/ Yeoman 2.0
* **(new)** Npm helper scripts covers gulp tasks *~no need to install global gulp*
* Built-in preview server with Browsersync
* Automagically compile Coffeescript
* Automagically compile Stylus
* Sourcemap support for coffee files
* Production support which uglifies and minifies exported files

For more information on what `generator-kd.js` can do for you, take a look at the [Gulp tasks](https://github.com/gokmen/generator-kd.js/blob/master/app/templates/_package.json) used in our `package.json`.

## Getting Started

```
  $ npm install -g yo generator-kd.js       # install kd generator and yeoman
  $ mkdir awesome-project; cd $_            # create a new project dir, enter it
  $ yo kd.js                                # generates the project and runs `npm install`
  $ npm start                               # for building and preview
                                            # if not opens automagically visit
                                            # [localhost:9000](http://localhost:9000)
```

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
