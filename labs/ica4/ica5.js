let out=document.getElementById("out");
let txt=document.getElementById("text");
let word=out.value;

function noVowel(){
    for(let x=0;x<word.length;x++){
        console.log("hello2")
        if(word[x]=="a"||word[x]=="e"||word[x]=="i"||word[x]=="o"||word[x]=="u"||word[x]=="y"){
            console.log("hello")
            word.slice(x+1);
        }
    }

    txt.innerHTML=word;
    out.value="";

}