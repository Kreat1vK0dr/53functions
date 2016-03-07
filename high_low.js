//SYNTAX TO WAIT FOR (ECMA6 SCRIPT)
// Here ...args represents an inifinite amount of arguments that are automatically put into an array.
// module.exports = function (...args) {
//   var numlist = [Math.max.apply(Math, args), Math.min.apply(Math, args)];
//   return numlist;
// };

//IN THE MEANTIME:

//NOTE: There are TWO options here. OPTION 2 is BETTER.

//OPTION 1 : if given list is an array.
// module.exports = function (list) {
//   var numlist = [Math.max.apply(Math, list), Math.min.apply(Math, list)];
//   return numlist;
// };

//OPTION 2 : if given list is a list of arguments.
module.exports = function() {
// var x = function() {
  var list = [];
  for (var n in arguments) {
    list.push(arguments[n]);
  }
  var numlist = [Math.max.apply(Math, list), Math.min.apply(Math, list)];
  return numlist;
};
// console.log(x(2,4,10,7));
