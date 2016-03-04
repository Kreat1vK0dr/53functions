module.exports = function (sentence) {
// var sentence = "This is whatever is takes to be okay";
  var words = sentence.split(" ").map(function(word){
    return {
      word : word,
      length : word.length
    }
  });
    var shortestWord = words.reduce(function(a,b) {
    return (a.length < b.length) ? a : b;
  });
  return shortestWord;
};

  // console.log(longestWord);
