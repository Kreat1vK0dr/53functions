var assert = require('assert');
var dice_rolls = require('../dice_rolls');


describe("upper", function(){

    it("should return 3 dicerolls for a given parameter of '3'", function(){
      var result = dice_rolls(3).length;
        assert.equal(result, 3);
    });

});
