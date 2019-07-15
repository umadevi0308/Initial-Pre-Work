//Spread Operator just like Rest Operator.But it expands in already excisting Arrays  or spreads out an Array.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line

})();
console.log(arr2);
