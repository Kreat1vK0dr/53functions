var diceroll = function() {
  return Math.floor(Math.random() * 7);
};

module.exports = function(n) {
// var x = function(n) {
  var dicerollsMap = {};
  var dicerollsArray = [];
    for (i = 1; i<=n; i++) {
      var roll = diceroll();
      dicerollsMap['Diceroll '+i] = roll;
      dicerollsArray.push('Diceroll '+i+' : '+roll);
    }
    return dicerollsArray;
};

// console.log(x(10));
