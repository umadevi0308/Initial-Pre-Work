/*his lesson is similar to golf. The function will be passed par and strokes arguments.
 Return the correct string according to the table which lists the strokes in order of priority; top (highest) to bottom (lowest):*/
 var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, Strokes) {
 if (Strokes == 1){
   return names[0]
 } else if (Strokes <=par-2) {
 return names[1]
 } else if (Strokes == par-1) {
    return names[2]
} else if (Strokes == par) {
 return names[3]
} else if (Strokes == par+1){
   return names[4]
} else if (Strokes == par+2){
  return names[5]
} else if (Strokes >= par+3){
  return names [6]
}
}
// Change these values to test
golfScore(5, 4);
