/*!
 * native-or-another <https://github.com/tunnckoCore/native-or-another>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var getPromise = require('./index')

test('should use native Promise if available, Bluebird otherwise', function (done) {
  var Promize = getPromise()
  var promise = new Promize(function (resolve, reject) {
    resolve(123)
  })

  promise.then(function (res) {
    test.strictEqual(res, 123)
    done()
  })
})

test('should use given custom promise module', function (done) {
  var Promize = getPromise(require('pinkie'))
  var promise = new Promize(function (resolve, reject) {
    resolve(123)
  })

  promise.then(function (res) {
    test.strictEqual(res, 123)
    test.strictEqual(Promize.___customPromise, true)
    done()
  })
  done()
})
