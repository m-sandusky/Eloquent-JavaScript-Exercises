//Looping a Triangle - Write a loop that makes seven calls to console.log to outout the following triangle
/*
#
##
###
####
#####
######
#######
*/


var triangle = '#'; //declare a variable triangle
for (var i = 1; i <= 7; i++){
  console.log(triangle); //log the variable triangle
  triangle += '#';  //add a sharp symbol to triangle
};
