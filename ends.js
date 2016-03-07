module.exports = function(sentence) {
  var max = 0;
  var letter;
  var words = sentence.replace('.','').split(' ');
  var lastLetters = words.reduce(function(memo, word) {
    var length = word.length-1;
    memo[word[length]] = memo[word[length]] ? memo[word[length]] + 1 : 1;
    if (memo[word[length]] > max) {
      max = memo[word[length]];
      letter = word[length];
    }
    return memo;
  }, {});
  return letter;
  // return [letter, max];
};
