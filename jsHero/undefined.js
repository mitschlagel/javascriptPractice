/* Write a function hello having one parameter and returning 'Hello <parameter>!'. 
If hello is called without an argument, 'Hello world!' should be returned. */

function hello(x) {
  if (x === undefined) {
    return "Hello world!";
  } else {
    return "Hello " + x +"!";
  }
}