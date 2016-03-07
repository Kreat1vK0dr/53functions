var square = function(char) {
  if(char.length === 1) {
    for (i = 0; i<4; i++) {
      console.log(char+' '+char+' '+char+' '+char);
    }
  }
};

square('T');
