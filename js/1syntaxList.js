24 мая 2016 года


if ( a == 50 || d != 100 ) {
	// code here

}


parentheses ()
brackets []
braces {}

var amount = 500;

if ( amount < 1000) {
	alert("It's less than 1000");
}  
else {
	// some else
}

OPERATORS

score +=10;

var a = 5;
var b = "5";

if (a === b){
	alert("They are equal"); // for ==
}
else {
	alert("They are NOT equal"); // for ===
}


if ( a === b && c === d ) {...}
if ( a === b || c === d ) {...}


if (
	(a > b)
	$$
	(c < d)
) {...}


MODULUS

var year = 2003;
var remainder = year % 4; // remainder == 3

alert(++a);

TERNARY

condition ? true : false

var playerOne = 500;
var playerTwo = 600;

var highScore;

highScore = (playerOne > playerTwo) ? playerOne : playerTwo;

CONSOLE

console.log("foo");
console.debug("foo");
console.info("foo");
console.warn("foo");
console.error("foo");

LOOPS

var a = 1;

while ( a < 10 ) {
	console.log(a++);
}

do {
	console.log(a++);
} while ( a < 10 );

for(var i = 0; i < a; i++) {
	//do some stuff
	if (i == 10001) { break; }
	if (i == 100) { continue; }
}

FUNCTIONS 

function createMessage() {
	console.log("We'ra in the function");
}
createMessage();

function myF(x, y) {
	var myV = x * y;
	console.log(myV);
	return myV;
}

myF(300, 300);

var myR = myF(200, 200);
