/*Write a function, deepEqual, that takes two values and returns true only if
 they are the same value or are objects with the same properties whose values
  are also equal when compared with a recursive call to deepEqual*/

  function deepEqual(arg1, arg2){
    if (arg1 === arg2){ //if arg1 === arg2 then return true (if this returns it must mean arg1 and arg2 are not objects)
      return true;
    } else if ((arg1 === null)|| (arg2 === null)){ //adds if statement to check if either arguements are null and returns false if one is
      return false;
    } else if ((typeof arg1 === 'object') && (typeof arg2 === 'object')){ //if arg1 and arg2 are objects then checks the number of their properties and contents of those properties to see it true
      var numPropArg1 = 0;
      var numPropArg2 = 0; //delcares two variables that will store the amount of properties in the two objects
      for (var prop in arg1){ //counts the number of properties in arg1
        numPropArg1 ++;
      }
      for (var prop in arg2){
        numPropArg2 ++; //counts number of properties in arg2
        if ((prop in arg1) === false || (deepEqual(arg1[prop], arg2[prop]) === false) ){ //use recursion to check for all same properties in arg1 and arg2 and if their contents are equal. Also checks if there is a same property in arg1
          return false; //return false if any value in a similar property is false
        }
      }
      return numPropArg1 === numPropArg2; //if number of properties are the same and their contents (as checked earlier) are too, then it will return true
    }else{ //else return false
      return false;
    }
  }

  var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, {here: 1, object: 2})); // false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); //true
