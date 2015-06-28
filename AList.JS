/*Write a function arrayToList that builds up a data structure like the previous
 one when given [1, 2, 3] as argument, and write a listToArray function that
 produces an array from a list. Also write the helper functions prepend, which
  takes an element and a list and creates a new list that adds the element to
  the front of the input list, and nth, which takes a list and a number and
  returns the element at the given position in the list, or undefined when
  there is no such element*/

  function prepend(element, list){
    list = {value: element , rest: list}; //creates a list with properties value adn rest. Assigns element to the value property and the list to the rest property
    return list; //returns a new list with the prepended element
  }

  function arrayToList(array){
    var list = {value: array[array.length-1], rest: null}; //creates the end of the list
    for (var i = array.length-2; i>=0; i--){ //loops over the elements of the array (starts with the second to last element since it is part of the initial list already)
      list = prepend(array[i], list); //uses prepend function to add elements of the array and prepended elements of the list
    }
    return list; //return the new list made from the array
  }

  function listToArray(list){
    var array = []; //creates the new array which is initially empty
    while (list !== null){ //a while look that terminates if the list is = to null (at the end of the list)
      array.push(list.value); //adds elements to to the array equal to values found in the value property of the list
      list = list.rest; //sets the list equal to the value of its rest property (thereby moving along the linked list)
    }
    return array; // returns the new array
  }

  function nth(list,number){ //non recursive version of the nth function
    if (number === 0){ //if index is 0, returns the first value of the value property of the first list in the linked list chain
      return list.value;
    };
    for (var i = 1; i <= number; i++){ //loops from the first list in the linked list chain and ends at the specified number index value
      list = list.rest; //sets the list equal to its rest property effectivley moving along the list chain
      if (list === null){
        return "Error there is no value at that index number"; //if list is null, it means that there are not enough lists in the list cahin for that index value
      }
    }
    return list.value; //retuns the value of the value property once the appropriate list has been reached in the list chain
  }

  console.log(arrayToList([10, 20]));//{value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));//[10, 20, 30]
  console.log(prepend(10, prepend(20, null))); //{value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1)); //20
