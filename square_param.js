var sqparam = function(char, size) {
  var line = '';
  var i = 0;
    while (i < size-1) {
    line += char+' ';
    i++;
  }
  line += char;
  for (i = 0; i < size; i++) {
    console.log(line);
  }
};

sqparam('z', 7);
