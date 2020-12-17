// Write a function dice that returns like a dice a random number between 1 and 6.

function dice() {
    let num = Math.round(Math.random() * 6);
    while (num < 1 || num > 6) {
        num = Math.round(Math.random() * 6);
    }
    return num;
}    
console.log(dice());