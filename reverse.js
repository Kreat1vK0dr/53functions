module.exports = function(string) {
  var str = '';
  for (var i = string.length-1; i>=0;i--) {
    str += string[i];
  }
  return str;
};
