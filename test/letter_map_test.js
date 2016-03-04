var letter_map = require('../letter_map');

var assert = require('assert');

describe("letter_map", function(){

  it("should return an object map", function(){
      var result = typeof letter_map('This is it.');
      assert.equal(result, 'object');

  });

    it("should have the first letter as a key value for the word", function(){
        var result = letter_map('This is it.')['T'];
        assert.deepEqual(result, ['This']);

    });
    it("should return an array of words that fit the key value", function(){
        var result = letter_map('This is it.')['i'];
        assert.deepEqual(result, ['is', 'it']);

    });

    it("should return {T: ['This'], i: ['is', 'it']} for a string = 'This is it'", function(){
        var result = letter_map('This is it.');
        assert.deepEqual(result, {T: ['This'], i: ['is', 'it']});

    });


});
