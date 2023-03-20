let out=document.getElementById("out");
let txt=document.getElementById("text");
let vowels=["a","e","i","o","u","A","E","I","O","U"];
function noVowel(){
    let word=out.value;
    for(let x=0;x<word.length;x++){
        for(let y=0;y<vowels.length;y++){
            if(word[x]==vowels[y]){
                word=word.replace(word.substring(x,1+x),"")
            }
        }
    }
    txt.innerHTML=word;
}