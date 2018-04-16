// Typewriter script for jumbotron section
var i = 0;
var txt = 'Hi, my name is Austin and I enjoy long walks on the beac.. Wait. Wrong site.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
