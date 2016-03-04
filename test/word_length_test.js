var assert = require('assert');

var Word_Length = require('../word_length');
var word_length = new Word_Length('This is short.');

describe("word_length", function(){

    it("should return the average word length of a given sentence, rounded up", function(){
        var result = word_length.avgUp();
        assert.equal(result, 4);

    });

    it("should return the average word length of a given sentence, rounded down", function(){
        var result = word_length.avgDown();
        assert.equal(result, 3);

    });

});
