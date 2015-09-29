# [native-or-another][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Always will expose native `Promise` if available, otherwise `Bluebird` but only if you don't give another promise module like `q` or `promise` or what you want.

**Heads up: v3 is here! See the changelog.md**

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i native-or-another --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const getPromise = require('native-or-another')
```

### [nativeOrAnother](./index.js#L44)
> Always will expose native `Promise` if available. Otherwise given promise module or Bluebird.

- `[Prome]` **{Function}** custom promise module    
- `returns` **{Function}** native Promise or another  

**Example**

```js
const fs = require('fs')
const NativeOrBluebird = getPromise()
const NativeOrPromise = getPromise(require('promise'))
const NativeOrPinkie = getPromise(require('pinkie'))
const NativeOrQ = getPromise(require('q'))

const promise = new NativeOrBluebird((resolve, reject) => {
  fs.readFile('package.json', 'utf-8', (err, res) => {
    if (err) return reject(err)
    resolve(res)
  })
})

promise.then(data => {
  console.log(JSON.parse(data).name)
  //=> 'native-or-another'
})
```


## Related
- [always-done](https://github.com/tunnckoCore/always-done): Handles completion and errors of anything!
- [always-promise](https://github.com/tunnckoCore/always-promise): Promisify basically **everything**.
- [always-thunk](https://github.com/tunnckoCore/always-thunk): Create thunk from **anything**, works like `thunkify`. Transforms anything (callbacks, streams, promises, observables, child processes, sync and generator functions) to thunk.
- [redolent](https://github.com/tunnckoCore/redolent): Simple promisify a callback-style function with sane defaults.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/native-or-another/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/native-or-another
[npmjs-img]: https://img.shields.io/npm/v/native-or-another.svg?label=native-or-another

[license-url]: https://github.com/tunnckoCore/native-or-another/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/native-or-another
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/native-or-another.svg

[travis-url]: https://travis-ci.org/tunnckoCore/native-or-another
[travis-img]: https://img.shields.io/travis/tunnckoCore/native-or-another.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/native-or-another
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/native-or-another.svg

[david-url]: https://david-dm.org/tunnckoCore/native-or-another
[david-img]: https://img.shields.io/david/tunnckoCore/native-or-another.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckoCore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckoCore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckoCore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckoCore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckoCore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckoCore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg