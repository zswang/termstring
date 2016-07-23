termstring 条件字符串处理
-------

# [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

## 背景

生成比较直观的键值字符串用。

## 示例

### 转换前

```js
termstring.stringify(
  {
    "a": 1,
    "b": 2,
    "c": 3,
  }
);
```

### 转换后

```js
"[a]1[b]2[c]3"
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://npmjs.org/package/termstring
[npm-image]: https://badge.fury.io/js/termstring.svg
[travis-url]: https://travis-ci.org/zswang/termstring
[travis-image]: https://travis-ci.org/zswang/termstring.svg?branch=master
[coverage-url]: https://coveralls.io/github/zswang/termstring?branch=master
[coverage-image]: https://coveralls.io/repos/zswang/termstring/badge.svg?branch=master&service=github
