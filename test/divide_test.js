var divide = require('../divide');

var assert = require('assert');

describe("divide", function(){

  it("should take in two numbers as parameters and divide them.", function(){
      var result = divide(18, 2);
      assert.equal(result, 9);

  });

});
