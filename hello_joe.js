module.exports = function(name){
    if (name==='Joe' || name==='Bob') {
      return 'Hello!';
    } else {
      return 'Hello, '+name.toUpperCase()+'!';
    }
};
