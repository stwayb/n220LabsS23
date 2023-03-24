
//gets both html elements as variables
let user=document.getElementById("username");
let pass=document.getElementById("password");
let res=document.getElementById("return");


//checks if divisiable by 7 or not
function login(x){
    if(user.value=="Username"&&pass.value=="Password"){
        res.innerHTML="Success";
    }
    else{
        res.innerHTML="Wrong Information";
    }
}