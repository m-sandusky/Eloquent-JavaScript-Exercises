/*A program that uses console.log to print all the numbers from 1 to 100.
 However, for numbers divisible by 3, prints 'Fizz' instead and for divisible by
 5, prints 'Buzz' instead. For numbers divisible by 3 and 5 print 'Fizz Buzz' instead */

 for (var i = 1; i <= 100; i++){
   if (i % 3 === 0 && i % 5 === 0){ //checks if i is divisble by 3 and 5
     console.log("FizzBuzz"); //prints FizzBuzz
   } else if (i % 3 === 0){ //checks if i is divisble by 3 (and not 5 which is checked earlier in the loop)
     console.log("Fizz"); //prints Fizz
   } else if (i % 5 === 0){ //checks if i is divisible by 5 ( and not 3)
     console.log("Buzz"); // prints Buzz
   } else { //all other cases (numbers not divisible by 3 or 5)
     console.log(i); //prints i
   }
 };
