function checkResponce(time){
    if(time=="morning"){
        document.getElementById("responce").innerHTML = "That is correct";
    }
    if(time=="afternoon"){
        document.getElementById("responce").innerHTML = "Guess again";
    }
    if(time=="evening"){
        document.getElementById("responce").innerHTML = "Guess again"; 
    }
}