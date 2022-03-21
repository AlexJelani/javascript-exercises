const removeFromArray = function(arr, items) {
  const idx = arr.indexOf(items);
  arr.splice(idx, 1);
  return arr;
};
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
