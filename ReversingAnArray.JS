/* Write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the
same elements in the inverse order. The second, reverseArrayInPlace, does what
the reverse method does: it modifies the array given as argument in order to
reverse its elements. Neither may use the standard reverse method*/

function reverseArray(array){
  var reversedArray = []; //creates a new array that be the reverse of the input array parameter
  for (var i = array.length - 1; i >= 0; i--){
    reversedArray.push(array[i]); //adds elements to the reversedArray array starting from the end of the original array and going to the beginning
  }
  return reversedArray; //returns the new reveresed array
}

function reverseArrayinPlace(array){
  for (var i; i < Math.floor(array.length/2); i++){ //switches indexes of the array (1st to last, 2nd to 2nd last, etc), and stops after all elements have been switched (if odd array length, the middle value isn't switched)
    var temp = array[i]; //creates a temp variable to temporarily store the value at array[i]
    array[i] = array[array.length-1-i]; //sets the array value at index i to the corresponding array index from the end (it's 'opposite' index)
    array[array.length-1-i] = temp; //sets the 'opposite' array index to the temp value
  }
  return array; //returns the array which has now been reveresed
}

console.log(reverseArray(["A", "B", "C"])); // ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // [5, 4, 3, 2, 1]
