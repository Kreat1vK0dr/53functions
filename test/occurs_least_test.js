var occurs_least = require('../occurs_least');

var assert = require('assert');

describe("occurs_least", function(){

  it("should return the letter that occurs the least. Should return 'g', 'e', and 'r' if sentence is 'What you gonna do when it rains on a sunny day.'.", function(){
      var result = occurs_least('What you gonna do when it rains on a sunny day.');
      assert.deepEqual(result, ['g','e','r']);

  });

});
