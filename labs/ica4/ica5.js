let out=document.getElementById("out");
let txt=document.getElementById("text");
let char;
function noVowel(){
    let word=out.value;
    console.log(word);
    for(let x=0;x<word.length;x++){
        if(word[x]=="a"||word[x]=="e"||word[x]=="i"||word[x]=="o"||word[x]=="u"||word[x]=="y"){
            char=word.slice(x,x+1)
            console.log(word.slice(x,x+1))
            word.replace(char,"AAAAAAAA")
        }
    }

    txt.innerHTML=word;

}