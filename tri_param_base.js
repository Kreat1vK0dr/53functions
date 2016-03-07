var tri = function(char, base) {
  var line = '';
  for (var i = 0; i < base; i++) {
    line += char;
    console.log(line);
  }
};

tri('M', 9);
