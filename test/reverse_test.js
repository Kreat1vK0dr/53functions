var reverse = require('../reverse');
var assert = require('assert');

describe('reverse', function() {

  it('should return the reverse of a string', function() {
    var result = reverse('zebra');
    assert.equal(result, 'arbez');
  });

});
