var lowercase_letters = require('../lowercase_letters');

var assert = require('assert');

describe("lowercase_letters", function(){

  it("should return all uppercase letters in a string: e.g. ['e','a','l','l','y'] in 'Really?'.", function(){
      var result = lowercase_letters('Really?');
      assert.deepEqual(result, ['e','a','l','l','y']);

  });

});
