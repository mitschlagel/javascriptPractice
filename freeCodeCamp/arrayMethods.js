// reduce() applies a function to each element in the array
// Returns the accumulated result from the last call of the callback function

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

console.log(sum(1, 2, 3));