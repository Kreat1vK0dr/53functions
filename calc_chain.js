//OPTION 1 : Immediately creating and exporting the function.
// module.exports = function(num) {
// function Calc(num) {
//   this.num = num;
//
//   this.add = function(a,b) {
//   this.num *= n;
//       return this;
//     };
//
//   this.divide = function(n) {
//   this.num /= n;
//     return this;
//   };
//
//   this.subtract = function(n) {
//   this.num -= n;
//     return this;
//   };
//
// }
//
// var calc = new Calc(0);
// console.log(calc(0).add(5, 3).multiply(2).divide(4).subtract(2)); //CANNOT READ property '.add' of undefined??
// console.log(Calc(0).add(5, 3).multiply(2).divide(4).subtract(2)); //CANNOT READ property '.add' of undefined??



// OPTION 2: Creating the function and then exporting it.
function Calc() {
  this.num = 0;
}

Calc.prototype.add = function(a,b) {
  this.num += a + b;
  return this;
  };

Calc.prototype.multiply = function(n) {
this.num *= n;
    return this;
  };

Calc.prototype.divide = function(n) {
this.num /= n;
  return this;
};

Calc.prototype.subtract = function(n) {
this.num -= n;
  return this;
};

Calc.prototype.value = function(cb) {
  // cb(this.num);
  // return this;
  return this.num;
};

module.exports = function () {
  return new Calc();
};

var calculator = new Calc();

console.log(calculator.add(5,3).multiply(2).divide(4).subtract(2).value());
//
// console.log(calculator.add(5, 3).multiply(2).divide(4).subtract(2).value(function(n){
//   console.log("n : " + n)
// }).add(7,2));
//
// console.log(calculator.add(5,2));

// OPTION 3: Creating the function and then exporting it WITH a value variable.
// module.exports = function Calc(value) {
//   return value;
//
//   this.add = function(a,b) {
//   value += a + b;
//   return this;
//   };
//
//   this.multiply = function(n) {
//   value *= n;
//       return this;
//     };
//
//   this.divide = function(n) {
//   value /= n;
//     return this;
//   };
//
//   this.subtract = function(n) {
//   value -= n;
//     return this;
//   };
//
// };

// OPTION 4: Creating a number prototype object.
// module.exports = function() {

// calc = 0;
//
//   Number.prototype.add = function(a,b) {
//     this.prototype += a + b;
//     return  this;
//   }
//
//   Number.prototype.multiply = function(n) {
//   this.prototype *= n;
//       return this;
//     };
//
//   Number.prototype.divide = function(n) {
//   this.prototype /= n;
//     return this;
//   };
//
//   Number.prototype.subtract = function(n) {
//   this.prototype -= n;
//     return this;
//   };
//
// console.log(calc.add(5,3).multiply(2).divide(4).subtract(2));

// };

// var calc = new Calc(0);
// console.log(calc.add(5,3).multiply(2).divide(4).subtract(2));
