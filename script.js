var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ", " 
	+ color3.value
	+ ")";

	css.textContent = body.style.background + ";";
}
function changeColorInput(){
	let color = document.getElementById("inputColor").value;
	document.body.style.backgroundColor = color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);