
const repeatString = function(string, times) {
    //1. Create an empty string that will host the repeated string
    var repeatedString = "";
    //2. Set the while loop with (times > 0) as the condition to check
    while (times > 0) {
        //As long as times is greater than 0, the statement is executed
        //The statement
        repeatedString += string;//Same as repeatedString = repeatedString + string;
        times++// Same as times = times + 1;
    }
    return repeatedString;
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
