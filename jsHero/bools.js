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

// Write a function equals that checks two values for strict equality.

function equals(x, y) {
    if (x === y) {
      return true;
    } else {
      return false;
    }
  }

  // Write a function equals that checks 3 values for strict equality. 
  // The function should only return true if all 3 values are equal.

  function equals(x, y, z) {
      if (x === y && y === z) {
          return true;
      } else {
          return false;
      }
  }

  /* Write a function isEven that checks if a passed number is even.
   If the given number is even, true should be returned, otherwise false. */

   function isEven(n) {
       if (n % 2 === 0) {
           return true;
       } else {
           return false;
       }
   }

/* Write a function unequal that checks 3 values for strict inequality. 
The function should return true if all three parameters are strict unequal. 
Otherwise false. */

function unequal(a, b, c) {
    if (a !== b && b !== c && a !== c) {
        return true;
    } else {
        return false;
    }
}

/* Write a function isThreeDigit that checks if a number is greater than 
or equal to 100 and less than 1000. */

function isThreeDigit(n) {
    if (n >= 100 && n < 1000) {
        return true;
    } else {
        return false;
    }
}