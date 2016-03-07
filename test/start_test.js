var start = require('../start');

var assert = require('assert');

describe("start", function(){

  it("should return the letter most words start with. Should return 'i' if sentence is 'This is it'.", function(){
      var result = start('This is it.');
      assert.equal(result, 'i');

  });

});
