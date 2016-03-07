module.exports = function(number) {
// var x = function(number) {
  var n = number - 1;
  var fib = [0,1];
  var nextfib = 0;
  var fibn = Math.round( (1/Math.sqrt(5)) * ((Math.pow(((1 + Math.sqrt(5))/2), n)) - Math.pow(((1 - Math.sqrt(5))/2), n)));
    for (var i = 0; i < n -1 ; i++) {
      nextfib = fib[i] + fib[i+1];
      console.log(nextfib);
      fib.push(nextfib);
    }
  return [fibn, fib];
};

// console.log(x(5));
// x(5);
