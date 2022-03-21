const ftoc = function(fahrenheit) {
 // make the given fahrenheit variable equal the given celsius value
  // multiply the given celsius value by 9/5 then add 32
  let celsius = (fahrenheit - 32) * 5/9;
  // return the variable fahrenheit as the answer
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
};
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
