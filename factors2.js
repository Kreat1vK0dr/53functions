module.exports = function(n) {
  var factorsOfTwo = [];
  for (i = n-1; i > 0; i--) {
    if (i % 2 === 0) {
      factorsOfTwo.push(i);
    }
  }
  return factorsOfTwo;
};
