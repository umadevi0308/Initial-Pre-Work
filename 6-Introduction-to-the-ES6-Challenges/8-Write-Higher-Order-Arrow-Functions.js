//Arrow functions work good with Higher Order functions such as map(), filter(), and reduce(), that take other functions as arguments for processing collections of data.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
   // change code below this line
  const squaredIntegers = arr.filter(num => Number.isInteger(num)  && num > 0).map( (num) => Math.pow(num, 2) );
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
