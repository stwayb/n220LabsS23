// Creates the variable for the last click
let aou;

// Setups the canvas and makes aou a vector
function setup() {
  aou=createVector(0,0);
  createCanvas(400, 400);
}

function draw() {
    //re draws the background each frame
    background(220);
  
    // if the mouse is clicked then it sets the x,y of the aou vecotr to be that of the most recent click
    if(mouseIsPressed) {
        aou.x = mouseX;
        aou.y = mouseY;
    }
  
    //creates the zah variable which is the distance from the current mouse position and the last click
    let zah = distance( aou, { x: mouseX, y: mouseY });
    
    // if the zah distance is over 120 then it makes the line red otherwise it is made black
    if(zah > 120) {
        stroke("#FF0000");
    } else if(zah<120) {
        stroke("#000000");
    }
    
    //draws a line from the last click to ther curent position
    line(aou.x, aou.y, mouseX, mouseY);
}

//function to find the distacne between two points
function distance(p1, p2) {
    
    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;
    
    //return the distance
    return(Math.sqrt(dx*dx + dy*dy));
}