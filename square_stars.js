// USING DRAW;
var draw = require('./draw');

module.exports = function() {
// var stars = function() {
  var list = [];
  for (i = 0; i<4; i++) {
    list.push('* * * *');
  }
  return list;
  draw(list);
};

// WITHOUT DRAW;
// module.exports = function() {
// var stars = function() {
//   for (i = 0; i<4; i++) {
//     console.log('* * * *');
//   }
// };
// stars();
