var ascii_upper = require('../ascii_upper');

var assert = require('assert');

describe("ascii_upper", function(){

  it("should return the sum of all ascii codes for Upper case letters", function(){
      var result = ascii_upper('There is Jane. Oh look! Theres Steve and Gary!');
      assert.equal(result, 475);

  });

});
