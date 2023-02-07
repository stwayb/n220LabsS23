//Create needed variables

//Run setup function to create the canvas

function setup(){
    createCanvas(800,600);
}

//Create buildCar(x,y) function to create the car at the given position

function buildCar(x,y){
    fill(255,0,0);
    rect(x,y+10,30,20,5,5,0,0);
    fill(0,0,0);
    circle(x,y+30,10);
    circle(x+30,y+30,10);
    square(x+20,y+10,10,0,5,0,0);
}
//draw() function

function draw(){
    //Color the background to make the car not leave a trail
    background(255);
    //call the build car function with the arguments of whatever x andy position i want it to have
    buildCar(mouseX,mouseY);
    buildCar(mouseX+80,mouseY+300);
    buildCar(mouseX-250,mouseY+210);
    buildCar(mouseX-80,mouseY-10);
    buildCar(mouseX+40,mouseY-90);
}

