module.exports = function(sentence) {
// var sentence = 'Have a lovely day.'
  var max = 0;
  var letter;
  var letters = sentence.replace(/[\W \s]/g,'').split('');
  var letterUsage = letters.reduce(function(memo, lett) {
    memo[lett] = memo[lett] ? memo[lett] + 1 : 1;
      if (memo[lett] > max) {
        max = memo[lett];
        letter = lett;
      }
      return memo;
  }, {});
  return letter;
  return [letter, max];
};

// console.log(letters);
// console.log(letter);
// console.log(max);
