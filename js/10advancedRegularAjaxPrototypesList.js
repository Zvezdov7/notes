Advanced features

REGULAR EXPRESSIONS

var myRE = /hello/;

//or
var myRE = new  RegExp("helo");

var myString = "Does this sentence have the word hello in it?";
if (myRE.test(myString) ) {
	alert("Yeap");
}


PATTERNS

var myRE = /^hello/; // ^ at the start

var myRE = /hello$/; // $ at the end

var myRE = /hel+o/; // prev char + once or more

var myRE = /hel*o/; // prev char * zero or more

var myRE = /hel?o/; // prev char ? zero or one

var myRE = /hello|goodbye/; // either | or

var myRE = /he..o/; // any . character

var myRE = /\wello/; // \w alphanumeric or _

var myRE = /\bhello/; // \b word boundary

var myRE = /[crnld]ope/; // [...] range of chars

 MORE COMPLEX PATTERNS

 var usZip = /^[0-9]{5}(?:-[0-9]{4})?$/;


 AJAX // JS technics

 Asynchronous JavaScript And XML

 Ajax == JS

1. Create the request
2. Deal with any response

var myRequest = new XMLHttpRequest();

var myRequest;
if (window.XMLHttpRequest) {
	myRequest = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
	myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

myRequest.onreadystatechange = function() {
	console.log("We were called!");
	console.log(myRequest.readyState);
	if (myRequest.readyState === 4) {
		var p = document.createElement("p");
		var t=  document.createTextNode(myRequest.responseText);
		p.appendChild(t);
		document.getElementById("mainContent").appendChild(p);
	}
};

myRequest.open("GET", "http://.mysite.com/somedata.php", true); // simple.txt
myRequest.send(null);

//......


OBJECTS PROTOTYPES

prototypejs.org 


function Player(n, s, r ) {
	this.name = n;
	this.score = s;
	this.rank = r;
}

Player.prototype.logInfo = function() {
	console.log("I am: " , this.name);
}
Player.prototype.promote = function() {
	this.rank++;
	console.log("My new rank is: " , this.rank);
}
 
var fred = new Player("Fred", 10000, 5);
fred.logInfo();
fred.promote();



developer.mozilla.org/
jQuery.com
developer.yahoo.com/javascript
developer.yahoo.com/perfomance


27 мая 2016 года












