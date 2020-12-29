/* Write a function addTo that accepts a number as a parameter and adds all natural 
numbers smaller or equal than the parameter. The result is to be returned. */

function addTo(n) {
    let result = 0;
    for (let i = n; i > 0; i--) {
        result += i;
    }
    return result;
}
console.log(addTo(3));


// Write a function factorial that calculates the factorial of a positive integer.
function factorial(n) {
    let result = 1;
    for (let i = 1; i < n + 1; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(3));

/* Write a function mean that accepts an array filled with numbers and returns the 
arithmetic mean of those numbers. */

function mean(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}
console.log(mean([1, 2, 3]));


// Write a function spaces that takes a natural number n and returns a string of n spaces.
// Use a while loop
spaces = function(n) {
    let result = "";
    while (n > result.length) {
        result += " ";
    }
    return result;
}
console.log(spaces(20));

/* Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). 
The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b. */

// Use a do... while loop
function lcm(a, b) {
    let lcm = 1;
    do {
        if (lcm % a === 0 && lcm % b === 0) {
            break;
        }
        lcm++;
    } while (lcm < a * b);
    return lcm;
}
console.log(lcm(4, 6));

// Write a function gcd that takes two natural numbers and calculates their greatest common divisor.
function gcd(a, b) {
    let result = 0;
    for (let i = 1; i <= a * b; i++) {
        if (a % i === 0 && b % i === 0) {
            result = i;
        }
    } return result;
}
console.log(gcd(6, 15));


/* Write a function isPrime that checks whether a passed number is prime. 
In case of a prime number it should return true, otherwise false. */

/* In the above code we accept a number to determine whether or not it is prime. 
We then loop from two all the way up until our number minus one because we know 
that our number will be divisible by itself and one. If the remainder of our value 
with the current loop value is zero then we know it is not prime so break out and say so. */

function isPrime(n) {
    for(var i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return n > 1;
}
console.log(isPrime(8));

// Write a function sum that calculates the sum of all elements of a two-dimensional array.
// using array lengths as the conditions makes this funciton work for n-dimensional arrays
function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            total += array[i][j];
        }
    }
    return total;
}

console.log(sum([[1, 2], [3, 1]]));