/*!
 * native-or-another <https://github.com/tunnckoCore/native-or-another>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var semver = require('semver')
var getPromise = require('./index')

test('should use native Promise if available, Bluebird otherwise', function (done) {
  var Promize = getPromise()
  var promise = new Promize(function (resolve, reject) {
    resolve(123)
  })

  promise.then(function (res) {
    test.strictEqual(res, 123)
    if (semver.lt(process.version, '0.11.13')) {
      test.strictEqual(Promize.___bluebirdPromise, true)
    }
    done()
  }, done)
})

test('should use given custom promise module', function (done) {
  var Promize = getPromise(require('pinkie'))
  var promise = Promize.resolve(456)

  promise.then(function (res) {
    test.strictEqual(res, 456)
    if (semver.lt(process.version, '0.11.13')) {
      test.strictEqual(Promize.___customPromise, true)
    }
    done()
  }, done)
})
