module.exports = function(n){
  var sum = 0;
  if (n!==0) {
    for (var i=1; i<n+1;i++) {
      sum += i;
    }
  } else {
    sum = 0;
  }
    return sum;
};
