//create the color with red in it
let c= color(255);
// setup function to create the canvas
function setup(){
    createCanvas(400,400);
}
// buid the noRed(color1) function that gets rid of the red value of a color
function noRed(color1){
    let nrColor = color1.setRed(0)
    return(nrColor);
}
// draw function
function draw(){
// calls the noRed() function with the argument of color1
let noRedC1 = noRed(c);
// sets the fill to the new red-less color
fill(noRedC1);
// draws a circle of that color
circle(mouseX,mouseY,10);
}