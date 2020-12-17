let n1 = parseInt('13 monkeys', 10);

// Non-numeric characters before the number are not allowed and results in NaN.
console.log(n1);

/* Write a function add that takes a string with a summation task and returns its 
result as a number. Two natural numbers should be added. The summation task is a 
string of the form '102+17'. */

function add(string) {
    let stringArray = string.split('+');
    let result = 0;
    for (i = 0; i < stringArray.length; i++) {
        result += parseInt(stringArray[i], 10);
    }
    return result;
}

console.log(add('102+17'));