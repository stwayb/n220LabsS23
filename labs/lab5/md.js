let count=0;

function mcDiv(){
    count++;
    document.getElementById("md").innerHTML += "mc"
    if(count%3==0){
        document.getElementById("md").innerHTML = "divdivdiv"
    }
}