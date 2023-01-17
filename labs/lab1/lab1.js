function setup() {
    createCanvas(800,600);
    background(255,100,255);
    let x =500;
    rect(x,0,30,100);
}

let r=0;
let y=0;
let z=0;
function draw() {
    y++;
    r++;
    if(y==60){
        y=0;
        z++;
    }

    if((z%2)==0){
        background(255,100,255);
    }

    if((z%2)==1){
        background(100,255,255);
    }
    rect(r,10,20,20)
}

