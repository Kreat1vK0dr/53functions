var factorial = require('../factorial');

var assert = require('assert');

describe("factorial", function(){

  it("should return the factorial of a given parameter. (5) should = 120", function(){
      var result = factorial(5);
      assert.equal(result, 120);

  });

});
