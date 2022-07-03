# Rock-Paper-Scissors

This is going to be my first attempt at the rock, paper, scissors project from 
TOP. For now it'll just work with the console and it won't have a GUI.

I just figured out a solution to the current problem:

get an array that contains Rock, Scissors, Paper in that order.

the computer chooses based on a random number between 0 and 2 (including).
The player chooses via text (which is then converted to a string with the right
properties if needed). And then we loop through the array looking for a match 
until we get one. Then we give the player the corresponding number (position of
their choice in the array). We then compare the numbers to determine the winner.
And use the numbers to get the string that contains the choices to display the 
messages.