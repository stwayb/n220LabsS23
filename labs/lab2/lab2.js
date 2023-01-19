let x=0;
let y=0;
let xAccel=-1;
let yAccel=-1;
let frame=0;
let r=255;
let g=100;
let b=255;



function setup(){
    createCanvas(300,200);
}

function draw(){
    frame+=1;

    let xPosition = (x+12)
    let yPosition = (y+50)

    if(xPosition>=288){
        xAccel*=-1;
        r=66;
        g=95;
        b=250;
    }
    if(yPosition>=188){
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

    background(200,200,200);
    stroke(0);
    strokeWeight(6);
    fill(255,255,255);
    rect(0,0,300,200);

    if(mouseIsPressed&&frame>=60){
        xAccel*=-1;
        print(frame+"frame");
        frame=0;
        print("click");
    }

    x+=xAccel;
    y+=yAccel;
    noStroke();
    fill(r,g,b);
    circle(xPosition,yPosition,20);
    
}