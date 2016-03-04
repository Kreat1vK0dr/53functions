var avg = require('../avg');
var assert = require('assert');

describe('avg_test', function() {

  it('should return the average length of a word in a given sentence, rounded up', function() {
    var result = avg("This is short");
    assert.equal(result, 4);
  });
});
