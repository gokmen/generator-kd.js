kd = require 'kd.js'

do ->

  view = new kd.View
    cssClass  : 'hello-view center-all'
    pistachio : '''
      <p>
        Hello {{#(appname)}} kd.js project!
      </p>
    '''
  ,
    appname   : '<%= appname %>'

  # add it to DOM
  view.appendToDomBody()
