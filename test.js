/**
 * native-or-anothor <https://github.com/tunnckoCore/native-or-anothor>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert')
var Promize = null;

describe('require("native-or-anothor")', function () {
  it('should return a Promise implementation', function () {
    Promize = require('./index');

    return new Promize(function (resolve) {
      resolve(1)
    }).then(function (val) {
      assert.equal(val, 1)
    })
  })
})

describe('require("native-or-anothor/promise")', function () {
  it('should return a Promise implementation', function () {
    Promize = require('./promise')

    return new Promize(function (resolve) {
      resolve(1)
    }).then(function (val) {
      assert.equal(val, 1)
    })
  })
})
