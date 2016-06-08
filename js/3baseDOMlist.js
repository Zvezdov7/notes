The DOM

document.getElementById("someId");

var myElement = document.getElementById("abc");

document.getElementsByTagName("a");


var myListItems = document.getElementsByTagName("li"); // Array

var mainTitle = document.getElementById("mainTitle");
console.log("This tupe: ", mainTitle.nodeType);
console.log("This inner html", mainTitle.innerHTML);
console.log("Chields: ", mainTitle.childNodes.length);

myElement.getAttribute("align");
myElement.setAttribute("align", "left");


var mainTitle = document.getElementById("mainTitle");
var sidebar = document.getElementById("sidebar");

var myNewElement = document.createElement("li");
myElement.appendChild(myNewElement);
//myNewElement.innerHTML = "New item text";
var myText = document.createTextNode("New list item text");


var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

var headingText = document.createTextNode("Did U know?");
var paraText = document.createTextNode("Some text will be here");

newHeading.appendChild(headingText);
newParagraph.appendChild(paraText);

document.getElementById("travia").appendChild(newHeading);
document.getElementById("travia").appendChild(newParagraph);


var myNewElement = document.createElement("li");
var secondList = document.getElementsByTagName("li")[1];
myElement.insertBefore(myNewElement, secondList);

