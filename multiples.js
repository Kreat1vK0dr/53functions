module.exports = function(n) {

  var initval = n;

  this.result = initval;

  var array = [n];

  this.list = function() {
    return array;
  };

  this.count = function() {
    this.result += this.result;
    array.push(this.result);
    return this;
  };

this.value = function() {
  return this.result;
}

};

// module.exports = function() {
//   return new Multiples;
// }
