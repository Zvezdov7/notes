
HTML5

Video support
Audio support
Canvas element
Offline storage
New form elements
Drag-and-Drop
Geolocation
Local storage

New objects and methods in Js


www.caniuse.com


Js additons

var a = document.getElementById("mainTitle");
var b = document.getElementsByTagName("li");

// NEW!!! //

var c = document.getElementsByClassName("myclass");
var d = document.getElementsByClassName("first second");

<video id="myVideo" controls preload="auto">
	<source src="video1" type="video/mp4" />
	<source src="video2" type="video/webm" />
	<source src="video3" type="video/webm" />
	<!-- if video is not supported -->
	<p> Your browser does not support HTML5 video. </p>
</video>

.play();
.pause();
.currentTime = 0;

myVideo.addEventListener("ended", function() {
	// some code
}, false); // "play", "pause"


// !!! Course
Lynda.com HTML5: Video and audio in Depth

STORAGE 

//set
localStorage["username"] = name;
//get
var name = localStorage["username"];

OFFLINE STORAGE | Web SQL | IndexDB

// !!! Course
Lynda.com HTML5: Local Storage and Offline Applications in Depth


WEB WORKERS 

var worker = new Worker("anotherjavascriptfile.js");

// get ready to revieve messages from the worker
worker.onmessage = function(e) {
	console.log("The worker called me!");
};

worker.postMessage("firstFunction");

FEATURE DETECTION
if (document.getElementsByClassName) {
	// it exists, we can use it
}
else {
	// it doesn't exist on this browser
}

MODERNIZER //library
if (Modernizr.video) {
	//yes
} 
else {
	// No
}

STRICT MODERNIZER
"use strict";
  


























