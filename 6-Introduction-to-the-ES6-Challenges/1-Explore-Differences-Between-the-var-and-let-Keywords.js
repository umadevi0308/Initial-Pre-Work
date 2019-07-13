/*This lesson si about var and let keywards.One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword.*/
let catName = "Jimmy";
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
