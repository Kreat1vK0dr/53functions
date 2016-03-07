module.exports = function(sentence) {
  // var sentence = "Let\'s do this today.";
  var words = sentence.replace('.','').split(' ');
  // console.log(words);
  var map = function() {
      var m = {};
      words.forEach(function(word){

          // console.log (word);

        // m[word[0]] = m[word[0]] ? m[word[0]].push(word) : [word]; //DOESN'T WORK BECAUSE m[word[0]].push(word) is not the same as m[word[0]] = m[word[0]].push

          if (!m[word[0]]) {
            m[word[0]] = [word];
          } else {
            m[word[0]].push(word);
          }
      });
    return m;
  };

return map();
};

// console.log(m);

// console.log(map());
// console.log(map()['t']);
// var x = [1,2,3];
// console.log(typeof x);
