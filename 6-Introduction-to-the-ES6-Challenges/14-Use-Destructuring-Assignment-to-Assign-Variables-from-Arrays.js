//This lesson is about Destructuring Assignmnet to Assign varriables from Arrays.
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
