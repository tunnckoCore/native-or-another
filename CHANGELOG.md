

## v3.0.1 - 2015-09-29
- Release v3.0.1 / npm@v3.0.1
- fix/update tests - ensure properties exists and works on 0.10
- fix changelog (notice added properties are prefixed with **three underscores**)

## v3.0.0 - 2015-09-29
- Release v3.0.0 / npm@v3.0.0
- change prurpose of the library
- refactor and update boilerplate

Basically, because `native-or-bluebird` always try to use `bluebird` first and then fallbacks to native Promise if available. So you don't have ability to get Promise or to provide different promise module than `bluebird`. So you can't get any promise in `0.10` enviroment for example.

So `native-or-another` is here to help and always will give you Promise, no matter what enviroment you use - iojs, 0.10, 0.11 or 0.12 or latest nodejs v4. It always will try to give you native Promsie first, otherwise will give you `bluebird` promise, but **remember, only if you don't give another** promise module like `q` or `promise` or what you want. See the example on README.md file.

You also can check what promise you use. If you use custom promise `Promise` module, the constructor will have property called `___customPromise` (**yes, three underscores**) with `true` value. If you use `Bluebird` you will have property on the constructor `___bluebirdPromise` (**yes, three underscores**) and again with `true` value. Otherwise they won't exist.

## v2.0.0 - 2014-12-21
- Release v2.0.0 / npm@v2.0.0
- change the purpose of library
- now exports deferred object

## v1.0.0 - 2015-10-28
- Release v1.0.0 / npm@v1.0.0
- initial release

## 0.0.0 - 2014-10-28
- Initial commit