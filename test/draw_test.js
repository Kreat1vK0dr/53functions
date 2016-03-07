var draw = require('../draw');

var assert = require('assert');

describe("draw", function(){

  it("should print out each string to the screen in the list given as a parameter. ['hey', 'there'] = \n 'hey' \n there", function(){
      var result = draw(['hey', 'there']);
      assert.equal(result, 'hey');

  });

});
