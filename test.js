/*!
 * native-or-another <https://github.com/tunnckoCore/native-or-another>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var register = require('./register')
var semver = require('semver')
var spawn = require('cross-spawn')

if (semver.lt(process.version, '0.12.0')) {
  // remove installed promise libs
  // from the used devDependencies
  spawn.sync('npm', ['uninstall'].concat(register.commonPromiseLibs))

  test('should < 0.12 - register() throw an Error if < 0.12 and cannot autoload other', function (done) {
    function fixture () {
      register()
    }

    test.throws(fixture, Error)
    test.throws(fixture, /No native Promise support nor other promise were found/)
    done()
  })
  test('should < 0.12 - register({ Promise: fn, global: false }) custom promise', function (done) {
    var CustomPromise = function Custom () {}
    var PromizeCtor = register({ Promise: CustomPromise, global: false })

    test.strictEqual(typeof PromizeCtor, 'function')
    test.strictEqual(typeof Promise, 'undefined')
    done()
  })
  test('should < 0.12 - register as global.Promise, when `global: true` (default)', function (done) {
    var Custom = function () {}
    var Promizzzeee = register(Custom)

    test.strictEqual(typeof Promizzzeee, 'function')
    test.strictEqual(typeof Promise, 'function')
    test.strictEqual(Promizzzeee.___customPromise, true)
    test.strictEqual(Promise.___customPromise, true)
    done()
  })
  test('should < 0.12 - autoload one of common libraries if installed', function (done) {
    spawn.sync('npm', ['install', 'bluebird'])
    var Promize = require('./index')

    test.strictEqual(typeof Promize, 'function')
    test.strictEqual(Promize.___customPromise, true)

    var promise = new Promize(function (resolve) {
      resolve(111)
    })

    // bluebird specific, not part of the spec
    test.strictEqual(typeof Promize.mapSeries, 'function')
    test.strictEqual(typeof promise.mapSeries, 'function')

    promise.then(function (num) {
      test.strictEqual(num, 111)
      spawn.sync('npm', ['uninstall', 'bluebird'])
      done()
    }, done).catch(done)
  })
} else {
  // re-install common libs,
  // because we uninstalled them for the other tests
  // so some of the npm scripts may fail if we don't do that here
  spawn.sync('npm', ['install'].concat(register.commonPromiseLibs))

  test('should register() always return native Promise in node 0.12 and above', function (done) {
    var PromiseCtor = register({ global: false })
    test.strictEqual(typeof PromiseCtor, 'function')

    var promise = new PromiseCtor(function (resolve, reject) {
      resolve(123)
    })
    promise.then(function (res) {
      test.strictEqual(res, 123)
      test.strictEqual(PromiseCtor.___nativePromise, true)
      done()
    }, done).catch(done)
  })
  test('should main export expose native Promise always, even when custom given', function (done) {
    var Promize = require('./index')
    test.strictEqual(typeof Promize, 'function')
    test.strictEqual(typeof Promize.mapSeries, 'undefined')
    done()
  })
}
