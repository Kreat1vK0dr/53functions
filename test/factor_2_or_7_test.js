var factors_2_or_7 = require('../factors_2_or_7');

var assert = require('assert');

describe("factors_2_or_7", function(){

  it("should return all the numbers that are factors of 2 OR 7 and less than the given parameter. (8) should return [7,6,4,2]", function(){
      var result = factors_2_or_7(8);
      assert.deepEqual(result, [7, 6, 4, 2]);

  });

});
