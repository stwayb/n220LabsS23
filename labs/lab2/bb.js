/* Algorithm Check - The goal of this project is to create a program that keeps a ball bouncing around in a box.
I plan on doing this by checking where the ball is and changing it depending on if it is over the border or not */


// Ball position
let x=0;
let y=0;

// Ball move speed
let xAccel=-5;
let yAccel=-5;

// counts the frames
let frame=0;

// Color variabes
let r=255;
let g=100;
let b=255;


// Runs once to set up the screen
function setup(){
    //creates a 800x600 canvas
    createCanvas(800,600);
}


// runs 60 times a second
function draw(){

    //Counts 1 each frame
    frame+=1;

    // Makes the ball start within the border of the box not cliiping throught the border
    let xPosition = (x+12)
    let yPosition = (y+50)

    // Checks the various walls to see if the ball is overlapping or past said border and if so reveres the direction
    if(xPosition>=788){
        xAccel*=-1;
        r=66;
        g=95;
        b=250;
    }
    if(yPosition>=588){
        yAccel*=-1;
        r=255;
        g=30;
        b=30;
    }
    if(xPosition<=12){
        xAccel*=-1;
        r=70;
        g=250;
        b=20;
    }
    if(yPosition<=12){
        yAccel*=-1;
        r=255;
        g=100;
        b=255;
    }

    //Creates a box with a border of 6 and a fill of white
    background(200,200,200);
    stroke(0);
    strokeWeight(6);
    fill(255,255,255);
    rect(0,0,800,600);

    //Flips the direction of the ball on the x axsis when the user clicks
    if(mouseIsPressed&&frame>=60){
        xAccel*=-1;
        print(frame+"frame");
        frame=0;
        print("click");
    }

    //Moves the ball
    x+=xAccel;
    y+=yAccel;

    //makes the ball have no border
    noStroke();

    //colors and creates the ball
    fill(r,g,b);
    circle(xPosition,yPosition,20);
    
}