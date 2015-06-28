/*A program that creates a string that represents an 8x8 grid, using newline
characters to separate lines. At each position there is either a space or a #
character. The characters should form a chess board. Define a variable size = 8
and change the program so that it works for any size, outputting a grid of the given width and height*/

var size = 8; //declare a variable that deetermines the size of the grid (size x size)
var board = ""; //declare the board variable as an empty string
var count = 0; //declare a count variable that keeps track of which string to add to the board (" " or "#")

for (var y = 0; y < size; y++){     //Loops to add a row of elements over the length of the variable 'size'
  for (var x = 0; x < size; x++){  //Loops to add elements to a row over the length of the variable 'size'
    if (count % 2 === 0){ //if count is even then add " " to board and increase count
      board += " ";
      count++;
    } else{              //else add # to board and increase count
      board += '#';
      count++;
    }
  }
    board += "\n";     //after loop (row) is finished, start a new line
    if (size % 2 === 0){count++;} //checks if board size is even and adds to the count if so
  }

  console.log(board); //outputs the board
