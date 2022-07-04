# Rock-Paper-Scissors

This is going to be my first attempt at the rock, paper, scissors project from 
TOP. For now it'll just work with the console and it won't have a GUI.


## Array Problem

I was initially going to input and output words from the user and was going to 
get a number from the computer and then output the choice of either rock, paper,
or scissors via a string. In doing this I realized I needed a way to go from a number
to a string and also know something about the number for the player and the number
for the computer that would let me know who won.

## Solution to Problem

I just figured out a solution to the current problem:

get an array that contains Rock, Scissors, Paper in that order.

the computer chooses based on a random number between 0 and 2 (including).
The player chooses via text (which is then converted to a string with the right
properties if needed). And then we loop through the array looking for a match 
until we get one. Then we give the player the corresponding number (position of
their choice in the array). We then compare the numbers to determine the winner.
And use the numbers to get the string that contains the choices to display the 
messages.

## Other things I had to implement

In the process of using arrays I realized via drawing out how to determine a winner
in this game (its a graph with 3 nodes) that there's an easy way to tell who wins.
If the array is set in the order of rock, scissors, and then paper then the position 
of each choice in the array compared to the position of the choice from the computer
can be used to determine the winner. 

We start by enumerating rock as 0, scissors as 1, and paper as 2. Then,
we give the first number to the player and the second to the computer. The player wins
if and only if the computer's choice minus the player's is -1. For the case where
the player chooses paper, and the computer rock (in which case the player should win),
note that a difference of 2 is equivalent to -1 modulo 3. 

This is why I had to make a separate modulo function, as the '%' operator gives out the remainder, not the smallest positive number. This way the player wins if and only
if the difference between the choices modulo 3 is 2.