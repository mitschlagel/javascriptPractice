/* Write a function sum that takes an array of numbers and returns the sum of these numbers. 
Write a function mean that takes an array of numbers and returns the average of these numbers. 
The mean function should use the sum function. */

function sum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function mean(array) {
    let total = sum(array);
    return (total / array.length);
}
console.log(sum([2, 2, 2, 2]));
console.log(mean([2, 2, 2, 2]));