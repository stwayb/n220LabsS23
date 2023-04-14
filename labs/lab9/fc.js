let txt=document.getElementById("text")
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");

b1.addEventListener("click",function(){
    showAnswer("b1")
})

b2.addEventListener("click",function(){
    showAnswer("b2")
})

b3.addEventListener("click",function(){
    showAnswer("b3")
})

function showAnswer(id){
    let button=document.getElementById(id)
    let answer=button.getAttribute("data-answer");
    txt.innerHTML="The Answer is: "+answer;
}