var count_words = require('../count_words');

var assert = require('assert');

describe("count_words", function(){

    it("should return the number of words in a given sentence", function(){
        var result = count_words('This sentence has five words.');
        assert.equal(result, 5);

    });

});
