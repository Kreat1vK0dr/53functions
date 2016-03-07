var Mondays = require('../Mondays');

var assert = require('assert');

describe("Calculator", function(){

  it("should take a year as a parameter and return the number of Mondays in occuring in that year.", function(){
      var result = Mondays(2016);
      assert.equal(result, 52);

  });

});
