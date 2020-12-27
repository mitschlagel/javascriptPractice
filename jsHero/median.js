// Write a function median that takes an array of ascending numbers and returns the median of that numbers.

// function median(array) {
//     let midpoint = array.length / 2;
//     console.log(midpoint);
//     if (array.length == 1) {
//         return array[0];
//     } else if (array.length % 2 == 0) {
//         return (array[midpoint - 1] + midpoint[midpoint]) / 2;
//     } else {
//         return array[midpoint];
//     }
// }

// console.log(median([1, 2]));

// working solution:
function median(array) {
    let middle = array.length / 2;
    if (array.length % 2 == 0) {
        return (array[middle - 1] + array[middle]) / 2;
    } else {
        return array[Math.floor(middle)];
    }
    
}

console.log(median([1, 2, 3]));