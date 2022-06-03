const sumAll = function(a,b) {
    if(isNaN(a) || isNaN(b)) return 'ERROR';
  if(a < 0 || b < 0) return 'ERROR'
  return (Math.abs(a-b) + 1)*(a + b)/2;
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
