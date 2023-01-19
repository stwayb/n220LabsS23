function setup(){
    createCanvas(400,800);
}

let s=5;
let r=255;
let g=0;
let b=255;

function draw(){

    if(mouseIsPressed&&s<50){
        s=s+1;
        r-=4;
        g+=5;
        b-=3;   
    }
    background(r,g,b);
    circle(mouseX,mouseY,s);
}