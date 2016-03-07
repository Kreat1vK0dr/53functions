module.exports = function (sentence) {
  var chars = sentence.replace(/[\W \s]/g, '').split('');
  var upperCase = chars.filter(function(char) {
    return char === char.toUpperCase();
  });
  return upperCase;
};
