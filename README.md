# plover-assets-vendor


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]


【插件】让npm模块直接作为前端模块使用


## Installing

```
npm install --save plover-assets-vendor
```

## Usage

使用`npm`安装第三方资源包：

```sh
npm install --save jquery
```

在`package.json`中添加配置信息：


```json
"ploverAssetsVendor": [
  "jquery"
]
```

引入第三方资源：

```html
<script src="{{assets.js('jquery:dist/jquery.min.js')}}"></script>
```


[npm-image]: https://img.shields.io/npm/v/plover-assets-vendor.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/plover-assets-vendor
[travis-image]: https://img.shields.io/travis/plover-modules/plover-assets-vendor/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/plover-modules/plover-assets-vendor
[coveralls-image]: https://img.shields.io/codecov/c/github/plover-modules/plover-assets-vendor.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/plover-modules/plover-assets-vendor?branch=master

