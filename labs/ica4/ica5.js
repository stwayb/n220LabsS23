let out=document.getElementById("out");
let txt=document.getElementById("text");
let vowels=["a","e","i","o","u","A","E","I","O","U"];
function isVowel(char){
    for(let y=0;y<vowels.length;y++){
        if(char==vowels[y]){
            console.log(char);
            return true
        }
    }
    return false
}


function noVowel(){
    let word=out.value;
    for(let x=0;x<word.length;x++){
        if(isVowel(word[x])){
            console.log(word[x]);
            word=word.replace(word.substring(x,1+x),"")
        }
    }
    txt.innerHTML=word
}




//word=word.replace(word.substring(x,1+x),"")