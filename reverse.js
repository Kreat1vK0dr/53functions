module.exports = function(string) {
  // var string = 'zebra';
  return string.split('').reverse().join('');
};

//OPTION 2 : longer way round.
// var str = '';
// for (var i = string.length-1; i>=0;i--) {
//   str += string[i];
// }
