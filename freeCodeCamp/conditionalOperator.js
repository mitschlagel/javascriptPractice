/**
 * The conditional operator, 
 * also called the ternary operator, 
 * can be used as a one line if-else expression.
 * 
 * Syntax: 
 * condition ? experssion-if-true : expression-if-false;
 */

 // Here's a function using an if-else statement
 function findGreater(a, b) {
     if (a > b) {
         return 'a is greater';
     } else {
         return 'b is greater';
     }
 }

 // This can be rewritten as a single expression with the conditional (ternary) operator

 function findGreater(a, b) {
     return a > b ? 'a is greater' : 'b is greater';
 }

 console.log(findGreater(6, 12));

 // Conditional operators can be chained together for multiple conditions

 function findGreaterOrEqual(a, b) {
     return (a === b) ? 'a and b are equal'
        : (a > b) ? 'a is greater'
        : 'b is greater';
 }

 console.log(findGreaterOrEqual(22, 22));