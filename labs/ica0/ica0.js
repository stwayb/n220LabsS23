let user=document.getElementById("username");
let pass=document.getElementById("password");
let r=document.getElementById("return");
let b=document.getElementById("button");
let u;
let p;
let x=0;
function login(){
    if (x==0){
        if(user.value==""||pass.value==""){
            r.innerHTML="Please Enter Both Fields";
            if(user.value==""&&pass.value==""){
                user.style.borderColor="red";
                pass.style.borderColor="red";
            }
            else if(pass.value==""){
                user.style.borderColor="";
                pass.style.borderColor="red";
            }
            else{
                user.style.borderColor="red";
                pass.style.borderColor="";
            }
            user.value="";
            pass.value="";
        }
        else{
            x=1;
            b.innerHTML="Login"
            r.innerHTML="Please Enter username and Password"
            u=user.value;
            p=pass.value;
            user.value="";
            pass.value="";
        }
    }
    else{
        if(user.value==u&&pass.value!==p){
            r.innerHTML="Incorrect Password";
            pass.value="";
            user.style.borderColor="";
            pass.style.borderColor="red";
        }
        else if(user.value!==u||pass.value!==p){
            r.innerHTML="Incorrect Username or Password";
            user.value="";
            pass.value="";
            user.style.borderColor="red";
            pass.style.borderColor="red";
        }
        else if(user.value==u&&pass.value==p){
            user.remove();
            pass.remove();
            b.remove();

            r.innerHTML="Welcome";
        }
    }
    
}