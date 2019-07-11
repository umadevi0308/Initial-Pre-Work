//This lesson is all about If condition. It is used to make decisions in the code. It evaluates the statement inside the curly braces whether its true or false.
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";

  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
console.log(trueOrFalse(true));
