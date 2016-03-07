
var dayNum = function(day){

  switch(day) {
    case 'Sunday':
    case'sunday':
                    return 0;
    case 'Monday':
    case 'monday':
                    return 1;
    case 'Tuesday':
    case 'tuesday':
                    return 2;
    case 'Wednesday':
    case 'wednesday':
                    return 3;
    case 'Thursday':
    case 'thursday':
                    return 4;
    case 'Friday':
    case 'friday':
                    return 5;
    case 'Saturday':
    case 'saturday':
                    return 6;
    default: return null;
  }

};

// module.exports = function(year, day) {
module.exports = function(year, day) {
// console.log(day);

// console.log(day);

  function toDays(milliseconds) {
    return milliseconds/1000/60/60/24;
  }

  function newDate(year, days) {
    return new Date(year, 0, days);
  }

var yearDays = toDays((new Date(year+1, 0)).getTime() - (new Date(year, 0)).getTime());
var count = 0;

// console.log(yearDays);

for (var i = 1; i<=yearDays; i++) {
    if (newDate(year, i).getDay() === dayNum(day)) {
      count++;
    }
  }

  var dayofWeek = day.replace(day[0], day[0].toUpperCase());

  // console.log(dayofWeek+"s in year : "+count);
  return dayofWeek+"s in year : "+count;
};

// x(2016, 'thursday');
