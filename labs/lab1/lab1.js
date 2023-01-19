function setup() {
    createCanvas(800,600);
}

//Defines all varaibles used 
let r=1;
let t=0;
let y=0;
let z=0;
let j=0;
function draw() {
//counts the frames
    y++;

    
//Makes the car move back and forth
    if(t==0){
        r++;
    }
    if(t==1){
        r--;
    }
    if(r==770){
        t=1;
    }
    if(r==0){
        t=0;
    }

//Tells the color changer to change color every time y hits 60
    if(y==60&&t==0){
        y=0;
        z++;
    }

//Tells the color changer to change color every time y hits 60
    if(y==60&&t==1){
        y=0;
        j++;
    }

//Cycles between cyan and pink if car is moving right
    if((z%2)==0&&t==0){
        background(255,100,255);
    }

    if((z%2)==1&&t==0){
        background(100,255,255);
    }
    
//Cycles between red and blue if car is moving left
    if((j%2)==0&&t==1){
        background(255,100,100);
    }

    if((j%2)==1&&t==1){
        background(100,100,255);
    }


//Creates the Road
    line(0, 35, 800, 35)
//Sets the fill color to red for the car
    fill(255,0,0);
//Creates the body of the car
    rect(r,10,30,20,5,5,0,0);
//Sets the fill color to black for the wheels
    fill(0,0,0);
//Creates both wheels
    circle(r,30,10);
    circle(r+30,30,10);
//Decides to but the windsheild on either the left or right side of the car
    if(t==0){
        square(r+20,10,10,0,5,0,0);
    }

    if(t==1){
        square(r,10,10,5,0,0,0);
    }
}

