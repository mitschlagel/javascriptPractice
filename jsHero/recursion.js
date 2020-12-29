/* Write a function reverse that reverses the order of the characters in a string. 
The function should be recursive. */

function reverse(str) {
    if (str === "")
      return "";
    else
      return reverse(str.substr(1)) + str.charAt(0);
  }

console.log(reverse('evil'));

// .substr() returns a sub string starting at the given index
// .charAt() returns the char at the given index

