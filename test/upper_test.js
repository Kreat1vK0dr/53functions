var assert = require('assert');
var upper = require('../upper');
//var upper = require('../upper');

describe("upper", function(){

    it("should uppercase 'ZEBRAS' ", function(){
      var result = upper('zebras');
        //TODO: call your function and use assert to check the result
        //var result = upper("zebras");
        assert.equal(result, "ZEBRAS");
    });

});
