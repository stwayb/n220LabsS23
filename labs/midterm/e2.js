
//global variable for clicks
let c=0;

function bPress(){
    //increases the global variable
    c++;

    //checks if clicks is 5 or over and if so changes the button text to be the number of clicks
    if(c>=5){
        document.getElementById("md").innerHTML = ""+c+"";
    }
}