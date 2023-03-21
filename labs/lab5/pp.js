// creates variables for the width and height
let w=100;
let h=100;

// sets the initial color and size
document.getElementById("square").style.backgroundColor = "green";
document.getElementById("square").style.width = w+"px";
document.getElementById("square").style.height = h+"px";


// when called it multiplies the width and height by 1.1 and updates it on screen
function big(){
w*=1.1;
h*=1.1;
document.getElementById("square").style.width = w+"px";
document.getElementById("square").style.height = h+"px";
}