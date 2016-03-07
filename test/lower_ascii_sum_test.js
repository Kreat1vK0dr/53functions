var lower_ascii_sum = require('../lower_ascii_sum');

var assert = require('assert');

describe("lower_ascii_sum", function(){

  it("should return the sum of all ascii codes for lower case letters", function(){
      var result = lower_ascii_sum('Jane is there.');
      assert.equal(result, 1064);

  });

});
