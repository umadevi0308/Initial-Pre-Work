//this lesson tells us how  to check if the property of a given object exists or not. 
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
if (myObj.hasOwnProperty(checkProp)) {
  return myObj[checkProp];
} else {
  return "Not Found";
}
 }
 // Test your code by modifying these values
checkObj("pet");
