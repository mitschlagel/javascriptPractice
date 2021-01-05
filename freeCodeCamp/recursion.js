// Function returns sum of first nth elements of an array using recursion

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

const arr = [1, 2, 3, 4, 5];
console.log(sum(arr, 5));


// Same thing using a for loop

function sumLoop(arr, n) {
    total = 0;
    for (let i = 0; i < n; i++) {
        total += arr[i];
    }
    return total
}

console.log(sumLoop(arr, 5));


// Write a recursive function that returns an array containing the numbers 1 through n

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}

console.log(countup(5));


// Write a recursive function that returns an array that counts down from n to 1

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1); 
        arr.unshift(n);   // The nums aren't added to the array until the above recursive call happens for each number
        return arr;
    }
  }

  console.log(countdown(10));

  // Use recursion to create a range of numbers

  function rangeOfNumbers(startNum, endNum) {
      if (startNum > endNum) {
          return [];
      } else {
          const numArray = rangeOfNumbers(startNum, endNum - 1);
          numArray.push(endNum);
          return numArray;
      }
  }
  console.log(rangeOfNumbers(4, 4));