var diamond = function (char, base) {
  // repeat = 5;
  var base = base;
  spaceOuter = '';
  spaceInner = ' ';
  line = '';
  for (var i = 0; i< base-1; i++) {
    spaceOuter += ' ';
  };

  for (var j = 0; j < base; j++) {
    if (j === 0) {
      line = spaceOuter+char+spaceOuter;
      spaceOuter = spaceOuter.replace(/\s/, '');
  } else {
     line = spaceOuter+char+spaceInner+char+spaceOuter;
     spaceOuter = spaceOuter.replace(/\s/, '');
     if (j <  base-1) {
     spaceInner += '  ';
       } else {
         spaceInner = spaceInner.replace(/\s\s/, '');
         spaceOuter += ' ';
       }
  }
  console.log(line);
  // console.log('x'+spaceInner+'x');
  // console.log('x'+spaceOuter+'x'+spaceOuter+'x');
}

  for (var k = base-1; k > 0; k--) {
    if (k > 1) {
      line = spaceOuter+char+spaceInner+char+spaceOuter;
      spaceOuter += ' ';
      spaceInner = spaceInner.replace(/\s\s/, '');
    } else {
      line = spaceOuter+char+spaceOuter;
    }
    console.log(line);
  }
};

diamond('x', 5);
