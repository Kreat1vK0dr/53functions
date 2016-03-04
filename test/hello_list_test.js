var hello_list = require('../hello_list');
var assert = require('assert');

describe('hello_list', function() {

  it('should return a list of "hello world"s according to the number specified', function() {
    var result = hello_list(3);
    assert.deepEqual(result, ['hello world','hello world','hello world']);
  });

});
