'use strict'

const chalk = require('chalk')
const Generator = require('yeoman-generator')
const _s = require('underscore.string')

module.exports = class KDGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts)

    this.option('skip-install')
    this.argument('_appname', { type: String, required: false })
  }

  prompting() {
    console.log(require('yeoman-welcome'))

    return this.prompt({
      name: 'appname',
      message: 'What is the name of your awesome kd.js project ?',
      default: this.appname.replace(/\s/g, '-'),
      filter: function(val) {
        return _s.slugify(val)
      },
    }).then(props => {
      this.appname = props.appname
    })
  }

  writing() {
    console.log('')

    let cb = this.async()

    let tpl = {
      appname: this.appname,
      name: this.user.git.name(),
      email: this.user.git.email(),
    }

    let mv = function(from, to) {
      this.fs.move(this.destinationPath(from), this.destinationPath(to))
    }.bind(this)

    this.fs.copyTpl(
      this.templatePath() + '/**/!(*.png|*.ico)', // ignore images
      this.destinationPath(),
      tpl
    )

    this.fs.copy(
      this.templatePath() + '/app/images',
      this.destinationPath() + '/app/images'
    )

    mv('editorconfig', '.editorconfig')
    mv('gitattributes', '.gitattributes')
    mv('gitignore', '.gitignore')
    mv('_package.json', 'package.json')

    cb()
  }

  install() {
    if (this.options['skip-install']) return
    this.installDependencies({
      bower: false,
      callback: function() {
        console.log(
          '\nEverything is ready, run ' +
            chalk.yellow.bold('gulp') +
            ' to see ' +
            chalk.green.bold(this.appname) +
            ' alive!\n'
        )
      }.bind(this),
    })
  }
}
