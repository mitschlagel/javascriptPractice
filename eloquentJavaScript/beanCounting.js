/* Write a function countBs that takes a string as its only argument and returns a 
number that indicates how many uppercase “B” characters there are in the string. */

function countBs(string) {
    let counter = 0;
    for (let ch = 0; ch < string.length; ch++) {
        if (string[ch] === "B") {
            counter ++;
        }
    }
    return counter;
}

console.log(countBs("BBC"));
console.log(countBs("Bananas"));

/* Next, write a function called countChar that behaves like countBs, except it takes
a second argument that indicates the character that is to be counted (rather than counting
only uppercase “B” characters). Rewrite countBs to make use of this new function. */

function countChar(string, char) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === char.toLowerCase()) {
            counter++;
        }
    }
    return counter;
}

console.log(countChar("kakkerlak", "k"));
console.log(countChar("bAnANas", "N"));

// Integrate one function into the other, using arrow notation

const countRs = string => countChar(string, "R");

console.log(countRs("hurry"));