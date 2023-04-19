//gets both html elements as variables
let input=document.getElementById("in");
let txt=document.getElementById("text");



//function running on button press
function update(){
    let word=input.value;
    //splits srting into array on spaces
    let list=word.split(" ");

    //variables
    let count=0;
    let bad=false;

    //loops through the new array
    for(let x=0;x<list.length;x++){

        //checks each word for being one of the three bad one and if so adds one to the count and changes the bad boolean to be true
        if(list[x]=="clear"){
            count++
            bad=true
        }
        if(list[x]=="water"){
            count++
            bad=true
        }
        if(list[x]=="tires"){
            count++
            bad=true
        }
    }

    //changes the div on screen depending on the bad boolean
    if(bad==true){
        txt.innerHTML="Bad words found! There are "+count+" bad words!";
    }
    else{
        txt.innerHTML="No bad words found";
    }
    
    //clear the entry field
    input.value=""
}