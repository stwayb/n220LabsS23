
//gets both html elements as variables
let out=document.getElementById("out");
let txt=document.getElementById("text");


//checks if divisiable by 7 or not
function test(x){
    if(x%7==0){
        return true
    }
    else{
        return false
    }
}


//function running on button press
function divi(){
    //saves and tests the inputed number
    let num=out.value;
    let isDiv=test(num)

    //changes the div to the result
    txt.innerHTML=isDiv;
}