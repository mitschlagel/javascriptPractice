/* Write a function parseFirstInt that takes a string and returns the first integer
present in the string. If the string does not contain an integer, you should get NaN. */

// Don't understand entirely how this works -- only sort of get it
function parseFirstInt(input) {

    let inputToParse = input;
  
    for (let i = 0; i < input.length; i++) {
      let firstInt = parseInt(inputToParse);
      if (!Number.isNaN(firstInt)) {
        return firstInt;
      }
      inputToParse = inputToParse.substr(1);
    }
  
    return NaN;
  }

console.log(parseFirstInt('No. 10'));