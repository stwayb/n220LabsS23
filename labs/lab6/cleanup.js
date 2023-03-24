
//gets both html elements as variables
let out=document.getElementById("out");
let txt=document.getElementById("text");


//function running on button press
function clean(){
    //gets the current word as a variable
    let word=out.value;

    //checks each letter for a #, if there is one it gets rid of it
    for(let x=0;x<word.length;x++){
        if(word[x]=="#"){
            word=word.replace(word.substring(x,1+x),"")
        }
    }

    //changes the div to the new word
    txt.innerHTML=word;
}