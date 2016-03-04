var longest_word = require('../longest_word');

var assert = require('assert');

describe("longest_word", function(){

    it("should return the longest word in a given sentence", function(){
        var result = longest_word('This sentence has five words.').word;
        assert.equal(result, 'sentence');

    });

    it("should return the length of the longest word in a given sentence", function(){
        var result = longest_word('This sentence has five words.').length;
        assert.equal(result, 8);

    });

});
