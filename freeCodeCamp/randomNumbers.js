// Generate random number between 0 and 1 (exclusive)

let random = Math.random();
console.log(random);

// Generate random WHOLE numbers

/**
* 1. Use Math.random() to generate a random decimal.
* 2. Multiply that random decimal by exclusive max of the desired range
* 3. Use another function, Math.floor() to round the number down to its nearest whole number.
**/

let zeroNine = Math.floor(Math.random() * 10);
let zeroNineteen = Math.floor(Math.random() * 20);
let zeroNinetyNine = Math.floor(Math.random() * 100);

let randArray = [zeroNine, zeroNineteen, zeroNinetyNine]

console.log(randArray);

// Generate random whole numbers within given min/max range
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randRange(0, 1000));

