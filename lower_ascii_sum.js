module.exports = function(string) {
// var x = function(string) {
return string.replace(/[! \. \s]/g,'').match(/[a-z]/g).map(function(x) {
    return x.charCodeAt();
      }).reduce(function(prev, curr) {
        return prev + curr;
      });
      // console.log(str);
};

// x('Jane is there.');
