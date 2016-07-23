var termstring = require('../');


describe("src/termstring.js", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("stringify():base", function () {
    examplejs_printLines = [];
     var data = {a: 1, b: 2, c: 3};
     examplejs_print(termstring.stringify(data));
     assert.equal(examplejs_printLines.join("\n"), "[a]1[b]2[c]3"); examplejs_printLines = [];
  });
          
  it("stringify():boundary", function () {
    examplejs_printLines = [];
     var data = {a:"", b: 2, c:""};
     examplejs_print(termstring.stringify(data));
     assert.equal(examplejs_printLines.join("\n"), "[a][b]2[c]"); examplejs_printLines = [];
  });
          
  it("parse():base", function () {
    examplejs_printLines = [];
     examplejs_print(JSON.stringify(termstring.parse('[a]1[b]2[c]3')));
     assert.equal(examplejs_printLines.join("\n"), "{\"a\":\"1\",\"b\":\"2\",\"c\":\"3\"}"); examplejs_printLines = [];
  });
          
  it("parse():boundary", function () {
    examplejs_printLines = [];
     examplejs_print(JSON.stringify(termstring.parse('[a][b]2[c]')));
     assert.equal(examplejs_printLines.join("\n"), "{\"a\":\"\",\"b\":\"2\",\"c\":\"\"}"); examplejs_printLines = [];
  });
          
});
         