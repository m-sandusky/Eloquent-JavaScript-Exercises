//Define a recursive function isEven. The function should accept a number parameter and return a Boolean

function isEven(num){ //note num must be an integer
  if (num < 0) {num = Math.abs(num);}; //if number is negative, sets num = to the absolute value of num
  if (num === 0){return true;}
  else if (num === 1){return false;}
  else{
    return isEven(num - 2); //if num is neither 0 or 1, use recursion to call isEven again with (num - 2) as its parameter until num equals 0 or 1
  }
}

console.log(isEven(50)); //true
console.log(isEven(75)); //false
console.log(isEven(-1)); //false
console.log(isEven(-10)); //true
