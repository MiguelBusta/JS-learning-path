/*
* Chessboard

Write a program that creates a string that represents an 8x8 grid,
using new line characters to separate lines. At each position of the grid there is either a space or a # character.
The characters should form a chessboard.
Passing this string to console.log() should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binging size = 8
and change the program so that it works for any size, outputting a grid of the given width and height.
*/

function generateChessboard(size) {
    let chessboard = "";

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            // Determine if the current position should be a space or a #
            if ((row + col) % 2 === 0) {
                chessboard += " ";
            } else {
                chessboard += "#";
            }
        }
        // Add a newline character at the end of each row except the last one
        if (row < size - 1) {
            chessboard += "\n";
        }
    }

    return chessboard;
}

// Set the size of the chessboard
let size = 8; // You can change this to any size
console.log(generateChessboard(size));
