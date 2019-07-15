//We can obtain values from an object, and set a value of a property within an object.These are  called getters and setters.
 function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor(temp){
    this._temp = 5/9 * (temp - 32);
  }
  get temperature(){
    return this._temp;
  }
  set temperature(updatedTemp){
    this._temp = updatedTemp;
  }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
