var factors2 = require('../factors2');

var assert = require('assert');

describe("factors2", function(){

  it("should return all the numbers that are factors of 2 and less than the given parameter. (6) should return [4,2]", function(){
      var result = factors2(6);
      assert.deepEqual(result, [4, 2]);

  });

});
