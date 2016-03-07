module.exports = function(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};
