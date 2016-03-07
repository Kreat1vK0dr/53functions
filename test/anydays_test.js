var anydays = require('../anydays');

var assert = require('assert');

describe("anydays", function(){

  it("should take a year and a day (string) as a parameter and return the number of that day occuring in that year.", function(){
      var result = anydays(2016, 'thursday');
      assert.equal(result, 'Thursdays in year : 52');

  });

});
