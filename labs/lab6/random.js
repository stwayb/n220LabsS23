
//gets div element as variables
let txt=document.getElementById("text");


//function to get random number
function newNumber(){
    //gets number 0-1, multiplies by 11 and rounds down
    return(Math.floor(Math.random()*11))
}


//function running on button press
function mRandom(){
    //gets random number and set the div to it
    let num = newNumber();
    txt.innerHTML=num;
}