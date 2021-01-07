// JavaScript Promise Syntax

const myPromise = new Promise((resolve, reject) => {
    // TODO
});

// Create a new promise called makeServerRequest. 
// Pass in a function with resolve reject parameters to the constructor.

const makeServerRequest = new Promise((resolve, reject) => {
    // Conditions for resolve, reject go here
});

/**
 * Make the promise handle success and failure. If responseFromServer is true, 
 * call the resolve method to successfully complete the promise. 
 * Pass resolve a string with the value We got the data. If responseFromServer is false, 
 * use the reject method instead and pass it the string: Data not received.
 */

 const makeServerRequest = new Promise((resolve, reject) => {
     
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
 });

 /**
  * Add the then method to your promise.
  * Use result as the parameter of its callback function and log result to the console.
  * 
  * Add the catch method to your promise.
  * Use error as the parameter of its callback function and log error to the console.
  */
  
 const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServer;

    if (responseFromServer) {

        resolve("We got the data");
   
    } else {
        reject("Data not received")
    }
 });

 makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});