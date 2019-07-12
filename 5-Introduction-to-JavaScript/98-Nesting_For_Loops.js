// This lesson is about nested for loops.If we  have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays.
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++){
    for(var j=0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,3],[3,4],[5,6,7]]);
