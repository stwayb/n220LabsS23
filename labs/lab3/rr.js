
// setup function to create the canvas
function setup(){
    createCanvas(800,800);

}
// buid the noRed() function that gets rid of the red value of a color
 function noRed(color){
    let nrColor = color
    nrColor.setRed(0);
    return(nrColor); 
}
// draw function
function draw(){
    // calls the noRed() function with the argument of a given rgb color
    let noRedC1 = noRed(color(255,255,255));
    // sets the fill to the new red-less color
    fill(noRedC1);
    // draws a circle of that color
    circle(mouseX,mouseY,10);
}