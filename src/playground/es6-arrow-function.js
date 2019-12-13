// regular functions can have names
// arrow functions are always anonymous

// es5 regular function set to a const
const square = function (x) {
  return x * x;
};

// es5 named function, callable by function name
function namedSquare(x) {
  return x * x;
};

// arrow function set to a const
const longArrow = (x) => {
  return x * x;
};

// identical concise version
const shortArrow = (x) => x * x;

const longVersion = (fullName) => {
  return  fullName.split(' ')[0];
}

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(square(5));
console.log(longArrow(3));
console.log(shortArrow(4));
console.log(getFirstName('Blake Wang'));
console.log(longVersion('Arabella Wang'));
