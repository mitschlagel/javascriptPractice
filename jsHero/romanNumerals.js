/* Write a function arabic that converts a Roman number (up to 1000) into an Arabic. */

function arabic(roman) {
    const numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        
        // Current value
        let current = numerals[roman[i]];

        // Next value
        let next = numerals[roman[i + 1]];
        
        // Check if next value is greater
        if (current < next) {

            // Add difference to total 
            result += (next - current);
            
            // Skip next value in calcuation
            i++; 

        } else {
            
            // Add current value
            result += current;
        }
          
    }
    return result;

}

console.log(arabic('CDLXXXIII'));