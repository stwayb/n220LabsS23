/*let r1=document.getElementById("r1");
let r5=document.getElementById("r5");
let r10=document.getElementById("r10");
let g1=document.getElementById("g1");
let g5=document.getElementById("g5");
let g10=document.getElementById("g10");
let b1=document.getElementById("b1");
let b5=document.getElementById("b5");
let b10=document.getElementById("b10");
*/
let r=0;
let g=0;
let b=0;
let ci=document.getElementById("colorimage");
let cc=document.getElementById("colorcode");

function red(val){
    r+=val;
    ci.style.backgroundColor="rgb("+r+","+g+","+b+")"
    update()
}

function green(val){
    g+=val;
    ci.style.backgroundColor="rgb("+r+","+g+","+b+")"
    update()
}

function blue(val){
    b+=val;
    ci.style.backgroundColor="rgb("+r+","+g+","+b+")"
    update()
}

function update(){
    cc.innerHTML="Current Color: rgb("+r+","+g+","+b+")"
}