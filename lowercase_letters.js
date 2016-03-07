module.exports = function (sentence) {
  // var sentence = 'Really?.';
  var chars = sentence.replace(/[\W \s]/g, '').split('');
  var upperCase = chars.filter(function(char) {
    return char === char.toLowerCase();
  });
  return upperCase;
};
// console.log(chars);
// console.log(upperCase);
