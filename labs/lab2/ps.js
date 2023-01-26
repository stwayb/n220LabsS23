//variable for color options
let t=0;

function setup(){
    createCanvas(400,300);
}

function draw(){
    //redraws the background
    background(255);

    //checks if on left or right of screen and sets color accordingly
    if(mouseX<200){
        fill(0,0,255);
    }
    else{
        fill(255,0,0);
    }
    //draws the puck
    circle(mouseX,mouseY,30);
}