
//gets both html elements as variables
let input=document.getElementById("in");
let txt=document.getElementById("text");


//function running on button press
function update(){
    let count =0;
    let win = false
    let number=input.value;

    //splits the string on ,s into an array
    let list=number.split(",");

    //loops through the new array
    for(let x=0;x<list.length;x++){

        //checks if each string is a 1 or not
        if(list[x]=="1"){

            //if it is it adds one to the counter
            count++;
            if (count>=3){
                //if the counter gets to three it changes the win boolean to true
                win=true
            }
        }
        else{

            //if it is not a 1 it resets the counter back to zero
            count=0
        }
    }

    //updates the text onscreen to either win or loss
    if (win==true){
        txt.innerHTML="win!"
    }
    else{
        txt.innerHTML="Loss :("
    }

    //clears the input field for the user
    input.value=""
}