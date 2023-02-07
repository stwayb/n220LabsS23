//Create eye object
const eye={
    x:100,
    y:100,
    radius:50,
};



//Run setup function to create the canvas
function setup(){
    createCanvas(800,600);
    background(100);
}

//Function to create an eye given an object

function buildEye(eyeObject){
    fill(0);
    circle(eyeObject.x,eyeObject.y,eyeObject.radius);
    fill(255);
    circle(eyeObject.x,eyeObject.y,eyeObject.radius-2);
    fill(0);
    circle(eyeObject.x,eyeObject.y,eyeObject.radius-30);
    fill(255);
    circle(eyeObject.x,eyeObject.y,eyeObject.radius-40);
}
//draw() function

function draw(){
    //call the build eye function with the created eye object
    buildEye(eye);
}

