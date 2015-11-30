'use strict';

var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('_appname', { type: String, required: false });
  },

  _generate: function () {

    console.log('');

    var cb = this.async();

    var tpl = {
      appname: this.appname,
      name: this.user.git.name(),
      email: this.user.git.email(),
    };

    var mv = function (from, to) {
      this.fs.move(this.destinationPath(from), this.destinationPath(to));
    }.bind(this);

    this.fs.copyTpl(
      this.templatePath() + '/**/!(*.png|*.ico)', // ignore images
      this.destinationPath(),
      tpl
    );

    this.fs.copy(
      this.templatePath() + '/app/images',
      this.destinationPath() + '/app/images'
    );

    mv('editorconfig', '.editorconfig');
    mv('gitattributes', '.gitattributes');
    mv('gitignore', '.gitignore');
    mv('_package.json', 'package.json');

    cb();

  },

  init: function () {

    console.log(require('yeoman-welcome'));

    if (this._appname) {
      this.appname = _s.slugify(this._appname);
      this._generate();
    }
    else {
      var cb = this.async();
      this.prompt({
        name: 'appname',
        message: 'What is the name of your awesome kd.js project ?',
        default: this.appname.replace(/\s/g, '-'),
        filter: function (val) {
          return _s.slugify(val);
        }
      }, function (props) {
        this.appname = props.appname;
        this._generate();
      }.bind(this));
    }
  },

  install: function () {
    this.installDependencies({
      bower: false,
      callback: function() {
        console.log (
          '\nEverything is ready, run '+ chalk.yellow.bold('gulp') +
          ' to see ' + chalk.green.bold(this.appname) + ' alive!\n'
        );
      }.bind(this)
    });
  }

});
