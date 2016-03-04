var shortest_word = require('../shortest_word');

var assert = require('assert');

describe("shortest_word", function(){

    it("should return the shortest word in a given sentence", function(){
        var result = shortest_word('This sentence has five words.').word;
        assert.equal(result, 'has');

    });

    it("should return the length of the shortest word in a given sentence", function(){
        var result = shortest_word('This sentence has five words.').length;
        assert.equal(result, 3);

    });

});
