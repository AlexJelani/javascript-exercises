const reverseString = function(str) {
    //1. Use the split() method to return a new array
    var splitString = str.split("");//var splitString = "hello".split("");
    //["h","e","l","l","o"]

    //2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse();//var reverse = ["h", "e", "l", "l", "o"].reverse();

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
     // "olleh"

    //Step 4. Return the reversed string
    return joinArray;


};
reverseString('hello there') // returns 'ereht olleh'
// Do not edit below this line
module.exports = reverseString;
