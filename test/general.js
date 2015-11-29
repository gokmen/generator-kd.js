'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('general', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withOptions({'skip-install': true})
      .withPrompts({features: []})
      .on('end', done);
  });

  // not testing the actual run of generators yet
  it('can be required without throwing', function () {
    this.app = require('../app');
  });

  it('creates expected files', function () {
    assert.file([
      'package.json',
      'LICENSE',
      'README.md',
      'app/index.html',
      'app/src/app.coffee',
      'app/styl/app.styl',
      'gulpfile.coffee',
      'app/images/apple-touch-icon.png',
      'app/images/favicon.ico',
      '.editorconfig',
      '.gitattributes',
      '.gitignore'
    ]);
  });
});