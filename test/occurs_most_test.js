var occurs_most = require('../occurs_most');

var assert = require('assert');

describe("occurs_most", function(){

  it("should return the letter that occurs the most. Should return 'a' if sentence is 'Have a lovely day'.", function(){
      var result = occurs_most('Have a lovely day.');
      assert.equal(result, 'a');

  });

});
