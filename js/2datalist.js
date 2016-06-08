ARRAYS

var multipleValues = [];

multipleValues[0] = 50;
multipleValues[1] = 60;

console.log(multipleValues[1]);

multipleValues = [50, 60, 70];

var newArray = new Array();
var newArray = Array();

console.log(multipleValues.length);

multipleValues.reverse();
multipleValues.join();

var myArrayOfLinks = document.getElementByTagName("a");

NUMBERS

var x = 200;

!!! All JS nubmers are 64-bit floating point numbers.

x = 200.5;

var foo = 5;
var bar = 5;

console.log(foo + bar); // 10

foo = "5";
bar = "5";
console.log(foo + bar); // 55

var myNumber = Number(foo); // make in a number

if (!isNaN(myNumber)) {
	console.log("Is a number");
}


MATH

var x = 200.6;
var y = Math.round(x);

var big = Math.max(var a = 100, var b = 200);
Math.PI;
Math.random(); 
Math.sqrt();
Math.log();

STRINGS

var myString = " Some words here ";
var phrase = "He sain \" that's fine, \" and left.";

console.log(phrase.length);

STRING METHODS

phrase.toUpperCase();
phrase.split(" ");
phrase.indexOf("He");
phrase.slice(0,7); // He sain


REFERENCE 

"http://developer.mozilla.org/en/JavaScript/Reference"

DATES

var today = new Date(); // current date and time

var y2k = new Date(2000, 0, 1); // yar, month, day
var y2k = new Date(2000, 0, 1, 0, 0, 0);

today.getMonth();
today.getFullYear();// YYYY
today.getYear(); //depricated (bad style)
today.getDate(); // 0 - 30 of Month
today.getDay(); // 0-6 of Week
today.getHours();
today.getTime(); // milliseconds since 1/1/1970 (to compare)

set methods !!

var date1 = new Date(2000, 0, 1);
var date2 = new Date(2000, 0, 1)

if (date1.getTime() == date2.getTime() ) { ... } //true

OBJECTS

var player = new Object();
player.name = "Fred";
player.score = 1000;
player.rank = 1;

var player1 = { name: "Fred", score: 1000, rank: 1 };
var player2 = { name: "Sam", score: 100000, rank: 5 };

function playerDetails() {
	//dasplay some info
	console.log(this.name + "has a rank of: " + this.rank);
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();














