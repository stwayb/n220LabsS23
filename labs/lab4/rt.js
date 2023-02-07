//Create needed variables
const racL={
    x:20,
    y:90,
    width:6,
    height:20
};
const racR={
    x:374,
    y:90,
    width:6,
    height:20
};

//Run setup function to create the canvas
function setup(){
    createCanvas(400,200);
}


//draw() function
function draw(){
    if (keyIsDown(UP_ARROW)) {
        racL.y+=2;
        racR.y-=2;
    }
    
    if (keyIsDown(DOWN_ARROW)) {
        racL.y-=2;
        racR.y+=2;
    }

    //Color the background to make the car not leave a trail
    background(255);
    rect(racR.x,racR.y,racR.width,racR.height);
    rect(racL.x,racL.y,racL.width,racL.height);
}

