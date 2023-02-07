
// Ball position
const ball ={
    x:12,
    y:12,
    xAccel: -5,
    yAccel: -5
};

// Runs once to set up the screen
function setup(){
    //creates a 800x600 canvas
    createCanvas(800,600);
}


// runs 60 times a second
function draw(){

    // Checks the various walls to see if the ball is overlapping or past said border and if so reveres the direction
    if(ball.x>=790){
        ball.xAccel*=-1;
    }
    if(ball.y>=590){
        ball.yAccel*=-1;
    }
    if(ball.x<=10){
        ball.xAccel*=-1;
    }
    if(ball.y<=10){
        ball.yAccel*=-1;
    }

    //Creates a box with a border of 6 and a fill of white
    background(200,200,200);
    stroke(0);
    strokeWeight(6);
    fill(255,255,255);
    rect(0,0,800,600);


    //Moves the ball
    ball.x+=ball.xAccel;
    ball.y+=ball.yAccel;

    //makes the ball have no border
    noStroke();

    //colors and creates the ball
    fill(180);
    circle(ball.x,ball.y,20);
    
}