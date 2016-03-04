module.exports = function (list) {
  var numlist = [Math.max.apply(Math, list), Math.min.apply(Math, list)];
  return numlist;
};
