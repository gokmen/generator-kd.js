path = require 'path'
{ Plugin: ShakePlugin } = require('webpack-common-shake')

paths = require './paths'

relative = (p) -> path.resolve(__dirname, p)

module.exports =
  entry: paths.scripts.source
  output:
    path: path.resolve(__dirname, paths.scripts.destination)
    filename: 'bundle.js'

  module:
    rules: [
      test: /\.coffee$/
      use: [
        loader: 'coffee-loader'
      ]
    ,
      test: /[\/\\]node_modules[\/\\]jquery-mousewheel[\/\\]jquery\.mousewheel\.js$/
      use: [
        loader: 'imports-loader?define=>false'
      ]
    ,
      test: require.resolve('dateformat')
      use: [
        loader: 'imports-loader?define=>false'
      ]
    ,
      test: require.resolve('pluralize')
      use: [
        loader: 'imports-loader?define=>false'
      ]
    ]

  plugins: [ new ShakePlugin() ]
