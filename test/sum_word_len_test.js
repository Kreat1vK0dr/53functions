var sum_word_len = require('../sum_word_len');

var assert = require('assert');

describe("sum_word_len", function(){

    it("should return the sum of the lengths of words in a given sentence", function(){
        var result = sum_word_len('One word.');
        assert.equal(result, 7);

    });

});
