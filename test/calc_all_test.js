var calc_all = require('../calc_all');

var assert = require('assert');

describe("calc_all", function(){

  it("should take in two numbers and a symbol as parameters and perform the appropriate calculation.", function(){
      var result = calc_all(18, 2, '/');
      assert.equal(result, 9);

  });

});
