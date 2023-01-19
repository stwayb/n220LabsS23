function setup(){
    createCanvas(400,800);
}

function draw(){

    background(0,0,0);


    noStroke();
    triangle(20,30,40,30,30,0);
    triangle(10,25,50,25,30,10);
    rect(15,5,4,20);
    rect(40,5,4,20);

    fill(235,89,106);

    rect(15,5,4,4);
    rect(40,5,4,4);

    triangle(25,25,35,25,30,5)
    
     circle(mouseX,mouseY,s);
}