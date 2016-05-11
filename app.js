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

//found out it'd be easier to use canvas and divs,
//than a table because with a table id have to figure out a way
//to cut a circle and insert and such


//AS A USER,
//    WHEN I [INSERT WHATEVER]
//          I SHOULD BE ABLE TO [WHAT YOU NEED TO DO]
//               SHOULD EXPECT TO [AND IT DOES THIS FAM]


$(document).ready(function() {

// var board = document.getElementById('grid');
// console.log(board)

p1={
	name:'',
 	color:'red'
 };

p2={
 	name:'',
 	color:'black'
 };
//REMEMBER TO UNCOMMENT THE PROMPT OTHERWISE YOUR FUCKED
// p1.name=prompt('Player1 What is your name?');
// console.log(p1.name);
// p2.name=prompt('Player2 What is your name?');
// console.log(p2.name);
// alert("So it'll be " + p1.name + ' vs ' + p2.name)
// alert(p1.name+ ' will be red, and ' + p2.name + ' will be black');


// p1clicks=[];
// p2clicks=[];
//.sort method needed when checking for win

// so its easier to call the element 
// var tiles = document.getElementsByTagName('td')
// // console.log(tiles)
// var curRow;
// var curCol;
// var curplayer;	


// this will make the clicks either turn red or black
// function redorblacklistener(){
// 	for(var i = tiles.length - 1; i >= 0; i--){
// 		tiles[i].addEventListener('click',addrob)
// 	}
// 	console.log(counter)
// };

// var counter = 1
// function addrob(event){
// 	if(event.target.innerHTML.length===0){
// 		p1clicks.push(parseInt(event.target.getAttribute('#td')));
// 		event.target.setAttribute('red',[1]);
// 		counter=counter + 1;
// 		// [checkforwin function]
// 	} else {
// 		p2clicks.push(parseInt(event.target.getAttribute('#td')));
// 		event.target.setAttribute('black',[1]);
// 		counter=counter + 1;
// 		// [checkforwin function]
// 	}
// }

// turn counter
// so {player1 = red/true
// 	clicked tiles=[1]}
// 	{player2 = black/false
// 		clicked tiles = [0]}

// unclicked tiles should have and [0] element
// and when theyre clicked they should have [1]
// that way it helps w/ the gravity function and TD/TR


//this will go in your counter
// if(counter >=42){
// 	alert('Its a draw, game over');
// }
var canvas = document.getElementsByTagName('canvas');
var red = 'rgb(255, 0, 0)';
var black= 'rgb(0, 0, 0)';

// found this on stack overflow to create circles
//hard to understand
function circle=(color, radius, index){
	radius = typeof radius !== 'undefined' ? radius : 48;
	index = typeof index !== 'undefined'? index:canvas_numver;
	circle = canvas[index].getContext('2d');
	circle.beginPath();
	circle.arc(50,50,radius, 0, 2 * Math.PI, false);
	circle.fillStyle=color;
	circle.fill();
}

//click function time, similar to the one up there but different
//use tic-tac-toe for reference





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

//.click funtion should add the color to the bottom of the TD element

//====================================================================
//                      GARBAGE CODE
// $(function chips(){
// 	for(var x=0;x<84;x++){
// 		circle(x);
// 	}
// });

// function circle(x){
// 	var circle=document.getElementById('td')
// 	var img=null;
// 	if(x > 41 && x < 63){
// 		img=[red chip]
// 	} else 
// }



