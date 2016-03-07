var uppercase_letters = require('../uppercase_letters');

var assert = require('assert');

describe("uppercase_letters", function(){

  it("should return all uppercase letters in a string: e.g. ['T', 'J', 'D'] in 'This looks like a Jane Doe'.", function(){
      var result = uppercase_letters('This looks like a Jane Doe');
      assert.deepEqual(result, ['T', 'J', 'D']);

  });

});
