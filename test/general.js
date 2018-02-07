'use strict'

const path = require('path')
const helpers = require('yeoman-test')
const assert = require('yeoman-assert')

describe('general', () => {
  before(function(done) {
    helpers
      .run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withOptions({ 'skip-install': true })
      .withPrompts({ features: [] })
      .on('end', done)
  })

  // not testing the actual run of generators yet
  it('can be required without throwing', () => {
    this.app = require('../app')
  })

  it('creates expected files', () => {
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
      'test/bootstrap.coffee',
      'test/main.spec.coffee',
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
    ])
  })
})
