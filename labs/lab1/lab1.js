function setup() {
    createCanvas(800,600);
    let x =500;
    rect(x,0,30,100);
}

let r=1;
let t=0;
let y=0;
let z=0;
let j=0;
function draw() {
    y++;

    if(t==0){
        r++;
    }
    if(t==1){
        r--;
    }
    if(r==780){
        t=1;
    }
    if(r==0){
        t=0;
    }

    if(y==60&&t==0){
        y=0;
        z++;
    }

    if(y==60&&t==1){
        y=0;
        j++;
    }

    if((z%2)==0&&t==0){
        background(255,100,255);
    }

    if((z%2)==1&&t==0){
        background(100,255,255);
    }
    

    if((j%2)==0&&t==1){
        background(255,100,100);
    }

    if((j%2)==1&&t==1){
        background(100,100,255);
    }
    


    rect(r,10,20,20)
}

