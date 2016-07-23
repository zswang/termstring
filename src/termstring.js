(function(exportName) {

  /*<remove>*/
  'use strict';
  /*</remove>*/

  var exports = {};

  /*<jdists encoding="ejs" data="../package.json">*/
  /**
   * @file <%- name %>
   *
   * <%- description %>
   * @author
       <% (author instanceof Array ? author : [author]).forEach(function (item) { %>
   *   <%- item.name %> (<%- item.url %>)
       <% }); %>
   * @version <%- version %>
       <% var now = new Date() %>
   * @date <%- [
        now.getFullYear(),
        now.getMonth() + 101,
        now.getDate() + 100
      ].join('-').replace(/-1/g, '-') %>
   */
  /*</jdists>*/

  /*<function name="termstring_stringify">*/
  /**
   * 条件数据格式化
   *
   * @param {Object} data 条件数据
   * @return {String} 返回格式化字符串
   * @example stringify():base
     ```js
     var data = {a: 1, b: 2, c: 3};
     console.log(termstring.stringify(data));
     // > [a]1[b]2[c]3
     ```
   * @example stringify():boundary
     ```js
     var data = {a:"", b: 2, c:""};
     console.log(termstring.stringify(data));
     // > [a][b]2[c]
     ```
   */
  function termstring_stringify(data) {
    var result = '';
    Object.keys(data).forEach(function(key) {
      result += '[' + key + ']' + data[key];
    });
    return result;
  }
  /*</function>*/
  exports.stringify = termstring_stringify;

  /*<function name="termstring_parse">*/
  /**
   * 解析条件数据
   *
   * @param {String} text 条件格式化字符串
   * @return {Object} 返回条件数据
   * @example parse():base
     ```js
     console.log(JSON.stringify(termstring.parse('[a]1[b]2[c]3')));
     // > {"a":"1","b":"2","c":"3"}
     ```
   * @example parse():boundary
     ```js
     console.log(JSON.stringify(termstring.parse('[a][b]2[c]')));
     // > {"a":"","b":"2","c":""}
     ```
   */
  function termstring_parse(text) {
    var result = {};
    String(text).replace(/\[(.*?)\]([^\[\]]*)/g, function(all, key, value) {
      result[key] = value;
    });
    return result;
  }
  /*</function>*/
  exports.parse = termstring_parse;

  /* istanbul ignore next */
  if (typeof define === 'function') {
    if (define.amd) {
      define(function () {
        return exports;
      });
    }
  }
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  }
  else {
    window[exportName] = exports;
  }

})('termstring');