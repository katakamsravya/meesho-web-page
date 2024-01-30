const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
  eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src ="open_i.png"
    } else{
        password.type = "password";
        eyeicon.src ="close_i.png"
    }
  }
  let eyeicon1 = document.getElementById("eyeicon1");
let password1 = document.getElementById("password1");
  eyeicon1.onclick = function(){
    if(password1.type == "password"){
        password1.type = "text";
        eyeicon1.src ="open_i.png"
    } else{
        password1.type = "password";
        eyeicon1.src ="close_i.png"
    }
  }

 
  