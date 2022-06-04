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


const multiply = function(array) {
	return array.length
   ? array.reduce((accumlator, nextItem) => accumlator * nextItem)
   :0;
}

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
