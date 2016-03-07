var high_low = require('../high_low');
var assert = require('assert');

describe("high_low", function(){

    it("should return [5, 1] when high_low called with numlist [3,2,5,4,1]", function(){
        var result = high_low(3,2,5,4,1);
        assert.deepEqual(result, [5, 1])
    });

});
