/* Define a recursive function isEven that determines if a number is even.
The function should accept a single parameter (a positive, whole number) and return a Boolean. */

function isEven(x) {
    if (x === 0) {
        return true;
    } else if (x === 1) {
        return false;
    } else if (x < 0) {
        return isEven(-x);
    } else {
        return isEven(x - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));