/*!
 * native-or-another <https://github.com/tunnckoCore/native-or-another>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var semver = require('semver')
var getPromise = require('./index')
var spawnSync = require('cross-spawn').sync

test('should throw err if no `Promise` given and if no `bluebird` installed', function (done) {
  function fixture () {
    return getPromise()
  }

  if (semver.lt(process.version, '0.11.13')) {
    test.throws(fixture, Error)
    test.throws(fixture, /Cannot find module 'bluebird'/)
    return done()
  }

  test.strictEqual(fixture().___nativePromise, true)
  done()
})

test('should use native Promise if available, Bluebird if installed', function (done) {
  var res = spawnSync('npm', ['install', '-D', 'bluebird'])
  /* istanbul ignore next */
  if (res.error) return done(res.error)

  var Promize = getPromise()
  var promise = new Promize(function (resolve, reject) {
    resolve(123)
  })

  return promise.then(function (res) {
    test.strictEqual(res, 123)
    if (semver.lt(process.version, '0.11.13')) {
      test.strictEqual(Promize.___bluebirdPromise, true)
    }
    var proc = spawnSync('npm', ['uninstall', '-D', 'bluebird'])
    done(proc.error)
  }, done)
})

test('should use given custom promise module', function (done) {
  var Promize = getPromise(require('pinkie'))
  var promise = Promize.resolve(456)

  return promise.then(function (res) {
    test.strictEqual(res, 456)
    if (semver.lt(process.version, '0.11.13')) {
      test.strictEqual(Promize.___customPromise, true)
    }
    done()
  }, done)
})

