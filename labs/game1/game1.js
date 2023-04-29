let frame = 0;

let start=0;

let x = 180;
let y = 700;

let bY = 0;
let bA = 25;
let bX = 0

let shot = 0;
let shotY = 0
let shotX = 0;

let aX = 200;
let a1 = aX;
let a2 = aX +100;
let a3 = aX -100;

let a1alive = 1;
let a2alive = 1;
let a3alive = 1;

function setup() {
    createCanvas(400, 800);
}

function mouseClicked() {
    console.log("click")
    console.log(mouseX);
    console.log(mouseY);
    if ((mouseX<=350&&mouseX>=50)&&(mouseY>=480&&mouseY<=500)) {
        console.log("click Start")
        start=1;
    }
}

function draw() {

    //Starting Screen

    if (start==0){
        background(0,0,0);
        textSize(60);
        fill(255,255,255)
        textFont('Georgia');
        textStyle(NORMAL);
        text('Space Fighter', 20,300);
        textStyle(BOLDITALIC);
        text('Z', 170, 360);

        textSize(30);
        textStyle(NORMAL);
        text('Click here to start!', 70, 500);

        if(keyIsDown(13)){
            start=1;
        }

    }

    else if(start==1){

        frame++;
        background(0, 0, 0);

        if (keyIsDown(65)&&x>=0) {
            x -= 2;
        }

        if (keyIsDown(68)&&x<=345) {
            x += 2;
        }

        //White part of ship
        noStroke();
        fill(255, 255, 255);
        triangle(x + 20, y + 30, x + 40, y + 30, x + 30, y + 0);
        triangle(x + 10, y + 25, x + 50, y + 25, x + 30, y + 10);
        rect(x + 15, y + 5, 4, 20);
        rect(x + 40, y + 5, 4, 20);

        //Red part of ship
        fill(235, 89, 106);
        rect(x + 15, y + 5, 4, 4);
        rect(x + 40, y + 5, 4, 4);
        triangle(x + 25, y + 25, x + 35, y + 25, x + 30, y + 5);

        //Alien Sprite
        if(a1alive==1){
            fill(64, 227, 113);
            rect(a1 - 10, 50, 20, 20);
            rect(a1 - 15, 55, 5, 20);
            rect(a1 + 10, 55, 5, 20);
            fill(0, 0, 0);
            square(a1 - 10, 55, 5)
            square(a1 + 5, 55, 5)
        }

        if(a2alive==1){
            fill(64, 227, 113);
            rect(a2 - 10, 50, 20, 20);
            rect(a2 - 15, 55, 5, 20);
            rect(a2 + 10, 55, 5, 20);
            fill(0, 0, 0);
            square(a2 - 10, 55, 5)
            square(a2 + 5, 55, 5)
        }

        if(a3alive==1){
            fill(64, 227, 113);
            rect(a3 - 10, 50, 20, 20);
            rect(a3 - 15, 55, 5, 20);
            rect(a3 + 10, 55, 5, 20);
            fill(0, 0, 0);
            square(a3 - 10, 55, 5)
            square(a3 + 5, 55, 5)
        }

        //bullet on Spacebar
        if (keyIsDown(32) && frame >= 30) {
            frame = 0;
            shotY = y;
            shotX = x + 27;
            if (bX == 0) {
                bX = shotX;
            }
            if (bY <= 700) {
                bY = shotY;
            }
            shot = 1;
            print("bX - " + bX)
            print("shotX - " + shotX)
        }
        //bullet movement and desctruction
        if (shot == 1) {
            bY -= bA;
            fill(217, 174, 82);
            rect(bX, bY, 6, 8);
            print("bY - " + bY)
            rect(bX + 1, bY, 4, 12);

            if (bY <= 0) {
                shot = 0;
                bX = 0;
                bY = 700;
            }
            
            //Alien 1 hit
            if (((bX<=a1+20&&bX>=a1-20)&&bY==50)&&a1alive==1){
                print("HIT *******************************************************");
                a1alive=0;
                shot=0;
                bX = 0;
                bY = 700;
            }
            //Alien 2 hit
            if (((bX<=a2+20&&bX>=a2-20)&&bY==50)&&a2alive==1){
                print("HIT *******************************************************");
                a2alive=0;
                shot=0;
                bX = 0;
                bY = 700;
            }
            //Alien 3 hit
            if (((bX<=a3+20&&bX>=a3-20)&&bY==50)&&a3alive==1){
                print("HIT *******************************************************");
                a3alive=0;
                shot=0;
                bX = 0;
                bY = 700;
            }

            if(a1alive==0&&a2alive==0&&a3alive==0){
                start=2;
            }


        }
    }   

    else if(start==2){
        background(0,0,0);
        textSize(60);
        fill(255,255,255)
        textFont('Georgia');
        textStyle(NORMAL);
        text('Congrats!', 70,300);
        textSize(30);
        text('You have beat the game', 40, 360);
        text('Press R to restart', 80, 390);

        x = 180;
        y = 700;

        a1alive = 1;
        a2alive = 1;
        a3alive = 1;    

        if(keyIsDown(82)){
            start=0;
        }
    }
    


}