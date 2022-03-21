const leapYears = function(year) {
    // If a year is multiple of 400,
        // then it is a leap year
        if (year % 400 == 0)
            return true;
 
        // Else If a year is multiple of 100,
        // then it is not a leap year
        if (year % 100 == 0)
            return false;
 
        // Else If a year is multiple of 4,
        // then it is a leap year
        if (year % 4 == 0)
            return true;
        return false;

};
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
// Do not edit below this line
module.exports = leapYears;
