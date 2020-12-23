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