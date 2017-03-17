/*!
 * native-or-another <https://github.com/tunnckoCore/native-or-another>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var semver = require('semver')
var Promize = require('native-promise')
var extend = require('extend-shallow')
var tryCatch = require('try-catch-callback')

var commonPromiseLibs = [
  'es6-promise',
  'promise',
  'native-promise-only',
  'bluebird',
  'rsvp',
  'when',
  'q',
  'pinkie',
  'lie',
  'vow'
]

module.exports = function register (opts) {
  // won't load native Promise if < v0.12, since it is buggy
  /* istanbul ignore next */
  if (Promize && semver.gte(process.version, '0.12.0')) {
    Promize.___nativePromise = true
    return Promize
  }
  if (typeof opts === 'function') {
    opts = { Promise: opts, global: opts.global }
  }

  var options = extend({ global: true }, opts)
  var PromiseCtor = options.Promise || tryLoadCommon()
  PromiseCtor.___customPromise = true

  if (options.global === false) {
    return PromiseCtor
  }

  global.Promise = PromiseCtor
  return global.Promise
}

function tryLoadCommon () {
  var len = commonPromiseLibs.length
  var i = -1

  while (i++ < len) {
    var lib = commonPromiseLibs[i]
    var ret = tryCatch(function () {
      var ret = require(lib)
      return ret.Promise || ret
    }, { return: true })

    if (ret instanceof Error) {
      if ((i + 1) < len) {
        continue
      } else {
        var msg = [
          'No native Promise support nor other promise were found.',
          'These promise libraries are supported by default: ' + commonPromiseLibs.join(', ') + '.',
          'This means that if one of them is installed it will be loaded automatically.',
          'Otherwise you should give a promise implementation through opts.Promise!'
        ].join(' ')

        throw new Error(msg)
      }
    } else {
      return ret
    }
  }
}

module.exports.commonPromiseLibs = commonPromiseLibs
