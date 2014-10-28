# native-or-another [![NPM version][npmjs-shields]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Coveralls][coveralls-shields]][coveralls-url]
> Use either the native Promise or [Micropromise](https://github.com/kaerus-component/uP) for now, may change in the future. If no implementation is found, an error will be thrown.  
Idea from [native-or-bluebird](https://github.com/normalize/native-or-bluebird)

## Install [![Nodei.co stats][npmjs-install]][npmjs-url]
> Install with [npm](https://npmjs.org)

```
$ npm install native-or-another
```

## Usage
```js
var Promise = require('native-or-another');
```

The goal of this library is to be able to eventually remove this line
from your code and use native `Promise`s, allowing you to
to write future-compatible code with ease.
You should install `micropromise` in your libraries for maximum compatibility.

If you do not want an error to be thrown,
`require()` the `Promise` implementation directly.
If no implementation is found, `undefined` will be returned.

```js
var Promise = require('native-or-another/promise');
if (Promise) // do stuff with promises
```

## Tests
> As usual - `npm test` **or** if you have [mocha][mocha-url] globally - `mocha`.

```
$ npm test
```


## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]

**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/native-or-another/graphs/contributors).  
Released under the [`MIT`][license-url] license.



[npmjs-url]: http://npm.im/native-or-another
[npmjs-shields]: http://img.shields.io/npm/v/native-or-another.svg
[npmjs-install]: https://nodei.co/npm/native-or-another.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/native-or-another?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/native-or-another.svg

[license-url]: https://github.com/tunnckoCore/native-or-another/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/native-or-another
[travis-img]: https://travis-ci.org/tunnckoCore/native-or-another.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/native-or-another
[depstat-img]: https://david-dm.org/tunnckoCore/native-or-another.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore

[cobody-url]: https://github.com/tj/co-body
[mocha-url]: https://github.com/tj/mocha
[rawbody-url]: https://github.com/stream-utils/raw-body
[multer-url]: https://github.com/expressjs/multer
[express-url]: https://github.com/strongloop/express
[formidable-url]: https://github.com/felixge/node-formidable
[co-url]: https://github.com/tj/co
[extend-url]: https://github.com/justmoon/node-extend
[csp-report]: https://mathiasbynens.be/notes/csp-reports
