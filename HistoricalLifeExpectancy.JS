/*Compute and output the average age of the people in the ancestry data set per
 century. A person is assigned to a century by taking their year of death,
 dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

 For bonus points, write a function groupBy that abstracts the grouping
 operation. It should accept as arguments an array and a function that computes
  the group for an element in the array and returns an object that maps group
  names to arrays of group members.*/

var ancestry = JSON.parse[ANCESTRY_FILE]; //parses the ANCESTRY_FILE string

function groupBy(array, f){
  var grouped = {}; //creates an empty object where we will create the groups
  array.forEach(function(element){
    var category = f(element); //for each element on the array passed, we perform a certain function on that element to determine the group and store the group value a variable called category
    if (grouped.hasOwnProperty(category)){
      grouped[category].push(element);
    }
    else{
      grouped[category] = [element];
    }
  }); //If the object group has a property called category, then we push element (array[i]) into the array of that property. Otherwise we create a property named after the category and set it equal to an array containing element (array[i])
  return grouped; //returns the grouped object
  }

var groupedByCentury = groupBy(ancestry, function(person){
  return Math.ceil(person.died/100);
}); //call the groupBy function, storing it in a new object, and passing in the ancestry array and a function that determines the century in which a person died (defining the person's group)

for (century in groupedByCentury){ //for each property(group) in our object...
  var temp = groupedByCentury[century].map(function(person){return person.died - person.born;}); //map each element in the array tranforming the value to equal how old the person was by accessing the died and borm properties of the element
  groupedByCentury[century] = average(temp); //reduce the array and take the average of all elements of the array
};

console.log(groupedByCentury); //print object that has been mapped and reduced

/*expected output
{
16:	43.5
17:	51.2
18:	52.78947368421053
19:	54.833333333333336
20:	84.66666666666667
21:	94
}
*/

//second attempt

function groupBy(array, grouping){
  var grouped = {};
  array.forEach(function(element){
    var tempGroup = grouping(element);
    if(tempGroup in grouped){
      grouped[tempGroup].push(element);
    } else {
      grouped[tempGroup] = [element];
    }
  });
  return grouped;
}

var grouped = groupBy(ancestry, function(person){
  return Math.ceil(person.died/100);
});

for (var key in grouped){
  grouped[key] = average(grouped[key].map(function(person){
    return person.died - person.born;
  }));
};

console.log(grouped);

 /*expected output
 {
 16:	43.5
 17:	51.2
 18:	52.78947368421053
 19:	54.833333333333336
 20:	84.66666666666667
 21:	94
 }
 */
