module.exports = function(sentence) {

    var words = sentence.replace('.','').split(' ').map(function(word){
          return word.length;
        });

    var average = function() {
          var length = words.reduce(function(a,b){return a + b;});
          return Math.ceil((length)/(words.length));
        };
        
return average();

};
