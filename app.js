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

var board = document.getElementById('grid');
// console.log(board)
var tiles = document.getElementsByTagName('td');
console.log(tiles)


p1={
	name:'',
 	color:'red'
 };

p2={
 	name:'',
 	color:'black'
 };
player = 1
//REMEMBER TO UNCOMMENT THE PROMPT OTHERWISE YOUR FUCKED
p1.name=prompt('Player1 What is your name?');
console.log(p1.name);
p2.name=prompt('Player2 What is your name?');
console.log(p2.name);
alert("So it'll be " + p1.name + ' vs ' + p2.name)
alert(p1.name+ ' will be red, and ' + p2.name + ' will be black');


p1clicks=[];
p2clicks=[];

var clickcount = 0;
var trackclick = board.addEventListener('click',
	function(){
		clickcount++;
		clickcount=clickcount ++;
		console.log(clickcount);
});

$(".column").click(function(){
	// console.log("hi");
	var cselect = $(this);
	cselect.addClass('clicked');
if(player === 1){
	cselect.addClass('x');
	player = 2;
}else{
	cselect.addClass('o');
	player = 1;
}
});

checkforwin = function(){
	switch(click){
		case 1: horizontalwin;
		alert('you win')
		break;
		case 2: verticalwin:
		alert('you win')
		break;
		case 3: diagonalwin
		alert('you win')
		break;
		default:
		alert('its a tie')
	}
}

horizontalwin=[
[39,40,41,42],
[38,39,40,41],
[37,38,39,40],
[36,37,38,39],
[35,34,33,32],
[34,33,32,31],
[33,32,31,30],
[29,30,31,32],
[28,27,26,25],
[27,26,25,24],
[26,25,24,23],
[25,24,23,22],
[21,20,19,18],
[20,19,18,17],
[19,18,17,16],
[18,17,16,15],
[14,13,12,11],
[13,12,11,10],
[12,11,10,9],
[11,10,9,8],
[7,6,5,4],
[6,5,4,3],
[5,4,3,2],
[4,3,2,1]
]

verticalwin=[
[36,29,22,15],
[29,22,15,8],
[22,15,8,1],
[37,30,23,16],
[30,23,16,9],
[23,16,9,2],
[38,31,24,11],
[31,24,11,10],
[24,11,10,3],
[39,32,25,18],
[32,25,18,11],
[25,18,11,4],
[40,33,26,19],
[26,19,12,5],
[41,34,27,20],
[34,27,20,13],
[27,20,13,6],
[42,35,28,21],
[35,28,21,21],
[28,21,14,7]
]

diagonalwin=[
[39,31,23,15],
[40,32,24,16],
[32,24,16,8],
[41,33,25,11],
[33,25,11,9],
[25,11,9,1],
[42,34,26,18],
[34,26,18,10],
[26,18,10,2],
[35,27,19,11],
[27,19,11,3],
[28,20,12,4],
[22,16,10,4],
[29,23,17,11],
[23,17,11,5],
[36,30,24,18],
[30,24,18,12],
[24,18,12,6],
[37,31,25,19],
[31,25,19,13],
[25,19,13,7],
[38,32,26,20],
[32,26,20,14],
[39,33,27,21]
]




// $(canvas).click(function(){
// 	canclick= $(this).attr('id');
// 	cannum= canclick - 1;
// 	canUpId= $(this).attr('id') - 7;
// 	canUp = $(this).parent().parent().prev().find('#' + canUpId);
// 	if(canclick > 35 || $(this).hasClass('empty')){
// 		$(this).attr('class','chip');
// 		canUp.attr('class', 'empty');
// 		circle(red);
// 	}
// }).dblclick(function(){
// 	if(canclick >35 || $(this).hasClass('empty') || $(this).hasClass('chip')){
// 		$(this).attr('class', 'chip');
// 		canUp.attr('class', 'chip');
// 		circle(black);
// 	}
// });
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
// I suck at making a turn counter, because of modulas
// what if a single click is red
// and a double click is black
// I would just make an alert page to tell the user
// Yo fam red is one click
// Black is 2 clicks juuuu heard


//IN THE CANVAS CODE YOU HAD A FUNCTION WITH SINGLE CLICK 
//AND DOUBLE CLICK
//IF YOU CAN REWORD IT AND PUSH THE CLICKS TO AN P1/P2 ARRAY
//AND ADD A COLOR TO THE DIV




});

// CANVAS CODE
//this will go in your counter
// if(counter >=42){
// 	alert('Its a draw, game over');
// }
//able to get canvas elements via array
//so canvas[0] and such
// var canvas = document.getElementsByTagName('canvas');
// var red = 'rgb(255, 0, 0)';
// var black= 'rgb(0, 0, 0)';

// found this on stack overflow to create circles
// a bit vague for me to understand

// function circle(color, radius, index){
// 	radius = typeof radius !== true ? radius : 48;
// 	index = typeof index !== false ? index:cannum;
// 	// .getContext isnt a function
// 	circle = canvas[index].ctx;
// 	circle.beginPath();
// 	circle.arc(50,50,radius, 0, 2 * Math.PI, false);
// 	circle.fillStyle=color;
// 	circle.fill();
// }
// // var ctx= $(this).find('canvas').get(1).getContext('2d')
// // var context = $(canvas)[1].getContext("2d");
// var ctx = $("canvas")[1].getContext('2d');
// // console.log(ctx)

// //click function time, similar to the one up there but different
// //use tic-tac-toe for reference

// $(canvas).click(function(){
// 	// so all the attributes with id which are canvas's
// 	canclick= $(this).attr('id');
// 	//so the when you click on a canvas it becomes 1 less
// 	cannum= canclick - 1;
// 	//so my function knows it cn place a disc on top
// 	canUpId= $(this).attr('id') - 7;
// 	//so lets say I click on the most bottom left tile,
// 	//i want to be able to get that tile on top
// 	//thus simulating gravity
// 	//this makes it easier to get the next canvas because 
// 	//the canvas's are in separate divs
// 	//parent directory
// 	// WHY ISNT THIS WORKING
// 	canUp = $(this).parent().parent().prev().find('#' + canUpId);
// 	//if the player can click/put a piece on top
// 	//after 35 it would be the last row
// 	//row wrap e id 35
// 	if(canclick > 35 || $(this).hasClass('empty')){
// 		//adds has a chip
// 		$(this).attr('class','chip');
// 		//adds you can place after a click
// 		canUp.attr('class', 'empty');
// 		circle(red);
// 	}
// }).dblclick(function(){
// 	//found out about the dble click and its a lazy way
// 	//instead of writing a click counter
// 	//pretty much the same syntax except circle becomes black 
// 	if(canclick >35 || $(this).hasClass('empty') || $(this).hasClass('chip')){
// 		$(this).attr('class', 'chip');
// 		canUp.attr('class', 'chip');
// 		circle(black);
// 	}
// });

// CHANGING PARENTS FUNCTION UGH
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



