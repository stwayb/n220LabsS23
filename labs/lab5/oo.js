
//Sets the color and shape of the div
document.getElementById("square").style.backgroundColor = "blue";
document.getElementById("square").style.width = "100px";
document.getElementById("square").style.height = "100px";

//When called changed color of the div to black
function enter(){
document.getElementById("square").style.backgroundColor = "black";
}


//when called changes the color back to blue
function leave(){
    document.getElementById("square").style.backgroundColor = "blue";
}