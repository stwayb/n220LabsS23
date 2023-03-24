//gets both html elements as variables
let out=document.getElementById("out");
let txt=document.getElementById("text");


//function running on button press
function update(){
    //gets the current number as a variable
    let num=out.value;
    let tip = num*0.2;
    num*=1.2;

    //changes the div to the greeting
    txt.innerHTML="Tip: $" + tip +". Total: $" + num;
}