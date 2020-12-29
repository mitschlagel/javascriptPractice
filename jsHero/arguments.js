// Write a function max that calculates the maximum of an arbitrary number of numbers.
// Use the arguments object

function max() {
    let largest = 0;
    if (arguments.length == 1) {
        return arguments[0];
    } else {
        for (let i = 0; i < arguments.length - 1; i++) {
            if (arguments[i] > arguments[i + 1]) {
                largest = arguments[i];
            } else {
                largest = arguments[i + 1];
            }
        }
    }
    return largest;
}

console.log(max(1, 2, 3, 4, 5));