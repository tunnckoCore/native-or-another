/**
 * native-or-anothor <https://github.com/tunnckoCore/native-or-anothor>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var PROMISE_LIB = 'micropromise';
module.exports = require('./promise')

/* istanbul ignore next */
if (!module.exports) {
  console.error('The file "%s" requires `Promise`,', module.parent.filename)
  console.error('but neither `%s` nor the native `Promise` implementation were found.', PROMISE_LIB)
  console.error('Please install `%s` yourself.', PROMISE_LIB)
  process.exit(1)
}
