/**
 * native-or-anothor <https://github.com/tunnckoCore/native-or-anothor>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var PROMISE_LIB = 'micropromise';
module.exports = global.Promise

if (!module.exports) {
  try {
    module.exports = require(PROMISE_LIB)
  } catch (_) {}
}
