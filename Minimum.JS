//A function that takes in two arguments and returns their minimum

function min(num1, num2){           //function takes in two parameters
  if (isNaN(num1) || isNaN(num2)){
    return "Error: One (or both) of the parameters is not a number"; //checks to make sure both parameters are numbers and logs an error if they are not
  } else if (num1 >= num2){
    return num2; //returns num2 if it is less x. (As well as if the two numbers are equal since they both would be minimums)
  } else{
    return num1; //otherwise returns num1
  }
}

console.log(min(0,10)); // 0
console.log(min(0, -10));// -10
console.log(min(5, "String")); // Error message
