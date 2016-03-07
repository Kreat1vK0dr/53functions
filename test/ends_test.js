var ends = require('../ends');

var assert = require('assert');

describe("ends", function(){

  it("should return the letter most words end with. Should return 's' if sentence is 'This is it'.", function(){
      var result = ends('This is it.');
      assert.equal(result, 's');

  });

});
