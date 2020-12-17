/* Write a function nand that takes two Boolean values. 
If both values are true, the result should be false. 
In the other cases the return should be true. */

function nand(b1, b2) {
    if (b1 === true && b2 === true) {
        return false;
    } else {
        return true;
    }
}

/* Write a function nor that takes two Boolean values. 
If both values are false, the result should be true. 
In the other cases the return should be false. */

function nor(b1, b2) {
    if (b1 == false && b2 == false) {
        return true;
    } else {
        return false;
    }
}

/* Write a function xor that takes two Boolean values. 
If both values are different, the result should be true. 
If both values are the same, the result should be false. */

function xor(b1, b2) {
    if (b1 == b2) {
        return false;
    } else {
        return true;
    }
}