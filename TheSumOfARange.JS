/*Write range function that takes two arguments, start and end and returns an
array containing all the numbers from start through end. The function also takes
in an optional third argument, step, that indicates the step value for the array

Also write a sum function that takes an array and returns the sum of these
numbers*/

function range(start,end,step){
  var rangeArray = []; //create an empty array for the range
  if (start < end){ //condition to check if the range increases or decreases from the starting value
    if (isNaN(step)){ //sets step to equal 1 if no value is passed as a parameter
      step = 1;
    };
    for (var i = start; i <= end; step){  //loops over the range of start and end adding values to the array
      rangeArray.push(i);
      i += step;
    }
  } else{   // condition assumes that range decreases from starting value
    if (isNaN(step)){
      step = -1; //sets step to -1 if no value is passed as a parameter
    };
    for (var i = start; i >= end; step){ //loops over the range of start and end adding values to the array
      rangeArray.push(i);
      i += step;
    }
  }
  return rangeArray; //returns the array after all values have been added
}

function sum(array){
  var sum = 0; //creates a sum variable that is initially set to 0
  for (var i = 0; i < array.length; i++){ //adds each element of the array to sum
    sum += array[i];
  }
  return sum; //returns the sum of all values in the array
}

console.log(sum(range(1, 10))); // 55
console.log(range(5, 2)); //[5, 4, 3, 2]
console.log(sum(range(-1,-5,-2))); // -9
console.log(sum(range(2,20,2))) // 110
