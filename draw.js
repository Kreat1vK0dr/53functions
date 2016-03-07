module.exports = function(list) {
// NOTE: IN THIS CASE they're asking for ONE parameter that contains a list of strings (i.e. an ARRAY).
// var list = ['hey','there'];
  list.forEach(function(string){
    console.log( string );
  });
};

//NOTE: UPDATE: RETURN CANNOT PRINT TO SCREEN. THUS BELOW IS INVALID.
//NOTE: In this instance 'drawing' is meant to print each string on a newline by joining with '\n' and using return:

// (a) one long string of words
//     ==> var str = string.split(' ').join('\n');
//       OR: using replace:
//       ==> var str = string.replace(/\s/g, '\n');
//     ==> return str;
// (b) an array of one word strings
//     ==> var str = stringArray.join('\n');
//     ==> return str;
// (c) single word strings as arguments:
//     ==> var strArray = [];
//     ==> for (var string in arguments) {
//             strArray.push(arguments[string]);
//           }
//     ==> var str = stringArray.join('\n');


// OPTION 1: using console.log. BUT this is NOT 'drawing'.
// module.exports = function(list) {
//   list.forEach(function(string){
//     return console.log(string);
//   });
// };
