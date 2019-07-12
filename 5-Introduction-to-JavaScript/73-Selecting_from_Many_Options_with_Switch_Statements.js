/*Instead of chained statements we can use switched statements.
 A switch statement tests a value and can have many case statements which define various possible values.
Statements are executed from the first matched case value until a break is encountered.*/
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    answer = "alpha"
    break;
    case 2:
    answer = "beta"
    break;
    case 3:
    answer = "gamma"
    break;
    case 4:
    answer = "delta"
    break;

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
