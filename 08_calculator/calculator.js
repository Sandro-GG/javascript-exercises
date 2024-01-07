const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr, ...n) {
  return arr.reduce((multi, current) => multi * current, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	let fac = 1;
  for (let i = 1; i <= n; i++) fac *= i;
  return fac;
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
