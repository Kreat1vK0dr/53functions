module.exports = function(string) {
// var x = function(string) {
return string.replace(/[! \. \s]/g,'').match(/[A-Z]/g).map(function(x) {
    return x.charCodeAt();
      }).reduce(function(prev, curr) {
        return prev + curr;
      });
};

//OPTION 2 : using split and filter (with an if function) instead of match. LONG WAY ROUND.
//   return string.replace(/[! \. \s]/g,'').split('').filter(function(letter) {
//     if (letter === letter.toUpperCase()) {
//     return letter;
//     }
//   }).map(function(x) {
//       return x.charCodeAt();
//         }).reduce(function(prev, curr) {
//           return prev + curr;
//         });
// };

// console.log(x('There is Jane. Oh look! Theres Steve and Gary!'))
