var add = require('../add');

var assert = require('assert');

describe("add", function(){

  it("should take in two numbers as parameters and add them.", function(){
      var result = add(4, 5);
      assert.equal(result, 9);

  });

});
