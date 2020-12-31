// Write a function arabic that converts a Roman number (up to 1000) into an Arabic.

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

// console.log(arabic('CDLXXXIII'));

// Write a function roman that converts an Arabic number (up to 1000) into a Roman numeral.

function roman(arabic) {
    const numerals = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    };
    
    const nums = Object.keys(numerals);
    let input = arabic;
    let result = "";

    for (let i = 1; i < nums.length; i++) {
        
        while (input > i) {
            result += numerals[nums[nums.length - i]];
            input -= nums[nums.length - i];
        }
    
    }
    
    return result;
}

console.log(roman(483));