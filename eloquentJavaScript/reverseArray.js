/* Write a function reverseArray, that takes an array as argument and produces 
a new array that has the same elements in the inverse order. */

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

/* Write a function, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument by reversing its elements. */

function reverseArrayInPlace(array) {
    let midpoint = Math.floor(array.length / 2);
    for (let i = 0; i < midpoint; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);