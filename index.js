/*!
 * native-or-another <https://github.com/tunnckoCore/native-or-another>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var NativePromise = require('native-promise')

/**
 * Always will expose native `Promise` if available.
 * Otherwise given promise module or Bluebird.
 *
 * **Example**
 *
 * ```js
 * const fs = require('fs')
 * const getPromise = require('native-or-another')
 * const NativeOrBluebird = getPromise()
 * const NativeOrPromise = getPromise(require('promise'))
 * const NativeOrPinkie = getPromise(require('pinkie'))
 * const NativeOrQ = getPromise(require('q'))
 *
 * const promise = new NativeOrBluebird((resolve, reject) => {
 *   fs.readFile('package.json', 'utf-8', (err, res) => {
 *     if (err) return reject(err)
 *     resolve(res)
 *   })
 * })
 *
 * promise.then(data => {
 *   console.log(JSON.parse(data).name)
 *   //=> 'native-or-another'
 * })
 * ```
 *
 * @name   nativeOrAnother
 * @param  {Function} `[Prome]` custom promise module
 * @return {Function} native Promise or another
 * @api public
 */
module.exports = function nativeOrAnother (Prome) {
  if (NativePromise) return NativePromise
  if (typeof Prome === 'function') {
    Prome.___customPromise = true
    return Prome
  }
  Prome = require('bluebird')
  Prome.___bluebirdPromise = true
  return Prome
}
