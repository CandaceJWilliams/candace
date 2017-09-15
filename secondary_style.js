var text = ["<b>Hello, I'm Candace. I'm an aspiring programmer</b>", "<b>I enjoy coding because I can create anything with it</b>", "<b>I have skills in mostly frontend such as HTML, CSS, and javascript, but also in Python</b>", "<b>On my journey so far, I have completed: CS111 at BU, an internship at BU Spark!, and another internship at Red Hat</b>", "<b>My hobbies are: cooking, coding, and theorizing about the universe</b>"];
var colors = ["rgb(34, 72, 94)", "rgb(116, 176, 137)", "rgb(240, 230, 151)", "rgb(255, 158, 133)", "rgb(255, 84, 97)"];
var fonts = ["Armata", "Bubbler One", "Bad Script", "'Calligraffitti'", "'Sofia'"];
var slideIndex = 1;
var colorIndex = 1;
var textIndex = 1;
var fontIndex = 1;
showDivs(slideIndex);
color(colorIndex);

function plusDivs(n) {

	showDivs(slideIndex += n);
	color(colorIndex += n);
	choiceText(textIndex += n);
	choiceFont(fontIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";

}

function color(n) {
	var i;
	if (n > colors.length) {colorIndex = 1}
	if (n < 1) {colorIndex = colors.length}
	document.body.style.backgroundColor = colors[colorIndex - 1];	
}

function choiceText(n) {
	var i;
	if (n > text.length) {textIndex = 1}
	if (n < 1) {textIndex = text.length}
	document.getElementById("box").innerHTML = text[textIndex - 1];
}

function choiceFont(n) {
	var i;
	if (n > fonts.length) {fontIndex = 1}
	if (n < 1) {fontIndex = fonts.length}
	document.getElementById('box').style.fontFamily = fonts[fontIndex - 1];
}
