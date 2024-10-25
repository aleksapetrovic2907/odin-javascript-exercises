const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((accumulated, current) => accumulated + current, 0);
};

const multiply = function(array) {
  return array.reduce((accumulated, current) => accumulated * current);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
