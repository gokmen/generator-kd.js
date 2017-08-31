kd = require 'kd.js'

do ->

  view = new kd.View
    cssClass  : 'hello-view center-all'
    pistachio : 'Hello {{#(appname)}} kd.js project!'
  ,
    appname   : '<%= appname %>'

  # add it to DOM
  view.appendToDomBody()
