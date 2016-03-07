var calculator = require('../calc_chain'); //This is not defining 'new Calc' its GETTING the module.
//NOTE: After 'getting' the module, you still need to 'call' it/instantiate it.
var assert = require('assert');

describe("Calculator", function(){

  it("should be a chainable function that can add, subtract, multiply and divide.", function(){
      var result = calculator().add(5, 3).multiply(2).divide(4).subtract(2).value();
      assert.equal(result, 2);

  });

});

// console.log(typeof calculator.add(5,3).value());
