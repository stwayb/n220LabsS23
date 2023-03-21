

//function to write a word twice given a word
function write(word){
    //loop for said function
    for(i=0;i<2;i++){
        document.getElementById("md").innerHTML += ""+word+" ";
    }
}


//each required word
write("Cirro");
write("cumulo");
write("nimbo");
write("strato");