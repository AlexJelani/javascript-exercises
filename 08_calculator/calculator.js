const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};


function sum(numbers){
  var x = numbers.reduce(function(prev,curr){
    return curr + prev;
  },0);
  return x;
}
const multiply = function(a,b) {
  return a * b;
};

const power = function() {
	
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
