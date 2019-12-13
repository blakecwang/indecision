'use strict';

var add = function add(a, b) {
  console.log('arguments', arguments);
  return a + b;
};
// can't access 'arguments'
var addArrow = function addArrow(a, b) {
  return a + b;
};

console.log(add(55, 1));
console.log(addArrow(55, 1));

var user = {
  name: 'Blake',
  cities: ['Goleta', 'San Diego'],
  printPlacesLived: function printPlacesLived() {
    // workaround for the old es5 way
    var that = this;

    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city);
    });
  }
};
user.printPlacesLived();

// 'this' is undefined in a regular anonymous function
var regularAnonymous = function regularAnonymous() {
  console.log(this);
};
regularAnonymous(); // => undefined

// for arrow functions, 'this' is defined the same as the scope in which the
// function was defined
var arrowUser = {
  name: 'Jacque',
  cities: ['France', 'Bali'],
  // new syntax for regular anonymous function
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });

    //    this.cities.forEach((city) => {
    //      console.log(this.name + ' has lived in ' + city)
    //    });
  }
};
console.log(arrowUser.printPlacesLived());

var multiplyer = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 5,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return _this2.multiplyBy * number;
    });
  }
};
console.log(multiplyer.multiply());
