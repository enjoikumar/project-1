console.log("ice cream")

//	Project Plan
// PsuedoCode it all out on Tuesday which includes the logic, and knowing what to do. 
//Breaking down every aspect into doable steps

// Tuesday:PsuedoCoding and basic css styling
// Wednesday: Get the java down step-by-step
// the beginning: player inputs
// middle: making the columns correspond to clicks
// end: check for win and a reset button
// Thursday: Css styling and line by line reading finding any type of bug
// YOU'RE NEVER GONNA BE AHEAD OF SCHEDULE, IF YOU'RE DONE
// WORK ON THE NEXT ASPECT
// Maybe a user story to better depict what will go on to better understand the logic
// Wire framing for layout purposes
// Jquery option?

//Requirements
// Two different colors for players (red & black)
// A 2 player game
// The game board should have 7 columns and 6 rows
// Simulating gravity / Only when a row is clicked should a piece move all the way down the column to the next available spot
// So many different winning combinations
// Need to keep in mind of diagonals and such
// That will go in for check/win
// Reset button(window.reload)
// Declare winner to go with the winning combination
// Alert 'name' won at the end or alert 'it’s a tie'
// Require set name
// Make player1/2 an object=name:''/color:'red/black'
// CSS should be taken in consideration last
// But I need to be able to have rows and columns with the grid have circles in it
// Or making a game with boxes, much easier if you cant get the circular tiles to work
// I want the name input to say player1 vs player2 (kk vs cc)
// There are only 42 moves, and each player has 21 moves

// how does the game work:
// 2 players one red one black
// on clicking a column, will add thier tile
// to the bottom of the column
// once connecting 4 there will be a winner


$(document).ready(function() {
 p1={
 	name:'',
 	color:'red'
 };
 p2={
 	name:'',
 	color:'black'
 }
// prompt('player1 whats your name')
// var input=p1.name;
// prompt('player2 whats your name')
// input=p2.name;	












});
//psuedo:planning
// two players- player1 and player2; lets say p1 is red and p2 is black
// and both players would be object oriented, meaning
// player1={
// 	name:'',
// 	color:'red'
// }
// player2={
// 	name:'',
// 	color:'black'
// }
// we got the name
// there are rows and columns, rows are clickable, and columns to check for winners
// 7 rows 6 columns
// every click should have this, so every click will add 
// that column/row combo to an array
// that array will be filtered through a winning array to check win
// but there needs to be three arrays to check for win
// a horizontal fashion, vertical, and diagonals
// NEED TO CREATE FUNCTIONS WITHIN FUNCTIONS FOR THE CHECK FOR WIN
// NEED TO CREATE A MULTIDIMENSIONAL ARRAY
// BE ABLE TO CREATE A FUNCTION THAT WHEN CLICKED IT WILL ADD THAT COLOR
// AND PUSH THAT ID TO AN ARRAY FOR THE CHECK FOR WIN FUNCTION
// TURN COUNTER
// P1 =[WHATEVER TILES P1 CLICKS] 
// P2=[WHATEVER TILES P2 CLICKS]
// 69 total win combinations


//PROCESS
//input, player 1 and 2 start, thier names get entered and then maybe displayed
//p1 starts, when he clicks on a row it adds a red tile all the way to the bottom
//a click function that adds that clicked tile to the P1/P2 array
//p1/p2 will push red/black to the row
//maybe a true/false for turn counters
//the hardest part will making the color go all the way to the bottom
//and the check for win function



