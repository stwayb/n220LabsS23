
let b1=document.getElementById("box1");
let b2=document.getElementById("box2");
let b3=document.getElementById("box3");

b3.addEventListener("click", function(){
    update(b3,"red")
})
b2.addEventListener("click", function(){
    update(b2,"green")
})
b1.addEventListener("click", function(){
    update(b1,"blue")
})

function update(box,color){
box.style.backgroundColor=color
}