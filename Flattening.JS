/*Use the reduce method in combination with the concat method to “flatten” an
 array of arrays into a single array that has all the elements of the input arrays. */

 var arrays = [[1, 2, 3], [4, 5], [6],["sfsdfsdf"],[45,4,34]];//create an array of arrays that we want to combine

 console.log(arrays.reduce(function(current, reducedArray){return current.concat(reducedArray);})); //[1, 2, 3, 4, 5, 6, "sfsdfsdf", 45, 4, 34]
 
