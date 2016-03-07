module.exports = function(string) {
// var x = function(string) {
  return string.replace(/[! \. \? \s]/g,'').match(/[A-Z]/g).map(function(x) {
      return x.charCodeAt();
        }).reduce(function(prev, curr) {
          return prev + curr;
        });
};

// console.log(x('Look!'));

//OPTION 1.
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
