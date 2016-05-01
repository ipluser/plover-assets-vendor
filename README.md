# plover-assets-vendor


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]


让普通模块直接作为plover前端模块使用


## 使用

1\. 安装此插件

```
npm install --save plover-assets-vendor
```


2\. 安装需要使用的前端模块


```
npm install --save jquery
npm install --save bootstrap
```


3\. 在`package.json`中添加以下配置


```
"ploverAssetsVendor": [
  "jquery",
  "bootstrap"
]
```

4\. 然后在应用中就可以使用了


```
<script src="{{assets.js('jquery:dist/jquery.min.js')}}"></script>
```


[npm-image]: https://img.shields.io/npm/v/plover-assets-vendor.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/plover-assets-vendor
[travis-image]: https://img.shields.io/travis/plover-modules/plover-assets-vendor/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/plover-modules/plover-assets-vendor
[coveralls-image]: https://img.shields.io/codecov/c/github/plover-modules/plover-assets-vendor.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/plover-modules/plover-assets-vendor?branch=master

