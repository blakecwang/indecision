const add = function (a, b) {
  console.log('arguments', arguments);
  return a + b;
}
// can't access 'arguments'
const addArrow = (a, b) => a + b;

console.log(add(55, 1));
console.log(addArrow(55, 1));

const user = {
  name: 'Blake',
  cities: ['Goleta', 'San Diego'],
  printPlacesLived: function () {
    // workaround for the old es5 way
    const that = this

    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city)
    });
  }
}
user.printPlacesLived();

// 'this' is undefined in a regular anonymous function
const regularAnonymous = function () {
  console.log(this);
};
regularAnonymous(); // => undefined

// for arrow functions, 'this' is defined the same as the scope in which the
// function was defined
const arrowUser = {
  name: 'Jacque',
  cities: ['France', 'Bali'],
  // new syntax for regular anonymous function
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);

//    this.cities.forEach((city) => {
//      console.log(this.name + ' has lived in ' + city)
//    });
  }
}
console.log(arrowUser.printPlacesLived());

const multiplyer = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};
console.log(multiplyer.multiply());
