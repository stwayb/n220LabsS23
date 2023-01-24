// create all variables needed

// setup funtion to create the canvas
function setup(){
    createCanvas(800,800);
}
// polarPoint(r) funciton with the srgument r
function polarPoint(r){
    // creates an x and y variable and sets them to the sin and cos of the mouseX*r
    let x=r*Math.sin(mouseX);
    let y=r*Math.cos(mouseX);
    // returns a vector at the new x,y position
    return createVector(x,y);
}

// draw function
function draw(){
    let res=polarPoint(80);



    fill(1);
    circle(100,100,4);
    translate(100,100);
    fill(255);
    circle(res.x,res.y,10);
}
    // created the res object with the x and y values from the polarPoints function

    // draw a circle at res coordinates 