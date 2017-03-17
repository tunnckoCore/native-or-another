# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.0.1"></a>
## [5.0.1](https://github.com/tunnckocore/native-or-another/compare/v5.0.0...v5.0.1) (2017-03-17)


### Bug Fixes

* **libs:** fix for q-like promise libs ([a6152b8](https://github.com/tunnckocore/native-or-another/commit/a6152b8))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/tunnckocore/native-or-another/compare/v4.0.0...v5.0.0) (2017-03-17)


### Bug Fixes

* **package:** add keywords ([c45e56f](https://github.com/tunnckocore/native-or-another/commit/c45e56f))
* **readme:** update related list ([0badd4b](https://github.com/tunnckocore/native-or-another/commit/0badd4b))


### Code Refactoring

* **rewrite:** update boilerplate and rethink it ([00e29b8](https://github.com/tunnckocore/native-or-another/commit/00e29b8))


### BREAKING CHANGES

* **rewrite:** main export now expose a Promise constructor; use native-or-another/register if you
want to load custom promise for node < 0.12; register expects an "opts" object with "Promise" and
"global" properties; if opts.global is false, it won't attach/add promise to global.Promise - this
is enabled by default





## v4.0.0 - 2016-08-25
- Release v4.0.0 / npm@v4.0.0
- update travis builds, update docs
- replace `assertit` it with `mukla`
- breaking: remove `bluebird` from dependencies

Throws if not native Promise support and not `Promize` were given and not `bluebird` were found. So if you wanna have Promise in `node@0.10` or such, you should install `bluebird` as `devDependency` or to pass some Promise implementation to that package.

It is removed, because `bluebird` is huge as `kb` and it will be there always, no matter if your environment have support for native Promise.

## v3.0.2 - 2016-01-13
- Release v3.0.2 / npm@v3.0.2
- greenkeeper update all deps

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