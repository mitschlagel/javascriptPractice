/* Write a range function that takes two arguments, start and end, and returns 
an array containing all the numbers from start up to (and including) end. */

function range(start, end, step = start < end ? 1 : -1) {
    let result = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}

console.log(range(10, 1, -1));

/* Next, write a sum function that takes an array of numbers 
and returns the sum of these numbers. */

function sum(array) {
    let result = 0;
    for (let number of array) {
        result += number;
    }
    return result;
}

console.log(sum(range(1, 10)));
