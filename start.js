module.exports = function(sentence) {
// var x = function() {
// var sentence = "Let's do this today.";
var max = 0;
var letter;
words = sentence.split(' ');
var firstLetters = words.reduce(function(memo, word) {
  memo[word[0]] = memo[word[0]] ? memo[word[0]] + 1 : 1;
  if (memo[word[0]] > max) {
    max = memo[word[0]];
    letter = word[0];
  }
    return memo;
}, {});
 // return [letter, max];
 return letter;
// var mostused = [letter, max];
};
// console.log(firstLetters);
// console.log(mostused);
