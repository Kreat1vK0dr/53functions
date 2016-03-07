var ascii_params = require('../ascii_params');

var assert = require('assert');

describe("ascii_params", function(){

  it("should return the sum of all ascii codes for all letters in the word", function(){
      var result = ascii_params('Look!');
      assert.equal(result, 76);

  });

});
