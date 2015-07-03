/*Write two functions, every and some that take both an array and function as
arguements. Every checks to see if each element of the array is true determined
by the input function. Some checks to see if at least one element of the array
is true determined by the input function*/

function every(array, f){
  for (var i = 0; i < array.length; i++){
    var determine = f(array[i]);
    if (determine === false){
      return false;
    };
  }
  return true;
} //if any element in the array is false determined by f, then return false, otherwise return true after checking all elements

function some(array, f){
  for (var i = 0; i < array.length; i++){
    var determine = f(array[i]);
    if (determine === true){
      return true;
    };
  }
  return false;
} //if at least one element in teh array is true determined by f, then return true, otherwise return false after checking all elements

console.log(every([NaN, NaN, NaN], isNaN)); //true
console.log(every([NaN, NaN, 4], isNaN)); //false
console.log(some([NaN, 3, 4], isNaN)); //true
console.log(some([2, 3, 4], isNaN)); //false
