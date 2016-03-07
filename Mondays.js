module.exports = function(year) {
// var x = function(year) {

  function toDays(milliseconds) {
    return milliseconds/1000/60/60/24;
  }

  function newDate(year, day) {
    return new Date(year, 0, day);
  }

var yearDays = toDays((new Date(year+1, 0)).getTime() - (new Date(year, 0)).getTime());
var Mondays = 0;

for (var i = 1; i<=yearDays; i++) {
    if (newDate(year, i).getDay() === 1) {
      Mondays++;
    }
  }

  console.log(Mondays);
  return Mondays;
};

// x(2016);
