
//gets both html elements as variables
let out=document.getElementById("out");
let txt=document.getElementById("text");


//function running on button press
function update(){
    //gets the current word as a variable
    let word=out.value;

    //changes the div to the greeting
    txt.innerHTML="Hello " + word;
}