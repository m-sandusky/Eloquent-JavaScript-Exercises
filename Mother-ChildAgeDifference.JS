/* Using the example data set from this chapter, compute the average age
 difference between mothers and children (the age of the mother when the child
 is born).*/

 //This excerise required the use of ANCESTRY_FILE from Eloquent JavaScript
 function average(array){
   function plus(a,b){return a+b;}
   return array.reduce(plus)/array.length;
 }//function defined in ELoquent JavaScript that reduces and array, adds up the elements and thakes the average based on array length
 var ancestry = JSON.parse[ANCESTRY_FILE]; //parses the ANCESTRY_FILE string

 var byName = {};
 ancestry.forEach(function(person){
   byName[person.name] = person;
 }); //code from Eloquent JavaScript that stores each element of the ancestry array within an object whose properties are the names of each person in the array

 var hasMother = ancestry.filter(function(person){
   return byName[person.mother] != null;
 }); //filters every element in ancestry array by taking every object that actually has a mother and storing in the new hasMother array

 var difference = hasMother.map(function(person){
   return person.born - byName[person.mother]['born'];
 }); //maps each element in the hasMother array by calculating the difference between the element's born value and the element's mother's born value
 console.log(average(difference); //displays the average of the diffrence in ages (by reducing the difference array and taking the average of the values)
//expected output is ~31.2
