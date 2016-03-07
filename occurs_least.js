module.exports = function(sentence) {
// var sentence = 'What you gonna do when it rains on a sunny day.'
//   var letters = sentence.replace(/[\. \s]/g, ''); //.split('');

  //OPTION 1 : returns only one min letter.
  //******************************************************
  // var mapOcc = letters.reduce(function(object, letter) {
  //   object[letter] = object[letter] ? object[letter] + 1 : 1;
  //   return object;
  // }, {});

  //NOTE:
  //Using the inline/shorthand if/else statement below means that I can't push a letter that has the same min into one map.
  //Even though 'r', 'g', and 'e' all have one letter, the code below only return the 'latest' letter with min (i.e. 'r', and not 'g' and 'e').
  //-----------------------------------------------------------

  // var minOcc = Object.keys(map).reduce(function(prev, curr) {
  //   return (map[prev] < map[curr]) ? prev : curr;
  // });

  //-----------------------------------------------------------
  //********************************************************

  //OPTION 2 : returns each min letter.
  //******************************************************
  // var sentence = 'What you gonna do when it rains on a sunny day.'
    var lettersArray = sentence.toLowerCase().replace(/[\W \s]/g, '').split(''); //> [w,h,a,t,y,o,u,g,o,n,n,a,d,o,w,h,e,n,i,t,r,a,i,n,s,o,n,a,s,u,n,n,y,d,a,y];
    var lettersString = lettersArray.join('');  //> [Whatyougonnadowhenitrainsonasunnyday];
    var map = {};
    var countArray = [];
    lettersArray.forEach(function(letter) {
    var count = sentence/*OR lettersString*/.match(new RegExp(letter, 'gi'));
    if (!map[letter]) {
      map[letter] = count.length;
      countArray.push(count.length);
    }
  });
    var leastused = Object.keys(map).filter(function(letter){
      return map[letter] === Math.min.apply(Math, countArray);
    });
    return leastused;
  };
    // console.log(leastused);
    // console.log(map);
    //*******************************************************
