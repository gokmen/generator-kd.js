# kd.js project generator [![Build Status](https://secure.travis-ci.org/gokmen/generator-kd.js.svg?branch=master)](http://travis-ci.org/gokmen/generator-kd.js)

[Yeoman](http://yeoman.io) generator that scaffolds out a kd.js web project
[kd.js](http://kd.io) framework that we built [Koding](https://koding.com) with it.

![](http://take.ms/2x3kM)

## Features

* Built-in preview server with Browsersync
* Automagically compile Coffeescript
* Automagically compile Stylus
* File watcher for coffee and stylus changes
* Sourcemap support for coffee files
* Production support which uglifies and minifies exported files

For more information on what `generator-kd.js` can do for you, take a look at the [Gulp tasks](https://github.com/gokmen/generator-kd.js/blob/master/app/templates/_package.json) used in our `package.json`.

## Getting Started

```
  $ npm install -g yo generator-kd.js  # install kd generator and yeoman
  $ mkdir awesome-project; cd $_       # create a new project dir, enter it
  $ yo kd.js                           # generates the project and does `npm install`
  $ gulp                               # for building and preview
                                       # if not opens automagically visit
                                       # localhost:9000
```

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
