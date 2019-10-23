function trocarDivs() {
    if (document.getElementById("loginCheck").checked) {
        document.getElementById("login").style.display = "inherit";
        document.getElementById("cadastro").style.display = "none";
    } else if (document.getElementById("cadastroCheck").checked) {
        document.getElementById("cadastro").style.display = "inherit";
        document.getElementById("login").style.display = "none";
    }
}
function validaLogin(){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let entrar = document.getElementById("btnEntrar");

    if(user.value == '' || pass.value == ''){
        //entrar.disabled;
        alert("Usuário e/ou senha inválido.");
    }
}

function userIcon(){
    document.getElementById("username").style.backgroundPosition = "right";
    document.getElementById("username").style.transition = "all 0.3s";
}

function passwordIcon(){
    document.getElementById("password").style.backgroundPosition = "right";
    document.getElementById("password").style.transition = "all 0.3s";
}
function cadastro(){
    let usuarios = [];
    let user = document.getElementById("usernameCadastro");
    let pass = document.getElementById("passwordCadastro");
    let confirmPass = document.getElementById("confirmPassword");
    let email = document.getElementById("email");
    let localBase = JSON.parse(localStorage.getItem("usuarios")); 

    user.style.borderBottom = "2px solid black";
    pass.style.borderBottom = "2px solid black";
    confirmPass.style.borderBottom = "2px solid black";
    email.style.borderBottom = "2px solid black";
    
    // let regex = new RegExp("[A-z0-9]{6}");
    if(user.value == ""){
        alert("Digite o usuario");
        user.style.borderBottom = "2px solid red";
    }else if(pass.value == "" /*&& regex.test(pass)*/){
        alert("Digite sua senha");
        pass.style.borderBottom = "2px solid red";
    }else if(confirmPass.value == ""){
        alert("Confirme sua senha");
        confirmPass.style.borderBottom = "2px solid red";
    }else if (pass.value != confirmPass.value){
        alert("As senhas nao conferem, por favor verifique!");
        pass.style.borderBottom = "2px solid red";
        confirmPass.style.borderBottom = "2px solid red";
    }else if(email.value == ""){
        alert("Digite seu email");  
        email.style.borderBottom = "2px solid red";
    }else {
        if(localBase != null){
            usuarios = localBase;
        }
        usuarios.push({usuario: user.value, senha: pass.value, email: email.value});
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        document.getElementById("login").style.display = "inherit";
        document.getElementById("cadastro").style.display = "none";
        document.getElementById("loginCheck").checked = true;
        document.getElementById("cadastroCheck").checked = false;
    }

}

function userIcon(id){
    document.getElementById(id).style.backgroundPosition = "right";
    document.getElementById(id).style.transition = "all 0.3s";
}

function escondeUserIcon(id){
    document.getElementById(id).style.backgroundPosition = "0px 50px";
    document.getElementById(id).style.transition = "all 0.3s";
}

function passwordIcon(id){
    document.getElementById(id).style.backgroundPosition = "right";
    document.getElementById(id).style.transition = "all 0.3s";
}

function escondePasswordIcon(id){
    document.getElementById(id).style.backgroundPosition = "0px 50px";
    document.getElementById(id).style.transition = "all 0.3s";
}

function emailIcon(){
    document.getElementById().style.backgroundPosition = "right";
    document.getElementById().style.transition = "all 0.3s";
}

function escondeEmailIcon(){
    document.getElementById().style.backgroundPosition = "0px 50px";
    document.getElementById().style.transition = "all 0.3s";
}
