var assert = require('assert');
var Multiples = require('../multiples');
var multiples = new Multiples(3);


describe("multiples", function(){

    it("Count should return next number of the multiple", function(){
      var result = multiples.count().value();
        assert.equal(result, 6);
    });

    it("list should return a list of all the multiples counted", function(){
      var result = multiples.list();
        assert.deepEqual(result, [3,6]);
    });

});
