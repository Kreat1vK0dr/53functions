var fibonacci = require('../fibonacci');

var assert = require('assert');

describe("fibonacci", function(){

  it("should return the fibonacci number and sequence corresponding with given 'n' parameter", function(){
      var result = fibonacci(6);
      assert.deepEqual(result, [5, [0,1,1,2,3,5]]);

  });

});
