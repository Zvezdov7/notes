//Less JS files as possible

JQuery

document.getElementById("myDiv").className = "highlight";

jQuery("#myDiv").addClass("highlight");
jQuery(".someClass")
jQuery("p")

jQuery("p.description")

:first
:last
:contains()
visible


JQuery Basic

jQuery("#mainArticle").addClass("highlight");

jQuery(".tourDescription").addClass('highlight');

jQuery("li").addClass('highlight');

jQuery("li:last").addClass('highlight');

jQuery("p:contains('packages')").addClass('highlight');


jQuery("what to find").someAction;
 
jQuery("#myDiv").addClass('highlight');
				.removeClass('highlight');
				.toggleClass('highlight'); // Если нет - добавить, если есть - удалить


jQuery = $

$("#myDiv").addClass('highlight');

$("what to find").someAction(any params);
 
$("p").hide(4000);

$("p").fadeOut(4000);


JQuery EVENTS

$("#pageID").click(function() {
		$("#pageID").text("you clicked me");
});

// using the word "this"

$("h2").click(function() {
	$(this).text("you clicked me");
});

 $("p").click(function() {
 	$(this).fadeOut('2000');
 });

$(document).ready(function() {
	$("pageID").text("The DOM is fully loaded");
});

$(document).ready(function() {
	$("h1").css("color", "red");


CDN Benefits
Cache loaded
multiple loaded
code.google.com/apis/libraries/
 




