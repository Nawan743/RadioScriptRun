function validaLogin(){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let entrar = document.getElementById("btnEntrar");

    if(user.value == '' || pass.value == ''){
        entrar.disabled;
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
