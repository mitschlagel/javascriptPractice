function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {    // Using arr[i] is the key here, so that it doesn't iterate pass the length of each element
           
            console.log(arr[i][j]);
            product = product * arr[i][j];
        
      }
    }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));