// module.exports = function(sentence) {
var sentence = "Let's do this today.";
var mArray = [];

var firstLetters = sentence.split(' ').map(function(word) {
  return word[0];
});
// console.log(firstLetters);

var m = {};
for (var i = 0; i < firstLetters.length; i++) {

  if (m[firstLetters[i]] === undefined) {
    m[firstLetters[i]] = 1;
    // mArray.push(m[firstLetters[i]]);
    for (var j = i + 1; j < firstLetters.length; j++) {
      if (firstLetters[j] === firstLetters[i]) {
        m[firstLetters[i]] += 1;
        mArray.push(m[firstLetters[i]]);
      }
    }
  }
}
// console.log(mArray);

var mostUsed = mArray.reduce(function(a, b) {
  return (a < b) ? b : a;
});

var mostUsedLetter = function() {
  for (var i in m) {
    if (m[i] === mostUsed) {
      return i;
    }
  }
};

// };

console.log(mostUsedLetter());
