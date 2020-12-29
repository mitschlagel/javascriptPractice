/* Write a function add that takes a string with a summation task and returns its result as a number. 
A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'. */

function add(str) {
    let strArray = str.split('+');
    
    let result = 0;
    for (let i = 0; i < strArray.length; i++) {
        result += parseInt(strArray[i]);    // Use parseInt to convert str to int
    }
    return result;
}

console.log(add('7+12+100'));