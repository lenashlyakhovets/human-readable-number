module.exports = function toReadable (number) {
    const numbersInWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", 
    "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let reverseNumberInArray = String(number).split("").reverse();
    let result = "";

    if (number === 0) { 
        return numbersInWords[0]; 
    }

    if (number >= 100) {
        result = numbersInWords[+reverseNumberInArray[2]] + " hundred"; 
    }
     
    if (+reverseNumberInArray[1] != 0) {
        if (+reverseNumberInArray[1] != 1) {
            if (+reverseNumberInArray[1]+18) {
                result = result + " " + numbersInWords[+reverseNumberInArray[1]+18]; 
            }
            if (+reverseNumberInArray[0] != 0) {
                result = result + " " + numbersInWords[+reverseNumberInArray[0]];
            }
        } else {
            result = result + " " + numbersInWords[+reverseNumberInArray[0]+10];
        }
    } else {
        if (+reverseNumberInArray[0] != 0) {
            result = result + " " + numbersInWords[+reverseNumberInArray[0]];
        }
    }
      
    return result.trim();
};
