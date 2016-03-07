module.exports = function(n) {
  var factors = [];
  for (i = n-1; i > 0; i--) {
    if (i % 2 === 0 && i % 7 === 0) {
      factors.push(i);
    }
  }
  return factors;
};
