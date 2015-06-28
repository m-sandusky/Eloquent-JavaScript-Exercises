/*Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to make
use of this new function. */

function countBs(str){
  var count = 0; //declare the count variable and set it equal to 0
  for (var i = 0; i < str.length; i++){ //a for loop that loops over the length of the string parameter
    if(str.charAt(i) === 'B'){
      count++; //if a character at index'i' = 'B' then increase count
    }
  }
  return count; //after loop is complete, return count
}

function countChar(str,char){
  var count = 0; //declare the count variable and set it equal to 0
  for(var i = 0; i < str.length; i++){ //a for loop that loops over the length of the string parameter
  if(str.charAt(i) === char){
    count++; //if a character at index'i' = the char parameter then increase count
  }
}
  return count;
}

//rewrote countBs to use countChar, assigned new name countBsNew. Doe
function countBsNew(str){
  return countChar(str, 'B');
}

console.log(countBs("BBC")); // 2
console.log(countChar("kakkerlak", "k")); // 4
console.log(countBsNew("BBC")); //2
