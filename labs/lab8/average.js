//gets both html elements as variables
let input=document.getElementById("in");
let txt=document.getElementById("text");



//function running on button press
function update(){
    let number=input.value;

    //splits the string into an array
    let list=number.split(",");
    let sum=0;

    //loops through the array changing the numbers from strings to actual numbers
    for(let x=0;x<list.length;x++){
        list[x]=Number(list[x])
    }

    //goes through the array addind up the numbers
    for(let x=0;x<list.length;x++){
        sum+=list[x];
    }
    let average

    //devides the sum found my the length of the array of number
    average=sum/list.length;

    //changes the text on screen to the new average
    txt.innerHTML=average

    //clears the entry field
    input.value=""

}