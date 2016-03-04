module.exports = function(sentence) {
  words = sentence.split(" ");
  var sumLength = words.reduce(function(a,b) {
    return a.length + b.length;
  });
  // var sumLength = 0;
  // words.forEach(function(word) {
  //   sumLength += word.length;
  // });
  return sumLength-1;
};

// [0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );
// [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
//   return previousValue + currentValue;
// }, 10);
