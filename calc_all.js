module.exports = function(a,b,c) {
// var x = function(a,b,c) {
  switch (c) {
    case '/': return a/b;
    case '*': return a*b;
    case '+': return a+b;
    case '-': return a-b;
    default: return '';
  }
};

// console.log(x(6,2,'/'));
