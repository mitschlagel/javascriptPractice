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
    let sum = x + y; 
    if (sum <= 10) {
       return sum + 1;
     } else {
       return sum + 2;
     }
   }

   console.log(addWithSurcharge(12, 2));