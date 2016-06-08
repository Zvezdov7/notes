Forms

TextArea

main property
myTextField.value
main events
onfocus();
onblur();
onchange();
onkeypress();
onkeydown();
onkeyup();

Checkbox

main property
myCheckBox.checked
main events
onclick();

Select lists

main property
mySelect.type
mySelect.selectIndex
mySelect.options[x].selected();

main events
onchange();

FORM

main events
onsubmit();

return false;

function prepareEventHandlers() {
	document.getElementById("frmConcact").onsubmit = function() {
		if (document.getElementById("email").value == "") {
			document.getElementById("errorMessage").innerHTML = "Please stop it";
			return false;
		}
		else {
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}

function preparePage() {
	document.getElementById("brochures").onclick = function() {
		if (document.getElementById("brochures").checked) {
			//use CSS to show it
			document.getElementById("tourSelection").style.display = "block";
		}
		else {
			document.getElementById("tourSelection").style.display = "none";
		}
	};
	document.getElementById("tourSelection").style.display = "none";
}

window.onload = function() {
	prepareEventHandlers();
	preparePage();
}