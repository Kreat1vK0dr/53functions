module.exports = function(sentence) {
// var sentence = "Let\'s do this today.";
  var words = sentence.replace('.','').split(' ');
  // console.log(words);
  var map = function() {
      var m = {};
      words.forEach(function(word){
          // console.log (word);
          if (m[word[0]]===undefined) {
            m[word[0]] = [word];
          } else {
            m[word[0]].push(word);
          }
      });
      return m;
  };

return map();
};

// console.log(map()['t']);
// var x = [1,2,3];
// console.log(typeof x);
