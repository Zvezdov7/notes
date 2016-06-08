4eventDOMlist

element.event = 

onload
onclick
onmouseover
onblur
onfocus

window.onload...
nameField.onblur...

myelement.onclick = function() {
	// ...
}; //!!!
 

document.addEventListener('click', myFunction, false);

//IE 8 and prev
document.attachEvent('onclick', myFunction);


// crossBrowser code
function addCrossBrowserEventListener(elementName, eventName, functionName) {
	if (elementName.addEventListener) {
		elementName.addEventListener(eventName, functionName, false);
		return true;
	}
	else {
		elementName.attachEvent("on" + eventName, functionName);
		return true;
	}
}


document.onclick = function() {
	alert("U clicked");
}

function preparedEventHandlers() {
	var myImage = document.getElementById("mainImage");
	myImage.onclick = function() {
		alert("The image");
	}
}



window.onload = function() {
	// anything
	preparedEventHandlers();

}


ONFOCUS ONBLUR

var emailField = document.getElementById9("email");

emailField.onfocus = function() {
	if (emailField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if (emailField.value == "") {
		emailField.value = "your email";
	}
}

function simpleMessage() {
	alert("Something");
}

setTimeout(simpleMessage, 5000); // single time


var myImage = document.getElementById("myImage");
var imageArray = ["img1", "img2", "img3", "img4", "img5", "img6"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage, 5000); // multiple time

myImage.onclick = function() {
	clearInterval(intervalHandle);
}







