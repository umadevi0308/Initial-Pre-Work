//This lesson shows how to create a counting card function.
var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count ++;
    break;
   case 10:
   case "J":
   case "Q":
   case "K":
   case "A":
    count--;
    break;
  }
  var holdbet  = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return  count + " " + holdbet;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc('k'); cc(7); cc('K'); cc('A');
