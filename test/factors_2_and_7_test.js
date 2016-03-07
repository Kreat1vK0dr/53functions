var factors_2_and_7 = require('../factors_2_and_7');

var assert = require('assert');

describe("factors_2_and_7", function(){

  it("should return all the numbers that are factors of 2 AND 7 and less than the given parameter. (15) should return [14]", function(){
      var result = factors_2_and_7(15);
      assert.deepEqual(result, [14]);

  });

});
