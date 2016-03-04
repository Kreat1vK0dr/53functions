module.exports = function(name) { //Can set a default parameter as shown, or otherwise when value not stated it is undefined.
      if(name!==undefined) {
      return 'Hello, '+name.toUpperCase()+'!';
    } else {
      return 'HELLO!';
    }
};
