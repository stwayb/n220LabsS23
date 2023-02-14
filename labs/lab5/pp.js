let w=100;
let h=100;

document.getElementById("square").style.backgroundColor = "green";
document.getElementById("square").style.width = w+"px";
document.getElementById("square").style.height = h+"px";

function big(){
w*=1.1;
h*=1.1;
document.getElementById("square").style.width = w+"px";
document.getElementById("square").style.height = h+"px";
}