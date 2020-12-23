/* Write a function repdigit that determines whether a two-digit decimal 
is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be 
returned, otherwise 'No Repdigit!'. */


function repdigit(x) {
  let onesDigit = x % 10;
  let tensDigit = x / 10;
  if (onesDigit == Math.floor(tensDigit)) {
    return 'Repdigit!'
  } else {
    return 'No Repdigit!';
  }
}


console.log(repdigit(11));

/* Write a function addWithSurcharge that adds two amounts with surcharge.
 For each amount less than or equal to 10, the surcharge is 1. For each 
 amount greater than 10, the surcharge is 2. */

function addWithSurcharge(x, y) {
  let surcharge = 0;
  if (x <= 10) {
    surcharge += 1;
  } else if (x > 10) {
    surcharge += 2;
  }

  if (y <= 10) {
    surcharge += 1;
  } else if (y > 10) {
    surcharge += 2;
  }
  return x + y + surcharge;
}

console.log(addWithSurcharge(12, 2));

/* Write a function addWithSurcharge that adds two amounts with surcharge. 
For each amount less than or equal to 10, the surcharge is 1. For each amount 
greater than 10 and less than or equal to 20, the surcharge is 2. 
For each amount greater than 20, the surcharge is 3. */

function calcSurcharge(n) {
  let surcharge = 0;
  if (n > 20) {
    surcharge += 3;
  } else if (n > 10 && n <= 20) {
    surcharge += 2;
  } else {
    surcharge += 1;
  }
  return surcharge;

}
function addWithSurcharge(x, y) {
  let a = x + calcSurcharge(x);
  let b = y + calcSurcharge(y);
  return a + b;
}