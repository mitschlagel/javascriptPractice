// Write a function toArray that takes 2 values and returns these values in an array.

function toArray(x, y) {
    let array = [x, y];
    return array;
}

// This also works, but not sure if best practice?
function toArray(x, y) {
    return [x, y];
}

/* Write a function getFirstElement that takes an array 
and returns the first element of the array. */

function getFirstElement(array) {
    return array[0];
}

/* Write a function setFirstElement that takes an array and 
an arbitrary variable. The variable should be inserted as the 
first element in the array. The array should be returned. */

function setFirstElement(array, n) {
    array[0] = n;
    return array;
}

/* Write a function getLastElement that takes an array and 
returns the last element of the array. */

function getLastElement(array) {
    return array[array.length - 1];
}

/* Write a function sort that takes an array filled with 3 numbers 
and returns these 3 numbers sorted in ascending order as an array. */

// Bubble sort!!
 function sort(array) {
     let swap = true;
     do {
        swap = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swap = true;
            }
        }
     } while (swap == true);
     return array
 }

/* Write a function rotate that rotates the elements of an array. 
All elements should be moved one position to the left. The 0th element
should be placed at the end of the array. The rotated array should be 
returned. */

function rotate(array) {
    let temp = array.shift();    // .shift() removes and returns first element
    array.push(temp);   // .push() appends element
    return array;
}

/* Write a function add that adds an element to the end of an array.
However, the element should only be added if it is not already in the array. */

function add(array, element) {
    if (array.includes(element)) { // Use .includes() method to check array for element
        return array;
    } else {
        array.push(element);
    }
    return array;
}

/* Write a function concatUp that concatenate two arrays. The longer array 
should be appended to the shorter array. If both arrays are equally long,
the second array should be appended to the first array. */

function concatUp(a1, a2) {
    if (a1.length <= a2.length) {
        return a1.concat(a2);
    } else {
        return a2.concat(a1);
    }
}

/* Write a function halve that copies the first half of an array. With an odd
number of array elements, the middle element should belong to the first half. */

// .slice(start, end) -- start is inclusive, end is exclusive
function halve(array) {
    if (array.length % 2 == 0) {
        return array.slice(0, (array.length / 2));
    } else {
        return array.slice(0, Math.ceil(array.length / 2));
    }
}

/* Write a function list that takes an array of words and returns a string by
concatenating the words in the array, separated by commas and - the last word
- by an 'and'. An empty array should return an empty string. */

function list(array) {
    if (array.length == 0){
        return "";
    } else if (array.length == 1) {
        return array.join();
    } else {
        let last = array.pop();
        return array.join(', ') + " and " + last;
    } 
}

console.log(list(['hello', 'my', 'name', 'peaches']))

