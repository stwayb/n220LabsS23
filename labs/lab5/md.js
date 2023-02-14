//Keeps track of how many times youve clicked the text
let count=0;

//The function called by the onlcick
function mcDiv(){
    count++;
    //adds "mc" to the end of the text
    document.getElementById("md").innerHTML += "mc"

    //if the count is divisable by 3 it changes the text to "divdivdiv"
    if(count%3==0){
        document.getElementById("md").innerHTML = "divdivdiv"
    }
}