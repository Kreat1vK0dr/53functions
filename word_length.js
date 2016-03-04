module.exports = function(sentence) {

    var words = sentence.replace('.','').split(' ').map(function(word){
          return word.length;
        });

    var average = function() {
          var length = words.reduce(function(a,b){return a + b;});
          return (length)/(words.length);
        };

  this.avgDown = function() {
        return Math.floor(average());
      };

  this.avgUp = function() {
        return Math.ceil(average());
      };

};
